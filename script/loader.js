document.addEventListener("DOMContentLoaded", function() { 
  var loadingScreen = document.getElementById("loading-screen"); 

  // 當頁面完全載入後隱藏
  window.addEventListener("load", function() { 
    loadingScreen.classList.add("hidden"); 
    setTimeout(function() {
      loadingScreen.style.display = "none"; 
    }, 500); // 等淡出完成再移除
  }); 

  // 最多顯示 5 秒
  setTimeout(function() { 
    loadingScreen.classList.add("hidden"); 
    setTimeout(function() {
      loadingScreen.style.display = "none"; 
    }, 500); 
  }, 5000); 
});
