let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let msgCont = document.querySelector(".msg-cont");
let message = document.querySelector("#msg");

let turnO = true; //playerX, player0
let count = 0; //Draw

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click" ,() => {
        if(turnO)//player0
            {
                box.innerText=("O");
                box.style.color ="Red";
                turnO = false;
            }
        else//playerX
             {
                box.innerText=("X");
                box.style.color ="Yellow";
                turnO = true;
             }
             count++
             let winner = checkwinner();

             if(count === 9 && !winner)
                {
                    gameDraw();
                }
    })
});

const disableBoxes = () => {
    for(let box of boxes)
        {
            box.disabled = true;
        }
}
const resetGame = () => {
    turnO =true;
    count=0;
    enableBoxes();
    msgCont.classList.add("hide");
}
const enableBoxes = () => {
    for(let box of boxes)
        {
            box.disabled = false;
            box.innerText="";
        }
}
const showWinner = (winner) => {
    msg.innerText =`Congratulation Winner is ${winner}`;
    msgCont.classList.remove("hide");
    disableBoxes();
}
const gameDraw = () => {
    msg.innerText =`Game was a Draw`;
    msgCont.classList.remove("hide");
    disableBoxes();
}

const checkwinner = () => {
    for(let pattern of winPatterns) 
            {
                let Pos1Val = boxes[pattern[0]].innerText;
                let Pos2Val = boxes[pattern[1]].innerText;
                let Pos3Val = boxes[pattern[2]].innerText;
            if(Pos1Val!="" && Pos2Val!="" && Pos3Val!="")
                {
                    if(Pos1Val === Pos2Val && Pos2Val === Pos3Val)
                        {
                            showWinner(Pos1Val);
                            return true;
                        }
                }
            }
};

newGameBtn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click" , resetGame);