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
  document.getElementById("months").textContent = months;
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

setInterval(updateCountdown, 1000);
