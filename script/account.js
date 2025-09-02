document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");
  const loginBtn = document.getElementById("navbarlog");
  const closeBtn = document.querySelector(".close-btn");
// 開啟彈窗
loginBtn.addEventListener("click", () => {
  popup.classList.add("show");
});

// 關閉彈窗（按關閉按鈕）
closeBtn.addEventListener("click", () => {
  popup.classList.remove("show");
});

// 點擊背景關閉
popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.classList.remove("show");
  }
});


  // 🌐 Google OAuth 登入流程
  window.googleLogin = () => {
    const clientId = "773368697158-iqbth9pmc75qbg4knmvnmabc7h3hmve2.apps.googleusercontent.com";
    const redirectUri = "https://gaolin.org/html/callback.html";
    const scope = "profile";
    const responseType = "token";
    const prompt = "select_account";

    window.location.href = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=${responseType}&prompt=${prompt}`;
  };

    // 加載用戶頭像邏輯
    const userPicture = localStorage.getItem('userPicture');
    if (userPicture) {
        const loginElement = document.querySelector('.navbar-login');
        loginElement.style.backgroundImage = `url(${userPicture})`;
        // 禁用登入按鈕
        loginElement.style.pointerEvents = 'none';
    }

    // 登出按鈕邏輯，這裡可以正確獲得 #navbarout 元素
    document.getElementById('navbarout').addEventListener('click', () => {
        const storedPicture = localStorage.getItem('userPicture');
        const accessToken = localStorage.getItem('access_token');

        if (storedPicture || accessToken) {
            // 清除 LocalStorage 中的數據
            localStorage.removeItem('userPicture');
            localStorage.removeItem('access_token');

            // 重置 .navbar-login 背景為預設
            const loginElement = document.querySelector('.navbar-login');
            loginElement.style.backgroundImage = '';
            // 恢復按鈕可用狀態
            loginElement.style.pointerEvents = 'auto';
            loginElement.style.opacity = '1';

            alert('您已成功登出！');
        } else {
            alert('您尚未登入！');
        }

        console.log('userPicture:', localStorage.getItem('userPicture')); 
        console.log('access_token:', localStorage.getItem('access_token')); 
    });
});

