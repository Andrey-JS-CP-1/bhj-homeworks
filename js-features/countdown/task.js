let timer = document.getElementById('timer');

function timerValue() {
  if (timer.textContent <= 0) {
    clearInterval(idInterval);
    alert("Вы победили в конкурсе!");
    } else {
      timer.textContent--;
    }
  };

let idInterval = setInterval(timerValue, 1000);