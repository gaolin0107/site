const menu = document.getElementById('menu');
  const navbarList = document.querySelector('.navbar-list');

  menu.addEventListener('change', () => {
      if (menu.checked) {
        navbarList.style.visibility = 'visible';
        navbarList.style.opacity = '0.7';
        navbarList.style.transform = 'translateX(100px)';
        navbarList.style.transition = 'transform 1s ease';

      } else {
        navbarList.style.transform = 'translateX(-50px)';
        setTimeout(() => {
            navbarList.style.visibility = 'hidden';
        }, 1000);
      }
  });