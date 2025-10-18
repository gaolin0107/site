document.addEventListener("DOMContentLoaded", function () {
    const clientId = "773368697158-iqbth9pmc75qbg4knmvnmabc7h3hmve2.apps.googleusercontent.com";
    const redirectUri = "https://gaolin.org/html/callback.html";
    const scope = "profile";
    const responseType = "token";
    const prompt = "select_account";

    const loginElement = document.querySelector('.navbar-login');
    const loginButton = document.getElementById('navbarlog');
    const logoutButton = document.getElementById('navbarlogout');

    // 點擊登入按鈕邏輯
    loginButton.addEventListener('click', () => {
        window.location.href = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=${responseType}&prompt=${prompt}`;
    });

    // 加載用戶頭像邏輯
    const userPicture = localStorage.getItem('userPicture');
    if (userPicture && loginElement) {
        // 使用已存在的 loginElement，不要重新宣告
        loginElement.style.backgroundImage = `url("${userPicture}")`;
        loginElement.classList.add('logged-in');
    }
    
    if (loginElement) {
        loginElement.addEventListener('click', () => {
            if (loginElement.classList.contains('logged-in')) {
                window.location.href = '/html/profile.html'; // 或你想導向的頁面
            }
        });
    }


    // 登出按鈕邏輯
    logoutButton.addEventListener('click', () => {
        const storedPicture = localStorage.getItem('userPicture');
        const accessToken = localStorage.getItem('access_token');

        if (storedPicture) {
            localStorage.removeItem('userPicture');
            localStorage.removeItem('access_token');

            loginElement.classList.remove('logged-in');
            loginElement.style.backgroundImage = "url('../assets/account/navlog.png')";
            loginButton.style.display = 'block'; // 顯示登入按鈕
            alert('您已成功登出！');
            location.reload();
        } else {
            alert('您尚未登入！');
        }

        console.log('userPicture:', storedPicture);
        console.log('access_token:', accessToken);
    });
});
