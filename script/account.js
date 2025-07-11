document.addEventListener("DOMContentLoaded", function() {

    const clientId = '773368697158-iqbth9pmc75qbg4knmvnmabc7h3hmve2.apps.googleusercontent.com';
    const redirectUri = 'https://gaolin.org/html/callback.html';
    const scope = 'profile';
    const responseType = 'token';
    const prompt = 'select_account'; // 強制每次登入選擇帳號

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
            loginElement.style.backgroundColor = '#ccc';

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
