const navToggleInput = document.getElementById('menu');
const navList = document.querySelector('.nav-list');

if (navToggleInput) {
  navToggleInput.addEventListener('change', () => {
    const expanded = navToggleInput.checked;
    navToggleInput.setAttribute('aria-expanded', String(expanded));

    if (expanded) {
      navList.classList.remove('close');
      navList.classList.add('open');
      navList.style.display = 'flex'; // 顯示 nav-list，讓動畫生效
    } else {
      navList.classList.remove('open');
      navList.classList.add('close');

      setTimeout(() => {
        navList.style.display = 'none'; // 等動畫結束後再隱藏
      }, 600);
    }
  });
}

window.addEventListener('resize', () => {
  const isDesktop = window.innerWidth >= 980; // 根據你的斷點設定
  if (isDesktop) {
    navList.style.display = 'flex';
    navList.classList.remove('close');
    navList.classList.add('open');
  } else {
    const expanded = navToggleInput.checked;
    if (!expanded) {
      navList.style.display = 'none';
      navList.classList.remove('open');
      navList.classList.add('close');
    }
  }
});

const nav = document.querySelector('.nav');
const list = document.querySelector('.nav-list');
const topSection = document.querySelector('#top');

const observer = new IntersectionObserver(
  ([entry]) => {
    // 離開頂部才加上 active
    if (!entry.isIntersecting) {
      nav.classList.add('active');
      list.classList.add('active');
    } else {
      nav.classList.remove('active');
      list.classList.remove('active');
    }
  },
  {
    root: null,
    threshold: 0.1, // 只要有 10% 進入畫面就觸發
  }
);

observer.observe(topSection);


