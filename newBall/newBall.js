var box = document.querySelector(".box");
var ball = document.querySelector(".ball");
var boxRect = box.getBoundingClientRect();
var ballRect = ball.getBoundingClientRect();

// Границы
var boundaries = {
  maxX: boxRect.width,
  maxY: boxRect.height,
  minX: 0,
  minY: 0,
};

// Позиция шарика
var ballPos = {
  x: boundaries.minX,
  y: boundaries.minY,
};

// эти штуки можно как-нибудь по умному назвать,
// но я тупой, поэтому просто представь, что это
// совокупность скорости и направления движения
var dx = 3,
  dy = 3;

function animate() {
  // если шарик вышел за границы по оси х
  // меняем направление
  // было dx = 3, стало dx = -3
  if (
    ballPos.x < boundaries.minX ||
    ballPos.x > boundaries.maxX - ballRect.width
  )
    dx = -dx;

  // тоже самое только по оси y
  if (
    ballPos.y < boundaries.minY ||
    ballPos.y > boundaries.maxY - ballRect.height
  )
    dy = -dy;

  // ну тут всё понятно
  ballPos.x += dx;
  ballPos.y += dy;

  ball.style.transform = `translate(${ballPos.x}px, ${ballPos.y}px)`;

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
