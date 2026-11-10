let currentScore = 0;

const shooter = document.getElementById('shooter');
const scoreEl = document.getElementById('score');

function updateScore() {
  scoreEl.innerText = `Score: ${currentScore}`;
}

function moveShooter() {
  const size = Math.floor(Math.random() * 50) + 20;
  const x = Math.floor(Math.random() * (window.innerWidth - size));
  const y = Math.floor(Math.random() * (window.innerHeight - size));

  shooter.style.left = x + 'px';
  shooter.style.top = y + 'px';
  shooter.style.width = size + 'px';
  shooter.style.height = size + 'px';
}

function incrementScore(event) {
  event.stopPropagation();
  currentScore += 1;
  updateScore();
  moveShooter();
}

function missed() {
  currentScore -= 1;
  updateScore();
}

updateScore();
moveShooter(); // place the target once at the start
