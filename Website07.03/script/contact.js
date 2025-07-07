document.addEventListener('DOMContentLoaded', function() {
    var contactLinks = document.querySelectorAll('a[href="#contact"]');
    contactLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const target = document.getElementById('poem-line'); // 你的目標文字
            if (!target) return;

            const targetRect = target.getBoundingClientRect();
            const targetY = targetRect.top + window.pageYOffset - (window.innerHeight / 2 - targetRect.height / 2);
            const startY = window.pageYOffset;
            const duration = 2200; // **固定 2.2 秒**
            let startTime = null;

            function animateScroll(currentTime) {
                if (!startTime) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const progress = Math.min(timeElapsed / duration, 1);
                window.scrollTo(0, startY + (targetY - startY) * progress);
                if (progress < 1) {
                    requestAnimationFrame(animateScroll);
                }
            }

            requestAnimationFrame(animateScroll);
        });
    });
});
