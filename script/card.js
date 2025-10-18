document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.card');

  // 預設顯示 data-tags="1"
  cards.forEach(card => {
    const tags = (card.dataset.tags || '').split(' ');
    card.style.display = tags.includes('1') ? '' : 'none';
  });

  // 套用按鈕點擊邏輯
  if (filterBtns.length && cards.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');

        const filter = btn.dataset.filter;
        cards.forEach(card => {
          if (filter === 'all') {
            card.style.display = '';
          } else {
            const tags = (card.dataset.tags || '').split(' ');
            card.style.display = tags.includes(filter) ? '' : 'none';
          }
        });
      });
    });
  }
});
