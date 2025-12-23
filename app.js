const tg = window.Telegram.WebApp;

document.getElementById("registerBtn").onclick = () => {
  const user = tg.initDataUnsafe.user;

  if (!user) {
    alert("Откройте сайт через Telegram");
    return;
  }

  const payload = {
    id: user.id,
    username: user.username || "",
    first_name: user.first_name || "",
    last_name: user.last_name || "",
    language: user.language_code || "",
    registered_at: new Date().toISOString()
  };

  tg.sendData(JSON.stringify(payload));

  setTimeout(() => {
    window.location.href = "https://app-bekacademy.figma.site";
  }, 700);
};
