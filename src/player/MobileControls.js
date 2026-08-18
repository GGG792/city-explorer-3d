/**
 * MobileControls.js — 手机触屏控制
 *
 * - 左下角虚拟摇杆（浮动式，手指按下处出现）
 * - 右侧大区域拖拽转动相机视角
 * - 右下角奔跑/跳跃按钮
 * - 强制横屏提示（竖屏时遮罩）
 * - 多点触控：摇杆与视角可同时操作
 */
export class MobileControls {
  constructor(player) {
    this.player = player;

    // 摇杆状态
    this.joystickActive = false;
    this.joystickId = null;
    this.joystickStart = { x: 0, y: 0 };
    this.joystickRadius = 60;

    // 视角拖拽状态
    this.lookId = null;
    this.lookLast = { x: 0, y: 0 };

    // 按钮状态
    this.runPressed = false;

    // 绑定方法
    this._onTouchStart = this.onTouchStart.bind(this);
    this._onTouchMove = this.onTouchMove.bind(this);
    this._onTouchEnd = this.onTouchEnd.bind(this);
    this._onOrientationChange = this.onOrientationChange.bind(this);
  }

  init() {
    // 显示手机控制 UI
    const controlsEl = document.getElementById('mobile-controls');
    if (controlsEl) controlsEl.style.display = 'block';

    // 获取DOM元素
    this.joystickZone = document.getElementById('joystick-zone');
    this.joystickBase = document.getElementById('joystick-base');
    this.joystickThumb = document.getElementById('joystick-thumb');
    this.lookZone = document.getElementById('look-zone');
    this.btnRun = document.getElementById('btn-run');
    this.btnJump = document.getElementById('btn-jump');

    // 全局触摸事件（在 document 上监听，通过坐标判断区域）
    document.addEventListener('touchstart', this._onTouchStart, { passive: false });
    document.addEventListener('touchmove', this._onTouchMove, { passive: false });
    document.addEventListener('touchend', this._onTouchEnd, { passive: false });
    document.addEventListener('touchcancel', this._onTouchEnd, { passive: false });

    // 按钮事件
    this.btnRun.addEventListener('touchstart', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.runPressed = true;
      this.btnRun.classList.add('active');
    }, { passive: false });
    this.btnRun.addEventListener('touchend', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.runPressed = false;
      this.btnRun.classList.remove('active');
    }, { passive: false });

    this.btnJump.addEventListener('touchstart', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.player.jump();
      this.btnJump.classList.add('active');
    }, { passive: false });
    this.btnJump.addEventListener('touchend', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.btnJump.classList.remove('active');
    }, { passive: false });

    // 屏幕旋转监听
    window.addEventListener('orientationchange', this._onOrientationChange);
    this.onOrientationChange();
  }

  /** 判断触摸点是否在摇杆区域内 */
  isInJoystickZone(x, y) {
    const rect = this.joystickZone.getBoundingClientRect();
    // 扩大触摸区域到左下角四分之一屏幕
    return x < window.innerWidth * 0.45 && y > window.innerHeight * 0.4;
  }

  /** 判断触摸点是否在视角区域内 */
  isInLookZone(x, y) {
    // 右侧大片区域，排除按钮区域
    return x > window.innerWidth * 0.4 &&
           !(x > window.innerWidth - 180 && y > window.innerHeight - 120);
  }

  onTouchStart(e) {
    e.preventDefault();
    for (const touch of e.changedTouches) {
      const x = touch.clientX;
      const y = touch.clientY;

      // 跳过按钮区域（按钮有自己的事件处理）
      const target = document.elementFromPoint(x, y);
      if (target && (target.id === 'btn-run' || target.id === 'btn-jump')) continue;

      // 摇杆区域
      if (this.isInJoystickZone(x, y) && this.joystickId === null) {
        this.joystickId = touch.identifier;
        this.joystickStart = { x, y };
        this.joystickActive = true;
        // 浮动摇杆：移动 base 到触摸点
        this.joystickBase.style.left = (x - 70) + 'px';
        this.joystickBase.style.top = (y - 70) + 'px';
        this.joystickBase.style.bottom = 'auto';
        this.joystickThumb.style.transform = 'translate(-50%, -50%)';
      }
      // 视角区域
      else if (this.isInLookZone(x, y) && this.lookId === null) {
        this.lookId = touch.identifier;
        this.lookLast = { x, y };
      }
    }
  }

  onTouchMove(e) {
    e.preventDefault();
    for (const touch of e.changedTouches) {
      // 摇杆移动
      if (touch.identifier === this.joystickId) {
        const dx = touch.clientX - this.joystickStart.x;
        const dy = touch.clientY - this.joystickStart.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const clampedDist = Math.min(dist, this.joystickRadius);
        const angle = Math.atan2(dy, dx);

        // 摇杆 thumb 位置
        const thumbX = Math.cos(angle) * clampedDist;
        const thumbY = Math.sin(angle) * clampedDist;
        this.joystickThumb.style.transform =
          `translate(calc(-50% + ${thumbX}px), calc(-50% + ${thumbY}px))`;

        // 归一化移动输入（-1 ~ 1）
        const nx = clampedDist > 0 ? (dx / dist) * (clampedDist / this.joystickRadius) : 0;
        const ny = clampedDist > 0 ? (dy / dist) * (clampedDist / this.joystickRadius) : 0;

        // 屏幕 Y 向下 = 前进；X 向右 = 右移
        this.player.setMoveInput(-ny, nx, this.runPressed);
      }

      // 视角移动
      if (touch.identifier === this.lookId) {
        const dx = touch.clientX - this.lookLast.x;
        const dy = touch.clientY - this.lookLast.y;
        this.lookLast = { x: touch.clientX, y: touch.clientY };
        // 触屏灵敏度比鼠标稍高
        this.player.addLook(dx * 1.5, dy * 1.5);
      }
    }
  }

  onTouchEnd(e) {
    e.preventDefault();
    for (const touch of e.changedTouches) {
      // 摇杆释放
      if (touch.identifier === this.joystickId) {
        this.joystickId = null;
        this.joystickActive = false;
        this.player.setMoveInput(0, 0, false);
        // 复位摇杆
        this.joystickBase.style.left = '';
        this.joystickBase.style.top = '';
        this.joystickBase.style.bottom = '0';
        this.joystickThumb.style.transform = 'translate(-50%, -50%)';
      }
      // 视角释放
      if (touch.identifier === this.lookId) {
        this.lookId = null;
      }
    }
  }

  /** 屏幕旋转处理 */
  onOrientationChange() {
    // 横屏时隐藏旋转提示，竖屏时显示
    const hint = document.getElementById('rotate-hint');
    if (!hint) return;
    const isPortrait = window.innerHeight > window.innerWidth;
    hint.style.display = isPortrait ? 'flex' : 'none';
  }

  update() {
    // 移动输入已在触摸事件中实时设置，此处无需额外处理
    // 但需要持续更新奔跑状态
    if (this.joystickActive) {
      this.player.setMoveInput(
        this.player.moveForward,
        this.player.moveRight,
        this.runPressed
      );
    }
  }

  dispose() {
    document.removeEventListener('touchstart', this._onTouchStart);
    document.removeEventListener('touchmove', this._onTouchMove);
    document.removeEventListener('touchend', this._onTouchEnd);
    document.removeEventListener('touchcancel', this._onTouchEnd);
    window.removeEventListener('orientationchange', this._onOrientationChange);
  }
}
