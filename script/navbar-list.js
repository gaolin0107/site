const menu = document.getElementById('menu');
const navbarList = document.querySelector('.navbar-list');

menu.addEventListener('change', () => {
  if (menu.checked) {
    navbarList.classList.remove('close'); // 移除關閉狀態
    navbarList.style.display = 'block';   // 先顯示
    // 等瀏覽器渲染一幀後再加 open，確保有初始狀態
    requestAnimationFrame(() => {
      navbarList.classList.add('open');
    });
  } else {
    navbarList.classList.remove('open');
    navbarList.classList.add('close');
  }
});



