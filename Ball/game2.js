
let TOP = topWall.getBoundingClientRect().height;
let BOTTOM =
  leftWall.getBoundingClientRect().height -
  bottomWall.getBoundingClientRect().height;
let RIGHT = topWall.getBoundingClientRect().width;
let LEFT = leftWall.getBoundingClientRect().width;
// диапозон в котором может перемещаться наш мяч
document.addEventListener("keydown", moveBita);

let vx = 7,
  vy = 7;
let ballStyle = ball.getBoundingClientRect();
let BW = ballStyle.width / 2;
let posX = ballStyle.left + BW,
  posY = ballStyle.top + BW;
let bStyle = bita.getBoundingClientRect();
let WBITA = bStyle.width;
let HBITA = bStyle.height;
let posBitaY = bStyle.top;
let vBita = 10;
// let idGo = setInterval(go, 1000 / 50);
function idGo() {
  var animationId = requestAnimationFrame(idGo);
  go();
}

idGo();
function makeCounter() {
  var currentCount = 1;

  return function () {
    return currentCount++;
  };
}

function go() {
  let stBita = bita.getBoundingClientRect();
  posX += vx;
  posY += vy;
  if (posX - BW < LEFT) {
    posX = LEFT + BW;
    vx = -vx;
  }
  if (posY - BW < TOP) {
    posY = TOP + BW;
    vy = -vy;
  }
  if (posY + BW > BOTTOM) {
    posY = BOTTOM - BW;
    vy = -vy;
  }

  if (posX + BW > RIGHT - WBITA) {
    if (posY >= stBita.top && posY <= stBita.top + stBita.height) {
      posX = RIGHT - WBITA - BW;
      vx = -vx;
      increaseScore();

      // alert("ХЕ ,УВЕРНУЛСЯ");
    }
  }
  ball.style.top = posY + "px";
  ball.style.left = posX + "px";
  if (posX + BW > RIGHT) {
    clearInterval(idGo);
    document.removeEventListener("keydown", moveBita);
    window.cancelAnimationFrame(idGo);
    idGo = undefined;
    alert("ЛОШАРА");
  }
}
const increaseScore = () => {

  const score = document.querySelector("#score-counter").innerHTML;

  const scoreHTML = document.querySelector("#score-counter");

  let count = Number(score);

  scoreHTML.innerHTML = count + 1;
};

function moveBita(event) {
  if (event.keyCode == 38) posBitaY -= vBita;
  if (event.keyCode == 40) posBitaY += vBita;
  if (posBitaY < TOP) posBitaY = TOP;
  if (posBitaY + HBITA > BOTTOM) posBitaY = BOTTOM - HBITA;
  bita.style.top = posBitaY + "px";
}
