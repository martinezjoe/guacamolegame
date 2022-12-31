

const grid = document.querySelector('.grid');

function subDiv() {
    for (let i = 1; i < 10; i++) {
        const squareDivs = document.createElement('div');
        squareDivs.classList.add('square');
        squareDivs.setAttribute('id', i);
        grid.appendChild(squareDivs);
    };
};
subDiv();

const squares = document.querySelectorAll('.square');

const mole = document.querySelector('.mole');

const timeLeft = document.querySelector('#time-left');

const score = document.querySelector('#score');

let result = 0;

let hitPosition;

let timerId;

let currentTime = 30;

function randomSquare() {
    squares.forEach(x => {
        x.classList.remove('mole');
    });

    let randomPosition = squares[Math.floor(Math.random() * 9)];
    randomPosition.classList.add('mole');

    hitPosition = randomPosition.id;
    
};

randomSquare();

squares.forEach(y => {
     y.addEventListener('mousedown', ()  => {

        if(y.id == hitPosition) {
            result+=20;
            score.innerHTML = result;
            hitPosition = null;
        };
     });
});

timerId = setInterval(randomSquare,500);

function countDown () {

    currentTime--;
    timeLeft.innerHTML = currentTime;

    if (currentTime == 0) {
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        hitPosition = null;
        alert(`El juego ha terminado tu resultado final es de ${result}, para intentar de nuevo presiona 'F5'... Gracias por jugar`)
    };

};

let countDownTimerId = setInterval(countDown, 1000);