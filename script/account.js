
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
            // 已登入，導向 account.html
            window.location.href = '/html/profile.html';
        } else {
            // 未登入，導向 Google 登入頁面
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
        const userName = localStorage.getItem('userName');
        const userEmail = localStorage.getItem('userEmail');

        if (storedPicture || accessToken || userName || userEmail) {
            // 清除所有使用者資料
            localStorage.removeItem('userPicture');
            localStorage.removeItem('access_token');
            localStorage.removeItem('userName');
            localStorage.removeItem('userEmail');

            // 還原登入按鈕樣式
            const loginElement = document.querySelector('.navbar-login');
            if (loginElement) {
                loginElement.style.backgroundImage = "url('../assets/account/navlog.png')";
            }

            alert('您已成功登出！');
            location.reload();
        } else {
            alert('您尚未登入！');
        }

        // 除錯用：確認是否清除成功
        console.log('userPicture:', localStorage.getItem('userPicture'));
        console.log('access_token:', localStorage.getItem('access_token'));
        console.log('userName:', localStorage.getItem('userName'));
        console.log('userEmail:', localStorage.getItem('userEmail'));
    });

});
