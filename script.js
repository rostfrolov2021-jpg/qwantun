function loadUserSkin() {
    const nick = localStorage.getItem("userNick");
    const isAuth = localStorage.getItem("isLoggedIn") === "true";

    const loginBtn = document.getElementById("btn-login-main");
    const profileBox = document.getElementById("user-nav-profile");
    const skinImg = document.getElementById("global-skin-head");
    const nameTxt = document.getElementById("global-username");

    if (isAuth && nick) {
        // 1. Показываем блок профиля и прячем кнопку входа
        if (loginBtn) loginBtn.style.display = "none";
        if (profileBox) profileBox.style.display = "flex";

        // 2. Устанавливаем ник
        if (nameTxt) nameTxt.innerText = nick;

        // 3. Загружаем голову с официального API (Crafatar или mc-heads)
        // Иконка будет обновляться сама, если игрок сменит скин в лаунчере
        if (skinImg) {
            skinImg.src = `https://mc-heads.net/avatar/${nick}/32`;
        }
    }
}

// Запускаем при загрузке каждой страницы
document.addEventListener("DOMContentLoaded", loadUserSkin);