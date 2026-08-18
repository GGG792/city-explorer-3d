/**
 * PCControls.js — PC端键鼠控制
 *
 * - 指针锁定（Pointer Lock API）实现第一人称视角控制
 * - WASD 移动，Shift 奔跑，空格跳跃
 * - 鼠标拖拽转动视角
 * - 解锁时自动暂停并显示提示
 */
export class PCControls {
  constructor(player) {
    this.player = player;
    this.locked = false;
    this.moveForward = 0;
    this.moveRight = 0;
    this.run = false;

    // 绑定方法引用，便于移除事件监听
    this._onMouseMove = this.onMouseMove.bind(this);
    this._onKeyDown = this.onKeyDown.bind(this);
    this._onKeyUp = this.onKeyUp.bind(this);
    this._onPointerLockChange = this.onPointerLockChange.bind(this);
  }

  init() {
    this.canvas = document.querySelector('#canvas-container canvas');

    // 鼠标移动
    document.addEventListener('mousemove', this._onMouseMove);
    // 键盘
    document.addEventListener('keydown', this._onKeyDown);
    document.addEventListener('keyup', this._onKeyUp);
    // 指针锁定状态变化
    document.addEventListener('pointerlockchange', this._onPointerLockChange);
  }

  /** 请求指针锁定 */
  lock() {
    if (this.canvas && !this.locked) {
      this.canvas.requestPointerLock();
    }
  }

  /** 退出指针锁定 */
  unlock() {
    if (document.pointerLockElement) {
      document.exitPointerLock();
    }
  }

  onPointerLockChange() {
    this.locked = document.pointerLockElement === this.canvas;
    if (!this.locked) {
      // 解锁时停止移动
      this.moveForward = 0;
      this.moveRight = 0;
      this.run = false;
      this.player.setMoveInput(0, 0, false);
      // 通知外部显示暂停覆盖层
      if (this.onUnlock) this.onUnlock();
    }
  }

  onMouseMove(e) {
    if (!this.locked) return;
    // movementX/Y 是相对移动量，不受屏幕边界限制
    this.player.addLook(e.movementX, e.movementY);
  }

  onKeyDown(e) {
    if (!this.locked) return;
    switch (e.code) {
      case 'KeyW': case 'ArrowUp':
        this.moveForward = 1; break;
      case 'KeyS': case 'ArrowDown':
        this.moveForward = -1; break;
      case 'KeyA': case 'ArrowLeft':
        this.moveRight = -1; break;
      case 'KeyD': case 'ArrowRight':
        this.moveRight = 1; break;
      case 'ShiftLeft': case 'ShiftRight':
        this.run = true; break;
      case 'Space':
        e.preventDefault();
        this.player.jump(); break;
    }
  }

  onKeyUp(e) {
    switch (e.code) {
      case 'KeyW': case 'ArrowUp':
        if (this.moveForward > 0) this.moveForward = 0; break;
      case 'KeyS': case 'ArrowDown':
        if (this.moveForward < 0) this.moveForward = 0; break;
      case 'KeyA': case 'ArrowLeft':
        if (this.moveRight < 0) this.moveRight = 0; break;
      case 'KeyD': case 'ArrowRight':
        if (this.moveRight > 0) this.moveRight = 0; break;
      case 'ShiftLeft': case 'ShiftRight':
        this.run = false; break;
    }
  }

  /** 每帧将输入传递给玩家 */
  update() {
    if (this.locked) {
      this.player.setMoveInput(this.moveForward, this.moveRight, this.run);
    }
  }

  dispose() {
    document.removeEventListener('mousemove', this._onMouseMove);
    document.removeEventListener('keydown', this._onKeyDown);
    document.removeEventListener('keyup', this._onKeyUp);
    document.removeEventListener('pointerlockchange', this._onPointerLockChange);
  }
}
