let gameSqu = [];
let userSqu = [];

let btns  = ["purpul","red","orange","blue"]

let started = false;
let lavel = 0; 

let h2 = document.querySelector("h2");

let highestScore = 0;

document.addEventListener("keypress",function() {
    if(started == false){
        console.log("game is started");
        started = true;

        lavelup();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    }, 250);
}

function lavelup() {
    userSqu = [];
    lavel++;
    h2.innerText = `Level ${lavel}`;


    if (lavel > highestScore) {
        highestScore = lavel;
        updateHighestScoreDisplay();
    }

    // if(lavel<highestScore){
        // console.log("highest score of the game is : ", highestScore);
    // };

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSqu.push(randColor);
    console.log(gameSqu);
    gameFlash(randbtn);
};

function checkAns(idx) {
    if(userSqu[idx] === gameSqu[idx]) {
        if(userSqu.length == gameSqu.length){
            setTimeout(lavelup, 1000);
        };
    }else{
        h2.innerHTML = `Game Over! Your score was <b>${lavel}</b> <br>  Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "grey";
        },250)
        reset();
    };
};

function btnPress() {
    let btn = this;
    userFlash(btn);
    
    userColor = btn.getAttribute("id");
    userSqu.push(userColor);

    checkAns(userSqu.length-1);
};

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click",btnPress);
}

function updateHighestScoreDisplay() {
    const highestScoreDisplay = document.getElementById("highst-score");
    highestScoreDisplay.textContent = `Highest Score: ${highestScore}`;
}

function reset() {
    started = false;
    gameSqu = [];
    userSqu = [];
    lavel = 0;
    highestScore = 0; //reset the score 
    updateHighestScoreDisplay(); //reset the diaplay
}