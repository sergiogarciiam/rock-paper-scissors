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
      classComputerResult.add("fa-hand-fist");
      break;

    case 1:
      classComputerResult.add("fa-hand");
      break;

    case 2:
      classComputerResult.add("fa-hand-scissors");
      break;
    default:
      console.log(random);
  }
}

// COMPARE RESULTS
function compareResult() {
  var userResult = document.querySelector(".user-result");
  var userPoints = document.querySelector(".user-points");
  var classUserResult = userResult.classList[2];

  var computerResult = document.querySelector(".computer-result");
  var computerPoints = document.querySelector(".computer-points");
  var classComputerResult = computerResult.classList[2];

  if (classUserResult === classComputerResult) {
  } else if (
    (classUserResult === "fa-hand-fist" &&
      classComputerResult === "fa-hand-scissors") ||
    (classUserResult === "fa-hand" && classComputerResult === "fa-hand-fist") ||
    (classUserResult === "fa-hand-scissors" &&
      classComputerResult === "fa-hand")
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
    var finishGameWindow = document.querySelector(".finish-game-container");
    var titleResult = document.querySelector(".title");
    var finishPoints = document.querySelector(".points-finish");
    var playAgainButton = document.querySelector(".play-again");

    // Result
    finishGameWindow.style.display = "flex";
    titleResult.textContent =
      userPoints.textContent > computerPoints.textContent
        ? "YOU WIN!"
        : "GAME OVER!";
    finishPoints.textContent =
      userPoints.textContent + " - " + computerPoints.textContent;

    // Play again
    playAgainButton.addEventListener("click", () => {
      finishGameWindow.style.display = "none";

      userPoints.textContent = 0;
      computerPoints.textContent = 0;
    });
  }
}

function getRandom() {
  return Math.floor(Math.random() * 3);
}
