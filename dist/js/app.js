const gameContainer = document.querySelector('.game');
const gameBtns = document.querySelectorAll('.game__btn');

const gameBtnHandler = function () {
  const selectedOption = this.dataset.option;
  gameContainer.classList.add('game--hide');
};

const playAgain = () => {
  gameContainer.classList.remove('game--hide');
};

gameBtns.forEach((gameBtn) =>
  gameBtn.addEventListener('click', gameBtnHandler.bind(gameBtn))
);
