const chatWidget = document.querySelector('.chat-widget');
const messages = document.querySelector('.chat-widget__messages');
const chatWidgetInput = document.getElementById('chat-widget__input');

chatWidget.addEventListener('click', () => {
  chatWidget.classList.add('chat-widget_active');
});

const botAnswers = [
  "Сейчас некогда, давайте потом",
  "Я ничего не знаю",
  "Я ничего не понимаю",
  "Ответ найдете в Google",
  "К сожалению, все операторы заняты. Не пишите нам больше.",
];

document.addEventListener('keydown', event => {
  if (event.key === 'Enter' && chatWidgetInput.value.trim() !== '') {
    messages.innerHTML += `
      <div class="message message_client">
      <div class="message__time">${new Date().toLocaleTimeString()}</div>
      <div class="message__text">${chatWidgetInput.value}</div>
      </div>
    `;
    chatWidgetInput.value = '';

    messages.innerHTML += `
      <div class="message">
      <div class="message__time">${new Date().toLocaleTimeString()}</div>
      <div class="message__text">${botAnswers[Math.floor(Math.random() * botAnswers.length)]}</div>
      </div>
    `;
  }
});