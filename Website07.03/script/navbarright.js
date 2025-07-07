const menu = document.getElementById('menu');
  const navbarRight = document.querySelector('.navbar-right');

  menu.addEventListener('change', () => {
      if (menu.checked) {
          navbarRight.style.visibility = 'visible';
          navbarRight.style.opacity = '0.7';
          navbarRight.style.transform = 'translateX(0)';
      } else {
          navbarRight.style.transform = 'translateX(200px)';
      }
  });