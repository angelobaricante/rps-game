const gameContainer = document.querySelector('.game');
const resultContainer = document.querySelector('.result');
const gameBtns = document.querySelectorAll('.game__btn');
const resultUserChoice = document.getElementById('userChoice');
const resultCompChoice = document.getElementById('computerChoice');
const resultText = document.querySelector('.action__text');
const playAgainBtn = document.querySelector('.action__btn');

const winSet = ['paper', 'scissor', 'rock'];
let userOption, computerOption;

const gameBtnHandler = function () {
  userOption = winSet[parseInt(this.dataset.option)];
  computerTurn();
};

const computerTurn = () => {
  computerOption = winSet[Math.floor(Math.random() * (3 - 0) + 0)];
  checkResult();
};

const checkResult = () => {
  if (userOption == computerOption) {
    resultDraw();
  } else if (userOption == 'paper' && computerOption == 'rock') {
    userWins();
  } else if (userOption == 'rock' && computerOption == 'scissor') {
    userWins();
  } else if (userOption == 'scissor' && computerOption == 'paper') {
    userWins();
  } else {
    computerWins();
  }
  displayResult();
};

const userWins = () => {
  resultText.innerHTML = 'YOU WIN';
  setTimeout(() => {
    resultUserChoice
      .closest('.result__option')
      .querySelector('.winEffect')
      .classList.add('winEffect--show');
  }, 1000);
};

const computerWins = () => {
  resultText.innerHTML = 'YOU LOSE';
  setTimeout(() => {
    resultCompChoice
      .closest('.result__option')
      .querySelector('.winEffect')
      .classList.add('winEffect--show');
  }, 1000);
};

const resultDraw = () => {
  resultText.innerHTML = 'DRAW';
};

const displayResult = () => {
  gameContainer.classList.add('game--hide');
  setTimeout(() => {
    gameContainer.style.display = 'none';
    setResultStyles();
    resultContainer.style.display = 'flex';
    setTimeout(() => {
      resultContainer.classList.add('result--show');
    }, 20);
  }, 500);
};

const setResultStyles = () => {
  resultUserChoice.classList.add('selectedOption--' + userOption);
  resultUserChoice
    .querySelector('.optionIcon__img')
    .setAttribute('src', `images/icon-${userOption}.svg`);
  resultCompChoice.classList.add('selectedOption--' + computerOption);
  resultCompChoice
    .querySelector('.optionIcon__img')
    .setAttribute('src', `images/icon-${computerOption}.svg`);
};

const playAgainHandler = () => {
  resultContainer.classList.remove('result--show');
  setTimeout(() => {
    resultContainer.style.display = 'none';
    resetGame();
  }, 500);
};

const resetGame = () => {
  resultUserChoice.classList.remove('selectedOption--' + userOption);
  resultCompChoice.classList.remove('selectedOption--' + computerOption);
  resultUserChoice
    .closest('.result__option')
    .querySelector('.winEffect')
    .classList.remove('winEffect--show');
  resultCompChoice
    .closest('.result__option')
    .querySelector('.winEffect')
    .classList.remove('winEffect--show');
  gameContainer.style.display = 'block';
  setTimeout(() => {
    gameContainer.classList.remove('game--hide');
  }, 20);
};

gameBtns.forEach((gameBtn) =>
  gameBtn.addEventListener('click', gameBtnHandler.bind(gameBtn))
);
playAgainBtn.addEventListener('click', playAgainHandler);
