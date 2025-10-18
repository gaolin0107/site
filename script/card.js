document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.card');

  // 預設顯示 data-tags="1"
  cards.forEach(card => {
    const tags = (card.dataset.tags || '').split(' ');
    card.style.display = tags.includes('1') ? '' : 'none';
  });

  cards.forEach(card => {
    const tags = (card.dataset.tags || '').split(' ');
    const shouldShow = tags.includes('1');
    card.style.display = shouldShow ? '' : 'none';
    console.log(`card ${card.dataset.tags} → ${shouldShow ? '顯示' : '隱藏'}`);
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
