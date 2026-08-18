/**
 * Player.js — 第一人称玩家实体
 *
 * 职责：位置、速度、旋转、物理（重力/跳跃/碰撞）、平滑阻尼移动
 * 碰撞系统：基于 AABB（Box3）的球形碰撞检测 + 台阶通行
 */
import * as THREE from 'three';

export class Player {
  constructor(camera, quality) {
    this.camera = camera;
    this.quality = quality;

    // 位置（脚部高度，y=0 为地面）
    this.position = new THREE.Vector3(0, 0, 0);
    // 速度
    this.velocity = new THREE.Vector3(0, 0, 0);
    // 旋转
    this.yaw = 0;    // 水平旋转（弧度）
    this.pitch = 0;  // 垂直旋转（弧度）

    // 输入状态
    this.moveForward = 0;  // -1 ~ 1
    this.moveRight = 0;    // -1 ~ 1
    this.run = false;

    // 物理状态
    this.grounded = true;
    this.colliders = []; // THREE.Box3 数组

    // 复用向量，避免每帧 new
    this._forward = new THREE.Vector3();
    this._right = new THREE.Vector3();
    this._targetVel = new THREE.Vector3();
  }

  init() {
    this.camera.rotation.order = 'YXZ';
  }

  /** 设置碰撞体列表（由 CityBuilder 提供） */
  setColliders(colliders) {
    this.colliders = colliders;
  }

  /** 设置移动输入（由 Controls 调用） */
  setMoveInput(forward, right, run) {
    this.moveForward = forward;
    this.moveRight = right;
    this.run = run;
  }

  /** 添加视角旋转增量（由 Controls 调用） */
  addLook(deltaX, deltaY) {
    const sensitivity = 0.0022;
    this.yaw -= deltaX * sensitivity;
    this.pitch -= deltaY * sensitivity;
    // 限制俯仰角在 ±89° 以内，防止翻转
    const limit = Math.PI / 2 - 0.02;
    this.pitch = Math.max(-limit, Math.min(limit, this.pitch));
  }

  /** 跳跃 */
  jump() {
    if (this.grounded) {
      // v = sqrt(2 * g * h)  达到指定跳跃高度
      this.velocity.y = Math.sqrt(
        2 * this.quality.gravity * this.quality.jumpHeight
      );
      this.grounded = false;
    }
  }

  /** 每帧更新 —— 物理 + 碰撞 + 相机同步 */
  update(dt) {
    // ---------- 1. 应用视角旋转到相机 ----------
    this.camera.rotation.y = this.yaw;
    this.camera.rotation.x = this.pitch;

    // ---------- 2. 计算移动方向 ----------
    // 前方向量（仅水平面，忽略俯仰）
    this._forward.set(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
    this._right.set(Math.cos(this.yaw), 0, -Math.sin(this.yaw));

    // 目标速度
    const speed = this.run ? this.quality.runSpeed : this.quality.moveSpeed;
    this._targetVel.set(
      (this._forward.x * this.moveForward + this._right.x * this.moveRight) * speed,
      0,
      (this._forward.z * this.moveForward + this._right.z * this.moveRight) * speed
    );

    // ---------- 3. 平滑阻尼 ----------
    // 地面阻尼大（急停），空中阻尼小（惯性）
    const damping = this.grounded ? 14 : 4;
    this.velocity.x = THREE.MathUtils.damp(this.velocity.x, this._targetVel.x, damping, dt);
    this.velocity.z = THREE.MathUtils.damp(this.velocity.z, this._targetVel.z, damping, dt);

    // ---------- 4. 重力 ----------
    this.velocity.y -= this.quality.gravity * dt;

    // ---------- 5. 计算新位置 ----------
    const newPos = this.position.clone();
    newPos.x += this.velocity.x * dt;
    newPos.y += this.velocity.y * dt;
    newPos.z += this.velocity.z * dt;

    // ---------- 6. 碰撞解算 ----------
    const resolved = this.resolveCollision(newPos);
    this.position.copy(resolved.position);
    this.grounded = resolved.grounded;

    // 落地时清零垂直速度
    if (this.grounded && this.velocity.y < 0) {
      this.velocity.y = 0;
    }

    // ---------- 7. 同步相机位置 ----------
    this.camera.position.set(
      this.position.x,
      this.position.y + this.quality.eyeHeight,
      this.position.z
    );
  }

  /**
   * AABB 碰撞解算
   * - 水平阻挡：推到最近边缘
   * - 台阶通行：低矮障碍自动走上
   * - 屋顶站立：可在建筑顶部行走
   */
  resolveCollision(newPos) {
    const resolved = newPos.clone();
    const r = this.quality.playerRadius;
    const stepH = this.quality.stepHeight;
    let grounded = false;

    // 地面 y=0
    if (resolved.y <= 0) {
      resolved.y = 0;
      grounded = true;
    }

    // 遍历碰撞体（仅检查附近的）
    for (let i = 0; i < this.colliders.length; i++) {
      const box = this.colliders[i];

      // 快速距离剔除
      const cx = (box.min.x + box.max.x) / 2;
      const cz = (box.min.z + box.max.z) / 2;
      if (Math.abs(resolved.x - cx) > 50 || Math.abs(resolved.z - cz) > 50) continue;

      // XZ 范围检测（扩展 playerRadius）
      if (resolved.x > box.min.x - r && resolved.x < box.max.x + r &&
          resolved.z > box.min.z - r && resolved.z < box.max.z + r) {

        const boxTop = box.max.y;

        if (resolved.y >= boxTop - 0.05) {
          // 玩家在屋顶上方 —— 站立
          if (resolved.y < boxTop + 0.15) {
            resolved.y = boxTop;
            grounded = true;
          }
        } else if (resolved.y > boxTop - stepH) {
          // 障碍够矮 —— 自动走上台阶
          resolved.y = boxTop;
          grounded = true;
        } else {
          // 障碍太高 —— 水平阻挡，推到最近边缘
          const dx = resolved.x - cx;
          const dz = resolved.z - cz;
          const halfW = (box.max.x - box.min.x) / 2 + r;
          const halfD = (box.max.z - box.min.z) / 2 + r;

          if (Math.abs(dx) / halfW > Math.abs(dz) / halfD) {
            resolved.x = dx > 0 ? box.max.x + r : box.min.x - r;
          } else {
            resolved.z = dz > 0 ? box.max.z + r : box.min.z - r;
          }
        }
      }
    }

    return { position: resolved, grounded };
  }

  dispose() {
    this.colliders = [];
  }
}
