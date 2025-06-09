const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const scoreDisplay = document.querySelector('#score');
const startButton = document.querySelector('#start-button');

let score = 0;
let gameRunning = false;
let lastHole;
let timeUp;

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
    const index = Math.floor(Math.random() * holes.length);
    const hole = holes[index];
    
    if (hole === lastHole) {
        return randomHole(holes);
    }
    
    lastHole = hole;
    return hole;
}

function peep() {
    const time = randomTime(1000, 2000);
    const hole = randomHole(holes);
    const mole = hole.querySelector('.mole');
    
    mole.classList.add('active');
    
    setTimeout(() => {
        mole.classList.remove('active');
        if (!timeUp) peep();
    }, time);
}

function startGame() {
    if (gameRunning) return;
    
    scoreDisplay.textContent = '0';
    score = 0;
    timeUp = false;
    gameRunning = true;
    startButton.textContent = 'Game Running...';
    
    peep();
    
    setTimeout(() => {
        timeUp = true;
        gameRunning = false;
        startButton.textContent = 'Start Game';
    }, 20000);
}

// Add keyboard mapping for Arduino buttons (1-6 keys will correspond to holes)
function handleKeyPress(e) {
    if (!gameRunning) return;
    
    // Map keys 1-6 to holes 0-5
    const holeIndex = parseInt(e.key) - 1;
    if (holeIndex >= 0 && holeIndex < 6) {
        const mole = moles[holeIndex];
        if (mole.classList.contains('active')) {
            score++;
            mole.classList.remove('active');
            scoreDisplay.textContent = score;
            
            // Add hitting animation
            mole.classList.add('hit');
            setTimeout(() => {
                mole.classList.remove('hit');
            }, 100);
        }
    }
}

// Add keyboard event listener
document.addEventListener('keypress', handleKeyPress);

// Modify whack function to accept programmatic triggers
function whack(e) {
    if (!gameRunning) return;
    // Remove the isTrusted check to allow programmatic triggers
    
    if (this.classList.contains('active')) {
        score++;
        this.classList.remove('active');
        scoreDisplay.textContent = score;
        
        // Add hitting animation
        this.classList.add('hit');
        setTimeout(() => {
            this.classList.remove('hit');
        }, 100);
    }
}

moles.forEach(mole => mole.addEventListener('click', whack));
startButton.addEventListener('click', startGame);