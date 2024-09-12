const random = parseInt(Math.random() * 10 + 1);

const input = document.querySelector("#input");
const button = document.querySelector("#button");
const previous = document.querySelector(".previous-guess");
const remaining = document.querySelector(".remaining");
const lowOrhi = document.querySelector(".low-high");
const startGame = document.querySelector(".newGame");
const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    const guessval = parseInt(input.value);
    validateGuess(guessval);
  });
}

let validateGuess = (guessval) => {
  if (isNaN(guessval)) {
    alert("please enter a valid number");
  } else if (guessval < 1) {
    alert("please enter more than 1 and less than 100");
  } else if (guessval > 100) {
    alert("please enter less than 100");
  } else {
    prevGuess.push(guessval);
    if (numGuess === 11) {
      displayGuess(guessval);
      displayMessage(`Game Over. Random number was ${random}`);
      endGame();
    } else {
      displayGuess(guessval);
      checkGuess(guessval);
    }
  }
};

let checkGuess = (guessval) => {
  if (guessval === random) {
    displayMessage("You guessed it right you won the Game Congratulations");
    endGame();
  } else if (guessval < random) {
    displayMessage("Your guess is too low");
  } else if (guessval > random) {
    displayMessage("Your Guess is too high");
  }
};

let displayGuess = (guessval) => {
  input.value = "";
  previous.innerHTML += `${guessval}, `;
  numGuess++;
  remaining.innerHTML = ` ${11 - numGuess}`;
};

let displayMessage = (message) => {
  lowOrhi.innerHTML = message;
};

let endGame = () => {
  input.value = "";
  input.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id ="newGame">Start a New game</h2>`;
  startGame.appendChild(p);
  newGame();
  playGame = false;
};

let newGame = () => {
  startGame.addEventListener("click", function (e) {
    const random = parseInt(Math.random() * 10 + 1);
    prevGuess = [];
    numGuess = 1;
    previous.innerHTML = "";
    remaining.innerHTML = ` ${11 - numGuess}`;
    input.removeAttribute("disabled");
    startGame.removeChild(p);
    lowOrhi.innerHTML = ''
    playGame = true;
  });
};
