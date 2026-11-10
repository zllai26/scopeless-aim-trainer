let currentScore = 0;
const TARGET_COUNT = 60;

const bg = document.getElementById('bg');
const scoreEl = document.getElementById('score');

function updateScore() {
    scoreEl.innerText = `Score: ${currentScore}`;
}

function createShooter() {
    const shooter = document.createElement('button');
    shooter.className = 'shooter';
    shooter.addEventListener('click', incrementScore);
    bg.appendChild(shooter);
    assignPlace(shooter);
}

function assignPlace(shooter) {
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
    assignPlace(event.currentTarget);
}

function missed() {
    currentScore -= 1;
    updateScore();
}

updateScore();
for (let i = 0; i < TARGET_COUNT; i++) {
    createShooter();
}
