let clicker = document.getElementById("clicker__counter");
let cookie = document.getElementById("cookie");

cookie.onclick = function () {
  if (clicker.textContent >= 0) {
    clicker.textContent ++;
  }
  if (clicker.textContent % 2 === 0) {
    cookie.width = 200;
  } else {
    cookie.width = 175;
  }
}