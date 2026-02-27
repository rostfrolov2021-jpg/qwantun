// Функция для перехода на оплату
function goToPayment() {
    const amount = document.getElementById("pay-amount").value;
    
    if (amount === "" || amount <= 0) {
        alert("Сначала введи сумму, которую хочешь закинуть!");
        return;
    }

    // Ссылка на твоего менеджера/админа или платежную систему
    // Здесь "организация" сама даст карту игроку
    const targetUrl = "https://www.donationalerts.com/r/tgtgtr"; 

    alert("Сейчас тебя перекинет к администратору организации для оплаты картой!");
    
    // ПЕРЕКИДЫВАЕМ
    window.location.href = targetUrl;
}

// Загрузка данных (Ник и Баланс)
window.onload = function() {
    const nick = localStorage.getItem("userNick") || "Игрок";
    const balance = localStorage.getItem("userBalance") || "0";
    
    document.getElementById("nav-username").innerText = nick;
    document.getElementById("user-balance").innerText = balance;
};

// Выход
function logout() {
    localStorage.setItem("isLoggedIn", "false");
    window.location.href = "login.html";
}