
document.addEventListener("DOMContentLoaded", function () {
    const clientId = "773368697158-iqbth9pmc75qbg4knmvnmabc7h3hmve2.apps.googleusercontent.com";
    const redirectUri = "https://gaolin.org/html/callback.html";
    const scope = "profile";
    const responseType = "token";
    const prompt = "select_account";

    // 點擊登入按鈕邏輯
    document.getElementById('navbarlogin').addEventListener('click', () => {
        const accessToken = localStorage.getItem('access_token');
        if (accessToken) {
            // ✅ 已登入，導向 account.html
            window.location.href = '/html/account.html';
        } else {
            // ❌ 未登入，導向 Google 登入頁面
            window.location.href = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=${responseType}&prompt=${prompt}`;
        }
    });

    // 加載用戶頭像
    const userPicture = localStorage.getItem('userPicture');
    if (userPicture) {
        const loginElement = document.querySelector('.navbar-login');
        loginElement.style.backgroundImage = `url(${userPicture})`;
    }

    // 登出按鈕
    document.getElementById('navbarlogout').addEventListener('click', () => {
        const storedPicture = localStorage.getItem('userPicture');
        const accessToken = localStorage.getItem('access_token');

        if (storedPicture || accessToken) {
            localStorage.removeItem('userPicture');
            localStorage.removeItem('access_token');

            const loginElement = document.querySelector('.navbar-login');
            loginElement.style.backgroundImage = "url('../assets/account/navlog.png')";

            alert('您已成功登出！');
            location.reload();
        } else {
            alert('您尚未登入！');
        }

        console.log('userPicture:', localStorage.getItem('userPicture'));
        console.log('access_token:', localStorage.getItem('access_token'));
    });
});
