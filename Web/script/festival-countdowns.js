const lunarFestivalDates = {
  2025: {
    "農曆新年": "2025-01-29",
    "元宵節": "2025-02-12",
    "清明節": "2025-04-04",
    "端午節": "2025-06-01",
    "七夕":   "2025-08-02",
    "中秋節": "2025-10-06",
    "重陽節": "2025-10-29",
    "除夕":   "2025-12-28"
  },
  2026: {
    "農曆新年": "2026-02-18",
    "元宵節": "2026-03-05",
    "清明節": "2026-04-04",
    "端午節": "2026-05-24",
    "七夕":   "2026-08-15",
    "中秋節": "2026-10-05",
    "重陽節": "2026-10-27",
    "除夕":   "2026-02-17"
  },
  2027: {
    "農曆新年": "2027-02-07",
    "元宵節": "2027-02-21",
    "清明節": "2027-04-05",
    "端午節": "2027-06-11",
    "七夕":   "2027-08-24",
    "中秋節": "2027-09-25",
    "重陽節": "2027-10-15",
    "除夕":   "2027-02-06"
  },
  2028: {
    "農曆新年": "2028-01-26",
    "元宵節": "2028-02-09",
    "清明節": "2028-04-04",
    "端午節": "2028-05-31",
    "七夕":   "2028-08-12",
    "中秋節": "2028-10-03",
    "重陽節": "2028-10-23",
    "除夕":   "2028-01-25"
  },
  2029: {
    "農曆新年": "2029-02-13",
    "元宵節": "2029-02-27",
    "清明節": "2029-04-04",
    "端午節": "2029-06-20",
    "七夕":   "2029-08-01",
    "中秋節": "2029-09-22",
    "重陽節": "2029-10-11",
    "除夕":   "2029-02-12"
  },
  2030: {
    "農曆新年": "2030-02-03",
    "元宵節": "2030-02-17",
    "清明節": "2030-04-05",
    "端午節": "2030-06-10",
    "七夕":   "2030-08-19",
    "中秋節": "2030-09-21",
    "重陽節": "2030-10-10",
    "除夕":   "2030-02-02"
  }
};

const container = document.getElementById("festival-countdowns");
const timerList = [];

function pad(n) {
  return n.toString().padStart(2, "0");
}

function createStructure(idPrefix, name) {
  const div = document.createElement("div");
  div.id = idPrefix;
  div.setAttribute("translate", "no");
  div.innerHTML = `
    <span>🎊 距離 <strong>${name}</strong> 還有</span>
    <span><span id="${idPrefix}-days">--</span> 天</span>
    <span><span id="${idPrefix}-hours">--</span> 時</span>
    <span><span id="${idPrefix}-minutes">--</span> 分</span>
    <span><span id="${idPrefix}-seconds">--</span> 秒</span>
  `;
  return div;
}

function buildFestivalTimers() {
  const now = new Date();
  for (let y = now.getFullYear(); y <= 2030; y++) {
    const group = lunarFestivalDates[y];
    if (!group) continue;

    for (const [name, dateStr] of Object.entries(group)) {
      const date = new Date(`${dateStr}T00:00:00`);
      if (date <= now) continue;

      const idPrefix = `festival-${name.replace(/\W/g, "")}-${y}`;
      const block = createStructure(idPrefix, name);
      container.appendChild(block);
      timerList.push({ id: idPrefix, date });
    }
  }
}

function updateCountdowns() {
  const now = new Date();
  timerList.forEach(f => {
    const diff = f.date - now;
    if (diff <= 0) return;

    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);

    document.getElementById(`${f.id}-days`).textContent = pad(days);
    document.getElementById(`${f.id}-hours`).textContent = pad(hours);
    document.getElementById(`${f.id}-minutes`).textContent = pad(minutes);
    document.getElementById(`${f.id}-seconds`).textContent = pad(seconds);
  });
}

buildFestivalTimers();
setInterval(updateCountdowns, 1000);
