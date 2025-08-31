function updateAnimationDuration() {
  const screenWidth = window.innerWidth;
  const duration = screenWidth / 100; // 單位：秒
  const navbar = document.querySelector('.navbar-middle-text');
  navbar.style.animationDuration = `${duration}s`;
}

// 一開始設定一次
updateAnimationDuration();

// 如果使用者改變視窗大小，就重新計算
window.addEventListener('resize', updateAnimationDuration);
