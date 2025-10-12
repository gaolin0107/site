const navToggleInput = document.getElementById('menu');
const navList = document.querySelector('.nav-list');

if (navToggleInput) {
  navToggleInput.addEventListener('change', () => {
    const expanded = navToggleInput.checked;
    navToggleInput.setAttribute('aria-expanded', String(expanded));
    navList.classList.toggle('is-open', expanded);
  });
}


