document.addEventListener("DOMContentLoaded", function () {
    const clientId = "773368697158-iqbth9pmc75qbg4knmvnmabc7h3hmve2.apps.googleusercontent.com";
    const redirectUri = "https://gaolin.org/html/callback.html";
    const scope = "profile email";
    const responseType = "token";
    const prompt = "select_account";

    const popup = document.getElementById("profile-info-popup");
    const loginBtn = document.getElementById("navbarlogin");
    const closeBtn = document.getElementById("close-profile-info");
    const logoutBtn = document.getElementById("account-logout");
    const loginElement = document.querySelector(".navbar-login");

    loginBtn.addEventListener("click", () => {
        const accessToken = localStorage.getItem("access_token");

        if (accessToken) {
            const userName = localStorage.getItem("userName");
            const userEmail = localStorage.getItem("userEmail");
            const userPicture = localStorage.getItem("userPicture");

            popup.querySelector(".profile-picture").src = userPicture || "";
            popup.querySelector(".profile-name").textContent = userName || "";
            popup.querySelector(".profile-email").textContent = userEmail || "";

            popup.classList.add("show");
        } else {
            window.location.href = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=${responseType}&prompt=${prompt}`;
        }
    });

    closeBtn.addEventListener("click", () => {
        popup.classList.add("fade-out");
        setTimeout(() => popup.classList.remove("show", "fade-out"), 400);
    });

    popup.addEventListener("click", (e) => {
        if (e.target === popup) {
            popup.classList.add("fade-out");
            setTimeout(() => popup.classList.remove("show", "fade-out"), 400);
        }
    });

    const userPicture = localStorage.getItem("userPicture");
    if (userPicture && loginElement) {
        loginElement.style.backgroundImage = `url(${userPicture})`;
    }

    logoutBtn.addEventListener("click", () => {
        localStorage.clear();
        if (loginElement) {
            loginElement.style.backgroundImage = "url('../assets/account/navlog.png')";
        }
        alert("您已成功登出！Logout successful!");
        location.reload();
    });
});
