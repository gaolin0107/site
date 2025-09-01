const menu = document.getElementById('menu');
  const navbarList = document.querySelector('.navbar-list');

  menu.addEventListener('change', () => {
      if (menu.checked) {
          navbarList.style.visibility = 'visible';
          navbarList.style.opacity = '0.7';
          navbarList.style.transform = 'translateX(0)';
      } else {
          navbarList.style.transform = 'translateX(200px)';
      }
  });