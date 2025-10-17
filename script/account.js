document.addEventListener("DOMContentLoaded", function () {

    const clientId = "773368697158-iqbth9pmc75qbg4knmvnmabc7h3hmve2.apps.googleusercontent.com";
    const redirectUri = "https://gaolin.org/html/callback.html";
    const scope = "profile";
    const responseType = "token";
    const prompt = "select_account";

    // 點擊登入按鈕邏輯
    document.getElementById('navbarlog').addEventListener('click', () => {
        window.location.href = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=${responseType}&prompt=${prompt}`;
    });

    // 加載用戶頭像邏輯
    const userPicture = localStorage.getItem('userPicture');
    if (userPicture) {
        const loginElement = document.querySelector('.navbar-login');
        loginElement.style.backgroundImage = `url(${userPicture})`;
        // 禁用登入按鈕
        loginElement.style.pointerEvents = 'none';
    }

    if (!accessToken || !userPicture) {
        alert("請先登入才能使用此頁面！");
        window.location.href = "../html/login.html"; // 替換成你的登入頁面
        return; // 停止後續執行
    }

    // 登出按鈕邏輯，這裡可以正確獲得 #navbarout 元素
    document.getElementById('navbarlogout').addEventListener('click', () => {
        const storedPicture = localStorage.getItem('userPicture');
        const accessToken = localStorage.getItem('access_token');

        if (userPicture) {
            loginElement.style.backgroundImage = `url(${userPicture})`;
            loginElement.classList.add('logged-in');
            loginElement.addEventListener('mouseenter', () => {
                loginElement.style.backgroundImage = `url(${userPicture})`;
            });
            // 點擊頭像導向新介面
            loginElement.addEventListener('click', () => {
                window.location.href = "url('../html/profile.html')"; // 替換成你要導向的頁面
            });
        }

        if (userPicture) {
            localStorage.removeItem('userPicture');
            localStorage.removeItem('access_token');
            loginElement.classList.remove('logged-in');
            loginElement.style.backgroundImage = "url('../assets/account/navlog.png')";
            loginElement.style.pointerEvents = 'auto';
            loginElement.style.opacity = '1';
            alert('您已成功登出！');
            location.reload();
        } else {
            alert('您尚未登入！');
        }

        console.log('userPicture:', localStorage.getItem('userPicture'));
        console.log('access_token:', localStorage.getItem('access_token'));
    });
});
