  const greetings = [
  '哈囉',       // 繁體中文
  'Hi',       // 英文
  'こんにちは', // 日文
  '안녕하세요', // 韓文
  '¡Hola!',   // 西班牙文
  'Salut',    // 法文
  'Hallo',    // 德文
  'Ciao',     // 義大利文
  'Привет',   // 俄文
  'नमस्ते',   // 印地語
  'مرحباً',   // 阿拉伯文
  'สวัสดี',   // 泰文
  'Olá',      // 葡萄牙文
  'Hej',      // 瑞典文
  'Selam',    // 土耳其文
  'Halo',     // 印尼文
  'Xin chào', // 越南文
  'မင်္ဂလာပါ', // 緬甸文
  'سلام',     // 波斯文
  'Aloha'     // 夏威夷文
];

let index = 0;
const el = document.getElementById('greeting');

function typeGreeting() {
  el.classList.remove('typing');         // 移除動畫 class
  void el.offsetWidth;               // 強制 reflow，觸發動畫重播
  el.textContent = greetings[index]; // 更新文字
  el.classList.add('typing');            // 再次加上動畫 class
}

setInterval(() => {
  el.classList.add('fade-out');
  setTimeout(() => {
    index = (index + 1) % greetings.length;
    el.classList.remove('fade-out');
    typeGreeting();
  }, 500);
}, 2000);

