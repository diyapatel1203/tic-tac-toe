let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let turn = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame=()=>{
  turn = true
  enableBoxes()
  msgContainer.classList.add("hide")
}

const disableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};


const enableBoxes = ()=>{
  for(let box of boxes)
  {
    box.disabled=false
    box.innerText = ""
  }
}

const showWinner=(winner)=>{
  msg.innerText = `Congratulations, Winner is ${winner}`
  msgContainer.classList.remove("hide")
  disableBoxes()
}

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val.trim() !== "" && pos2Val.trim() !== "" && pos3Val.trim() !== "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("Winner:", pos1Val);
        showWinner(pos1Val);
        return; 
      }
    }
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("clicked");
    if (turn) {
      box.innerText = "O";
      turn = false;
    } else {
      box.innerText = "X";
      turn = true;
    }
    box.disabled = true; 
    checkWinner(); 
  });
});


newGamebtn.addEventListener("click",resetGame)
reset.addEventListener("click",resetGame)