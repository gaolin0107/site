document.addEventListener("DOMContentLoaded", function () {
    const clientId = "773368697158-iqbth9pmc75qbg4knmvnmabc7h3hmve2.apps.googleusercontent.com";
    const redirectUri = "https://gaolin.org/html/callback.html";
    const scope = "profile";
    const responseType = "token";
    const prompt = "select_account";

    const loginElement = document.querySelector('.navbar-login');
    const loginButton = document.getElementById('navbarlogin');
    const logoutButton = document.getElementById('navbarlogout');

    const userPicture = localStorage.getItem('userPicture');
    const accessToken = localStorage.getItem('access_token');

    // ✅ 如果已登入，顯示頭像並改變登入按鈕行為
    if (userPicture && accessToken) {
        loginElement.style.backgroundImage = `url(${userPicture})`;
        loginElement.classList.add('logged-in');

        // ✅ 點擊登入按鈕導向 account.html
        loginButton.addEventListener('click', () => {
            window.location.href = '/html/account.html';
        });

        // ✅ 可選：隱藏登入按鈕，改用頭像顯示
        loginButton.style.display = 'none';
    } else {
        // ✅ 尚未登入，點擊登入按鈕進行 Google OAuth
        loginButton.addEventListener('click', () => {
            window.location.href = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=${responseType}&prompt=${prompt}`;
        });
    }

    // ✅ 登出邏輯
    logoutButton.addEventListener('click', () => {
        if (userPicture && accessToken) {
            localStorage.removeItem('userPicture');
            localStorage.removeItem('access_token');

            loginElement.classList.remove('logged-in');
            loginElement.style.backgroundImage = "url('../assets/account/navlog.png')";
            loginButton.style.display = 'block';
            alert('您已成功登出！');
            location.reload();
        } else {
            alert('您尚未登入！');
        }

        console.log('userPicture:', userPicture);
        console.log('access_token:', accessToken);
    });
});
