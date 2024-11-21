let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector(".reset");
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector(".msg")
let newGame = document.querySelector(".newGame")

let turnX = true;

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


const Reset_Btn = () => {
    turnX = true;
    Enabled_boxes();
    msgContainer.classList.add("hide")
}

boxes.forEach((box) =>
    box.addEventListener("click", () => {
        if (turnX) {
            box.innerText = "X";
            turnX = false;
        }
        else {
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;
        checkWinner()
    })
)


const disabled_btn = () => {
    for (const box of boxes) {
        box.disabled = true;
    }
}

const Enabled_boxes = () => {
    for (const box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`
    msgContainer.classList.remove("hide");
    disabled_btn()
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val)
            }
        }
    }
}

newGame.addEventListener("click", Reset_Btn)
reset_btn.addEventListener("click", Reset_Btn)