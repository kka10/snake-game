const board = document.getElementById('game-board');
const boardSize = 20;
let snake = [{ x: 10, y: 10 }];
let direction = { x: 0, y: 0 };
let food = { x: 5, y: 5 };

function draw() {
  board.innerHTML = '';

  const foodElement = document.createElement('div');
  foodElement.style.gridColumnStart = food.x;
  foodElement.style.gridRowStart = food.y;
  foodElement.style.backgroundColor = 'red';
  foodElement.style.borderRadius = '50%';
  board.appendChild(foodElement);

  snake.forEach(segment => {
    const snakeElement = document.createElement('div');
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.backgroundColor = 'limegreen';
    snakeElement.style.borderRadius = '5px';
    board.appendChild(snakeElement);
  });
}

function update() {
  const head = { ...snake[0] };
  head.x += direction.x;
  head.y += direction.y;

  if (head.x === food.x && head.y === food.y) {
    snake.unshift(head);
    placeFood();
  } else {
    snake.unshift(head);
    snake.pop();
  }
}

function placeFood() {
  food = {
    x: Math.floor(Math.random() * boardSize) + 1,
    y: Math.floor(Math.random() * boardSize) + 1
  };
}

function gameLoop() {
  update();
  draw();
}

setInterval(gameLoop, 200);

window.addEventListener('keydown', e => {
  switch (e.key) {
    case 'ArrowUp':
      direction = { x: 0, y: -1 };
      break;
    case 'ArrowDown':
      direction = { x: 0, y: 1 };
      break;
    case 'ArrowLeft':
      direction = { x: -1, y: 0 };
      break;
    case 'ArrowRight':
      direction = { x: 1, y: 0 };
      break;
  }
});
