const navToggleInput = document.getElementById('menu');
const navList = document.querySelector('.nav-list');

if (navToggleInput) {
  navToggleInput.addEventListener('change', () => {
    const expanded = navToggleInput.checked;
    navToggleInput.setAttribute('aria-expanded', String(expanded));
    navList.classList.toggle('is-open', expanded);
  });
}


// 點擊 logo 回到頂部
document.querySelector('.logo').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
