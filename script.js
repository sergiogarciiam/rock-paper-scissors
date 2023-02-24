var options = document.querySelectorAll(".option");

options.forEach((option) => {
  option.addEventListener("click", (e) => {
    addUserResult(e);
    addComputerResult();
    compareResult();
    testEndGame();
  });
});

function addUserResult(e) {
  var userResult = document.querySelector(".user-result");

  if (userResult.classList.length > 2) {
    userResult.classList.remove(userResult.classList[2]);
  }
  userResult.classList.add(e.target.classList[1]);
}

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

function compareResult() {
  var userResult = document.querySelector(".user-result");
  var userPoints = document.querySelector(".user-points");
  var classUserResult = userResult.classList[2];

  var computerResult = document.querySelector(".computer-result");
  var computerPoints = document.querySelector(".computer-points");
  var classComputerResult = computerResult.classList[2];

  if (classUserResult === classComputerResult) {
    console.log("tie");
  } else if (
    (classUserResult === "fa-hand-fist" &&
      classComputerResult === "fa-hand-scissors") ||
    (classUserResult === "fa-hand" && classComputerResult === "fa-hand-fist") ||
    (classUserResult === "fa-hand-scissors" &&
      classComputerResult === "fa-hand")
  ) {
    userPoints.textContent = +userPoints.textContent + 1;
    console.log("user win");
  } else {
    computerPoints.textContent = +computerPoints.textContent + 1;
    console.log("computer win");
  }
}

function testEndGame() {
  var userPoints = document.querySelector(".user-points");
  var computerPoints = document.querySelector(".computer-points");

  if (userPoints.textContent == 5 || computerPoints.textContent == 5) {
    userPoints.textContent = 0;
    computerPoints.textContent = 0;
    console.log("end game");
  }
}

function getRandom() {
  return Math.floor(Math.random() * 3);
}
