let vInput = document.querySelectorAll("input");
let winner;
let i = 0;
function setInputValue(event) {
  i++;
  // Set a specific value for the clicked input
  if (i % 2 == 0) {
    event.target.value = "X";
  } else {
    event.target.value = "O";
  }
  validationGame();
  alertGame();
}
vInput.forEach((input) => {
  input.addEventListener("click", setInputValue);
});
let validationGame = function () {
  let allInput = [];
  vInput.forEach((input) => {
    allInput.push(input.value);
  });
  if (allInput[0] == allInput[1] && allInput[0] == allInput[2]) {
    if (allInput[0] == "X" || allInput[0] == "O") {
      winner = "winner";
    }
  } else if (allInput[3] == allInput[4] && allInput[3] == allInput[5]) {
    if (allInput[3] == "X" || allInput[3] == "O") {
      winner = "winner";
    }
  } else if (allInput[6] == allInput[7] && allInput[6] == allInput[8]) {
    if (allInput[6] == "X" || allInput[6] == "O") {
      winner = "winner";
    }
  } else if (allInput[0] == allInput[3] && allInput[0] == allInput[6]) {
    if (allInput[0] == "X" || allInput[0] == "O") {
      winner = "winner";
    }
  } else if (allInput[1] == allInput[4] && allInput[1] == allInput[7]) {
    if (allInput[1] == "X" || allInput[1] == "O") {
      winner = "winner";
    }
  } else if (allInput[2] == allInput[5] && allInput[2] == allInput[8]) {
    if (allInput[2] == "X" || allInput[2] == "O") {
      winner = "winner";
    }
  } else if (allInput[0] == allInput[4] && allInput[0] == allInput[8]) {
    if (allInput[0] == "X" || allInput[0] == "O") {
      winner = "winner";
    }
  } else if (allInput[2] == allInput[4] && allInput[2] == allInput[6]) {
    if (allInput[2] == "X" || allInput[2] == "O") {
      winner = "winner";
    }
  } else {
    winner = "repeate";
  }
  console.log(winner);
  console.log(allInput);
};
let alertGame = function alertGame() {
  if (winner == "winner") {
    alert("OHHH , you are a winner ");
  }
};