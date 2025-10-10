// 導覽列開關
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navList.classList.toggle('is-open');
  });
}

// 點擊logo平滑滾動到頂部
document.querySelector('.logo').addEventListener('click', function(e) {
    e.preventDefault();

    const scrollStep = 20; // 每次滾動 20px
    const interval = setInterval(() => {
        if (window.scrollY <= 0) {
            clearInterval(interval);
        } else {
            window.scrollBy(0, -scrollStep);
        }
    }, 1); // 每 10 毫秒執行一次
});
