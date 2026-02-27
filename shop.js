function buyItem(itemName) {
    // Проверяем, авторизован ли пользователь
    const isAuth = localStorage.getItem("isLoggedIn");

    if (isAuth === "true") {
        // УСЛОВИЕ 1: Аккаунт есть
        // Сообщаем игроку и перекидываем к администрации для оплаты выбранного товара
        alert(`Вы выбрали: ${itemName}. Сейчас откроется чат с администрацией для завершения покупки.`);
        
        // Ссылка на контакт организации (Telegram или Discord)
        // Можно добавить в ссылку название товара, чтобы админ сразу видел
        window.location.href = "https://t.me/твой_админ?text=Я_хочу_купить_" + itemName;

    } else {
        // УСЛОВИЕ 2: Аккаунта нет
        alert("Ошибка! Чтобы совершать покупки в магазине, нужно войти в свой аккаунт.");
        
        // Перекидываем на страницу входа
        window.location.href = "login.html";
    }
}
function syncProfileAcrossSite() {
    const nick = localStorage.getItem("userNick");
    const isAuth = localStorage.getItem("isLoggedIn") === "true";

    const loginBtn = document.getElementById("btn-login-nav");
    const profileBlock = document.getElementById("user-nav-block");
    const skinImg = document.getElementById("header-skin-head");
    const nameTxt = document.getElementById("header-username");

    if (isAuth && nick) {
        // Если залогинен: показываем голову, скрываем кнопку входа
        if (loginBtn) loginBtn.style.display = "none";
        if (profileBlock) profileBlock.style.display = "flex";
        
        if (nameTxt) nameTxt.innerText = nick;
        
        // Используем mc-heads API — оно очень быстрое для аватарок
        if (skinImg) {
            skinImg.src = `https://mc-heads.net/avatar/${nick}/32`;
        }
    } else {
        // Если не залогинен: показываем кнопку входа, скрываем профиль
        if (loginBtn) loginBtn.style.display = "block";
        if (profileBlock) profileBlock.style.display = "none";
    }
}
