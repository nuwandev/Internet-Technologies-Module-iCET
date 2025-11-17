let numberToGuess = genRandomNumber();

const inputBox = document.querySelector('input[type="number"]');
const attemptsLbl = document.getElementById("attempts");
let attempts = 5;

attemptsLbl.innerText = attempts;

document.getElementById("guessBtn")?.addEventListener("click", () => {
  if (attempts == 1) {
    Swal.fire({
      title: "Out Of Attempts!",
      text: "Try Again!",
      icon: "error",
      confirmButtonText: "Play Again",
    });

    numberToGuess = genRandomNumber();
    inputBox.value = "";
    attempts = 5;
    attemptsLbl.innerText = attempts;
    return;
  }

  const guessedNum = inputBox.value;
  attemptsLbl.innerText = --attempts;

  if (numberToGuess > guessedNum) {
    Swal.fire({
      title: "Wrong!",
      text: "The Guessed Number is Low!",
      icon: "error",
      confirmButtonText: "Okay",
    });

    inputBox.value = "";
  } else if (numberToGuess < guessedNum) {
    Swal.fire({
      title: "Wrong!",
      text: "The Guessed Number is High!",
      icon: "error",
      confirmButtonText: "Okay",
    });
    inputBox.value = "";
  } else {
    Swal.fire({
      title: "Won!",
      text: "You Won!",
      icon: "success",
      confirmButtonText: "Play Again",
    });

    numberToGuess = genRandomNumber();
    inputBox.value = "";
    attempts = 5;
    attemptsLbl.innerText = attempts;
  }
});

function genRandomNumber() {
  return Math.floor(Math.random() * 10 + 1);
}
