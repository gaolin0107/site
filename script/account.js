document.addEventListener("DOMContentLoaded", function () {
    // Google OAuth 設定
    const clientId = "773368697158-iqbth9pmc75qbg4knmvnmabc7h3hmve2.apps.googleusercontent.com";
    const redirectUri = "https://gaolin.org/html/callback.html";
    const scope = "profile";
    const responseType = "token";
    const prompt = "select_account";

    // DOM 元素
    const popup = document.getElementById("profile-info-popup");
    const loginBtn = document.getElementById("navbarlogin");
    const closeBtn = document.getElementById("close-profile-info");
    const logoutBtn = document.getElementById("account-logout");
    const loginElement = document.querySelector(".navbar-login");

    // ✅ 點擊登入按鈕：開啟彈窗或導向 Google 登入
    loginBtn.addEventListener("click", () => {
        const accessToken = localStorage.getItem("access_token");

        if (accessToken) {
            const userName = localStorage.getItem("userName");
            const userEmail = localStorage.getItem("userEmail");
            const userPicture = localStorage.getItem("userPicture");

            const picEl = popup.querySelector(".profile-picture");
            const nameEl = popup.querySelector(".profile-name");
            const emailEl = popup.querySelector(".profile-email");

            if (userPicture && picEl) picEl.src = userPicture;
            if (userName && nameEl) nameEl.textContent = userName;
            if (userEmail && emailEl) emailEl.textContent = userEmail;

            popup.classList.add("show");
        } else {
            window.location.href = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=${responseType}&prompt=${prompt}`;
        }
    });

    // ✅ 點擊關閉按鈕：關閉彈窗
    closeBtn.addEventListener("click", () => {
        popup.classList.add("fade-out");
        setTimeout(() => {
            popup.classList.remove("show", "fade-out");
        }, 400); // 與 CSS transition 時間一致
    });

    // ✅ 點擊背景：關閉彈窗
    popup.addEventListener("click", (e) => {
        if (e.target === popup) {
            popup.classList.add("fade-out");
            setTimeout(() => {
                popup.classList.remove("show", "fade-out");
            }, 400); // 與 CSS transition 時間一致
        }
    });

    // ✅ 加載頭像到 navbar-login
    const userPicture = localStorage.getItem("userPicture");
    if (userPicture && loginElement) {
        loginElement.style.backgroundImage = `url(${userPicture})`;
    }

    // ✅ 點擊彈窗內登出按鈕
    logoutBtn.addEventListener("click", logoutHandler);


    // ✅ 登出邏輯
    function logoutHandler() {
        const storedPicture = localStorage.getItem("userPicture");
        const accessToken = localStorage.getItem("access_token");
        const userName = localStorage.getItem("userName");
        const userEmail = localStorage.getItem("userEmail");

        if (storedPicture || accessToken || userName || userEmail) {
            localStorage.removeItem("userPicture");
            localStorage.removeItem("access_token");
            localStorage.removeItem("userName");
            localStorage.removeItem("userEmail");

            if (loginElement) {
                loginElement.style.backgroundImage = "url('../assets/account/navlog.png')";
            }

            alert("您已成功登出！");
            location.reload();
        } else {
            alert("您尚未登入！");
            logoutBtn.disabled = true; // 立即禁用
            setTimeout(() => {
                logoutBtn.disabled = false; // 3 秒後恢復
            }, 3000);
        }

        // 除錯用：確認是否清除成功
        console.log("userPicture:", localStorage.getItem("userPicture"));
        console.log("access_token:", localStorage.getItem("access_token"));
        console.log("userName:", localStorage.getItem("userName"));
        console.log("userEmail:", localStorage.getItem("userEmail"));
    }
});
