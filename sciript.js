// ФУНКЦИЯ РЕГИСТРАЦИИ
function register() {
    // Получаем данные из полей ввода
    const nick = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const pass = document.querySelector('input[type="password"]').value;

    if (nick && email && pass) {
        // 1. Сохраняем данные в память браузера (имитация базы данных)
        localStorage.setItem("userNick", nick);
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPass", pass);
        localStorage.setItem("userBalance", "0"); // Начальный баланс
        localStorage.setItem("isLoggedIn", "true"); // Статус "Вошел в систему"
        
        alert("Поздравляем! Аккаунт QuantumBox создан.");

        // 2. САМОЕ ГЛАВНОЕ: Перекидываем на страницу Личного Кабинета
        window.location.href = "dashboard.html"; 
    } else {
        alert("Заполни все поля, чтобы создать профиль!");
    }
}

// ФУНКЦИЯ ВХОДА (для login.html)
function login() {
    const nick = document.querySelector('input[type="text"]').value;
    const pass = document.querySelector('input[type="password"]').value;

    const savedNick = localStorage.getItem("userNick");
    const savedPass = localStorage.getItem("userPass");

    if (nick === savedNick && pass === savedPass) {
        localStorage.setItem("isLoggedIn", "true");
        
        // Перекидываем в кабинет после успешного входа
        window.location.href = "dashboard.html";
    } else {
        alert("Ошибка! Неверный ник или пароль.");
    }
}