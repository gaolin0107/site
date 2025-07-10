function updateCountdown() {
  const now = new Date();
  const year = now.getFullYear();
  const target = new Date(`${year}-12-31T23:59:59`);
  const diff = target - now;

  if (diff <= 0) {
    document.getElementById("countdown").textContent = `🎆 新年快樂 ${year + 1}！`;
    return;
  }

  let months = target.getMonth() - now.getMonth();
  let days = target.getDate() - now.getDate();

  if (days < 0) {
    months--;
    days += new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  }
  if (months < 0) months += 12;

  const hours = Math.floor((diff / 3600000) % 24);
  const minutes = Math.floor((diff / 60000) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("year").textContent = year + 1;
  document.getElementById("months").textContent = months.toString().padStart(2, '0');
  document.getElementById("days").textContent = days.toString().padStart(2, '0');
  document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
  document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);
