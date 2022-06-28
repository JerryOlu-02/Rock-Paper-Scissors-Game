'use strict';

// Selecting Elements
const btnNew = document.querySelector('.btn--new');
const btnSelect = document.querySelector('.btn--select');
const divImage = document.querySelector('.overlay--1');
const computerImage = document.querySelector('.overlay--2');
const images = document.querySelector('.selection--1');
const imagesComputer = document.querySelector('.selection--2');
const btnNext = document.getElementsByTagName('i')[0];
const btnPlay = document.querySelector('.btn--play');
const player1 = document.querySelector('.player--1');
const playerComputer = document.querySelector('.computer');

// Current Scores Element
const currentScore1El = document.querySelector('.current--1');
const currentScore2El = document.querySelector('.current--2');

// Final Scores Element
const score1El = document.querySelector('.score--1');
const score2El = document.querySelector('.score--2');

// Initialization
let currentScore1, currentScore2, x, imagesSelection, playing;

const init = function () {
  currentScore1 = 0;
  currentScore2 = 0;
  x = 0;
  imagesSelection = [1, 2, 3];
  playing = true;

  score1El.textContent = 0;
  score2El.textContent = 0;
  currentScore1El.textContent = 0;
  currentScore2El.textContent = 0;
  player1.classList.remove('player--winner');
  playerComputer.classList.remove('player--winner');
  divImage.classList.add('hidden');
  computerImage.classList.add('hidden');
  images.src = `image-${imagesSelection[x]}.png`;
};
init();

const selectImages = function () {
  if (playing) {
    divImage.classList.toggle('hidden');
  }
};

btnSelect.addEventListener('click', selectImages);

btnNext.addEventListener('click', function () {
  if (playing) {
    x++;
    if (x === imagesSelection.length) {
      x = 0;
    }
    let img = imagesSelection[x];
    images.src = `image-${img}.png`;
  }
});

const gameMethodPlayer = function (number) {
  if (playing) {
    if (x === 0 && number === 1) {
      currentScore1 = currentScore1;
    } else if (x === 0 && number === 2) {
      currentScore1 = currentScore1;
    } else if (x === 0 && number === 3) {
      currentScore1++;
    } else if (x === 1 && number === 1) {
      currentScore1++;
    } else if (x === 1 && number === 2) {
      currentScore1 = currentScore1;
    } else if (x === 1 && number === 3) {
      currentScore1 = currentScore1;
    } else if (x === 2 && number === 1) {
      currentScore1 = currentScore1;
    } else if (x === 2 && number === 2) {
      currentScore1++;
    } else if (x === 2 && number === 3) {
      currentScore1 = currentScore1;
    }
  }
};

const gameMethodComputer = function (number) {
  if (playing) {
    if (number === 1 && x === 0) {
      currentScore2 = currentScore2;
    } else if (number === 2 && x === 0) {
      currentScore2++;
    } else if (number === 3 && x === 0) {
      currentScore2 = currentScore2;
    } else if (number === 1 && x === 1) {
      currentScore2 = currentScore2;
    } else if (number === 2 && x === 1) {
      currentScore2 = currentScore2;
    } else if (number === 3 && x === 1) {
      currentScore2++;
    } else if (number === 1 && x === 2) {
      currentScore2++;
    } else if (number === 2 && x === 2) {
      currentScore2 = currentScore2;
    } else if (number === 3 && x === 2) {
      currentScore2 = currentScore2;
    }
  }
};

const gameWinner = function (winner) {
  winner.classList.add('player--winner');
  score1El.textContent = currentScore1;
  score2El.textContent = currentScore2;
  currentScore1El.textContent = 0;
  currentScore2El.textContent = 0;
};

const playGame = function () {
  if (playing) {
    let randomNumber = Math.trunc(Math.random() * 3) + 1;
    computerImage.classList.remove('hidden');
    imagesComputer.src = `image-${randomNumber}.png`;

    gameMethodPlayer(randomNumber);
    gameMethodComputer(randomNumber);
    currentScore1El.textContent = currentScore1;
    currentScore2El.textContent = currentScore2;

    if (currentScore1 >= 5) {
      gameWinner(player1);
      playing = false;
    } else if (currentScore2 >= 5) {
      gameWinner(playerComputer);
      playing = false;
    }
  }
};

btnPlay.addEventListener('click', playGame);

btnNew.addEventListener('click', init);
