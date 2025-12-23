const tg = window.Telegram.WebApp;

tg.ready();

document.getElementById("registerBtn").addEventListener("click", () => {
  if (!tg.initData) {
    alert("Откройте регистрацию через Telegram-бота");
    return;
  }

  // 🔐 Отправляем ПОЛНЫЙ initData
  tg.sendData(tg.initData);

  // ❗️Триггер отправки данных
  tg.close();
});
