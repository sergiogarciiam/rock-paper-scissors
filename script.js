// GLOBAL VARIABLES
var options = document.querySelectorAll(".option");

// EVENTS TO OPTIONS
options.forEach((option) => {
  option.addEventListener("click", (e) => {
    addUserResult(e);
    addComputerResult();
    compareResult();
    testEndGame();
  });
});

// OPTION CHOOSE FROM USER
function addUserResult(e) {
  var userResult = document.querySelector(".user-result");

  if (userResult.classList.length > 2) {
    userResult.classList.remove(userResult.classList[2]);
  }

  userResult.classList.add(e.target.classList[1]);

  if (userResult.classList.contains("fa-hand-scissors")) {
    userResult.classList.add("scissors");
  } else {
    userResult.classList.remove("scissors");
  }
}

// OPTION CHOOSE FROM COMPUTER
function addComputerResult() {
  var computerResult = document.querySelector(".computer-result");
  var classComputerResult = computerResult.classList;

  if (classComputerResult.length > 2) {
    classComputerResult.remove(classComputerResult[2]);
  }

  var random = getRandom();
  switch (random) {
    case 0:
      classComputerResult.remove("scissors");
      classComputerResult.add("fa-hand-fist");
      break;

    case 1:
      classComputerResult.remove("scissors");
      classComputerResult.add("fa-hand");
      break;

    case 2:
      classComputerResult.add("fa-hand-scissors");
      classComputerResult.add("scissors");
      break;
  }
}

// COMPARE RESULTS
function compareResult() {
  var userResult = document.querySelector(".user-result");
  var userPoints = document.querySelector(".user-points");

  var classUserResult = userResult.classList.contains("fa-hand-fist")
    ? "fist"
    : userResult.classList.contains("fa-hand-scissors")
    ? "scissors"
    : "hand";

  var computerResult = document.querySelector(".computer-result");
  var computerPoints = document.querySelector(".computer-points");

  var classComputerResult = computerResult.classList.contains("fa-hand-fist")
    ? "fist"
    : computerResult.classList.contains("fa-hand-scissors")
    ? "scissors"
    : "hand";

  if (classUserResult === classComputerResult) {
  } else if (
    (classUserResult === "fist" && classComputerResult === "scissors") ||
    (classUserResult === "hand" && classComputerResult === "fist") ||
    (classUserResult === "scissors" && classComputerResult === "hand")
  ) {
    userPoints.textContent = +userPoints.textContent + 1;
  } else {
    computerPoints.textContent = +computerPoints.textContent + 1;
  }
}

// TEST END GAME
function testEndGame() {
  var userPoints = document.querySelector(".user-points");
  var computerPoints = document.querySelector(".computer-points");

  if (userPoints.textContent == 5 || computerPoints.textContent == 5) {
    // Variables
    var optionsContainer = document.querySelector(".options-container");
    var finishGameWindow = document.querySelector(".finish-game-container");
    var gameResult = document.querySelector(".game-result");
    var finishPoints = document.querySelector(".points-finish");
    var playAgainButton = document.querySelector(".play-again");

    // Result
    optionsContainer.style.pointerEvents = "none";
    finishGameWindow.style.display = "flex";
    gameResult.textContent =
      userPoints.textContent == 5 ? "YOU WIN!" : "GAME OVER!";
    finishPoints.textContent =
      userPoints.textContent + " - " + computerPoints.textContent;

    // Play again
    playAgainButton.addEventListener("click", resetGame);
  }
}

// RESET GAME
function resetGame() {
  var optionsContainer = document.querySelector(".options-container");
  var finishGameWindow = document.querySelector(".finish-game-container");
  var userPoints = document.querySelector(".user-points");
  var computerPoints = document.querySelector(".computer-points");
  var userResult = document.querySelector(".user-result");
  var computerResult = document.querySelector(".computer-result");

  optionsContainer.style.pointerEvents = "all";
  finishGameWindow.style.display = "none";

  userResult.classList.remove("scissors");
  userResult.classList.remove(userResult.classList[2]);
  computerResult.classList.remove("scissors");
  computerResult.classList.remove(computerResult.classList[2]);

  userPoints.textContent = 0;
  computerPoints.textContent = 0;
}

function getRandom() {
  return Math.floor(Math.random() * 3);
}
