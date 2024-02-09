let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let winningContainer = document.querySelector(".winning-container");
let newGameBtn = document.querySelector("#new-game-btn");
let msg = document.querySelector("#msg");

let turn0 = true; //PlayerX, player0

const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log("button was clicked");
    if (turn0) {
      box.innerHTML = "0";
      turn0 = false;
    } else {
      box.innerHTML = "X";
      turn0 = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const disableBoxes = () => {
  turn0 = true;
  for (let box of boxes) {
    box.disabled = true;
  }
};

const shoWinner = (winner) => {
  msg.innerHTML = `Congratulations! Winner is player ${winner}`;
  winningContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPattern) {
    // console.log(pattern[0], pattern[1], pattern[2]);
    // console.log(
    //   boxes[pattern[0]].innerHTML,
    //   boxes[pattern[1]],
    //   boxes[pattern[2]]
    // );

    let val1 = boxes[pattern[0]].innerHTML;
    let val2 = boxes[pattern[1]].innerHTML;
    let val3 = boxes[pattern[2]].innerHTML;

    if (val1 != "" && val2 != "" && val3 != "") {
      if (val1 === val2 && val2 === val3) {
        shoWinner(val1);
      }
    }
  }
};
