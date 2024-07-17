let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 1;
let isGameOver = false; // Track game state
const guessField = document.getElementById('guessField');
const guesses = document.getElementById('guesses');
const lastResult = document.getElementById('lastResult');
const lowOrHi = document.getElementById('lowOrHi');

function checkGuess() {
  if (isGameOver) {
    alert("Please reset the game to play again.");
    return;
  }

  const userGuess = Number(guessField.value);

  if (guessCount === 1) {
    guesses.textContent = "Previous guesses:";
  }

  guesses.textContent += ` ${userGuess}`;

  if (userGuess === randomNumber) {
    showResult("Congratulations! You got it right!", "green");
    setGameOver();
  } else {
    if (guessCount === 10) {
      showResult("!!!GAME OVER!!!", "red");
      setGameOver();
    } else {
      showResult("Wrong!", "red");
      if (userGuess < randomNumber) {
        lowOrHi.textContent = "Last guess was too low!";
      } else {
        lowOrHi.textContent = "Last guess was too high!";
      }
    }
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();
}

function showResult(message, color) {
  lastResult.textContent = message;
  lastResult.style.backgroundColor = color;
}

function setGameOver() {
  isGameOver = true;
  guessField.disabled = true;
  document.querySelector('button').disabled = true;
}

function resetGame() {
  isGameOver = false;
  guessCount = 1;
  guesses.textContent = "";
  lastResult.textContent = "";
  lowOrHi.textContent = "";
  guessField.value = "";
  guessField.disabled = false;
  document.querySelector('button').disabled = false;
  randomNumber = Math.floor(Math.random() * 100) + 1;
}
