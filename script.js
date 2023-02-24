var options = document.querySelectorAll(".option");

options.forEach((option) => {
  option.addEventListener("click", (e) => {
    addUserResult(e);
    addComputerResult();
  });
});

function addUserResult(e) {
  var userResult = document.querySelector(".user-result");

  if (userResult.classList.length != 1) {
    userResult.classList.remove(userResult.classList[1]);
    userResult.classList.remove(userResult.classList[2]);
  }
  userResult.classList.add(e.target.classList[0]);
  userResult.classList.add(e.target.classList[1]);
}

function addComputerResult() {
  var computerResult = document.querySelector(".computer-result");
  var classComputerResult = computerResult.classList;

  if (classComputerResult.length > 1) {
    classComputerResult.remove(classComputerResult[1]);
  }
  classComputerResult.add("fa-solid");

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

function getRandom() {
  return Math.floor(Math.random() * 3);
}
