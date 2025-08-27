export async function sendTelegramMessage(message: string) {
  const telegramBotToken = "8350858927:AAHT6fEtZ-fjvtvN28KANyrUiqZbR8qk_dU";
  const telegramChannelId = "-1002927399078";

  if (!telegramBotToken || !telegramChannelId) {
    console.error("Telegram bot token or chat ID is not set");
    return;
  }

  const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: telegramChannelId,
      text: message,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error(
      "Failed to send Telegram message",
      response.status,
      response.statusText,
      errorText,
    );
    return;
  }

  return response.json();
}
