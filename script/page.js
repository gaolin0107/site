document.addEventListener('DOMContentLoaded', () => {
    const topSection = document.querySelector('.page');
    const pageSlides = document.querySelectorAll('.page-slide');
    const pageContainer = document.querySelector('.page-container');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentIndex = 0;
    const totalPages = pageSlides.length;

    // 同步高度
    function syncHeight() {
        const topHeight = topSection.offsetHeight;
        pageSlides.forEach(slide => {
            slide.style.height = `${topHeight}px`;
        });
    }

    // 翻頁功能
    function goToPage(index) {
        currentIndex = (index + totalPages) % totalPages;
        const vw = window.innerWidth;
        pageContainer.style.transform = `translateX(-${currentIndex * vw}px)`;
    }


    // 按鈕事件
    prevBtn.addEventListener('click', () => goToPage(currentIndex - 1));
    nextBtn.addEventListener('click', () => goToPage(currentIndex + 1));

    // 初始設定
    syncHeight();
    goToPage(0);

    // 視窗縮放時更新高度
    window.addEventListener('resize', syncHeight);
});


