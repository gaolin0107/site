  function updateNavClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        document.getElementById('nav-clock').textContent = `${hours}:${minutes}`;
    }

    setInterval(updateNavClock, 1000);
    updateNavClock();