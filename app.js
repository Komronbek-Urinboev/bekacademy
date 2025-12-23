const tg = window.Telegram.WebApp;

// Инициализация Web App
tg.ready();

document.getElementById("registerBtn").addEventListener("click", () => {
  // Проверка, что сайт открыт через Telegram
  if (!tg.initDataUnsafe || !tg.initDataUnsafe.user) {
    alert("Пожалуйста, откройте регистрацию через Telegram-бота");
    return;
  }

  const user = tg.initDataUnsafe.user;

  // Формируем данные пользователя
  const payload = {
    id: user.id,
    username: user.username || null,
    first_name: user.first_name || null,
    last_name: user.last_name || null,
    language_code: user.language_code || null,
    registered_at: new Date().toISOString()
  };

  try {
    // Отправляем данные в бота
    tg.sendData(JSON.stringify(payload));

    // Закрываем Web App (ОБЯЗАТЕЛЬНО)
    tg.close();

  } catch (e) {
    alert("Ошибка регистрации. Попробуйте ещё раз.");
    console.error(e);
  }
});
