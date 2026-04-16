// accessing body
let body = document.querySelector("body");

// updating cmnd
let changeOfPlayer = document.querySelector(".updatecmnd");

// playing board
let board = document.querySelector(".box");

// var of every box
let zeroZero = document.getElementById("00");
let zeroOne= document.getElementById("01");
let zeroTwo = document.getElementById("02");
let oneZero = document.getElementById("10");
let oneOne = document.getElementById("11");
let oneTwo = document.getElementById("12");
let twoZero = document.getElementById("20");
let twoOne = document.getElementById("21");
let twoTwo = document.getElementById("22");

// games steps
let count = 0;
let gameOver = false;

// creating function of clicking button 
function yourMove(btn) {
    if (btn.innerText !=="" || gameOver){
        return;
    }
    if(count%2==0){
        changeOfPlayer.innerText= "It's your time X do some magic";
        console.log(count);
        btn.innerText="O";
    } else {
        changeOfPlayer.innerText= "It's your time O do some magic";
        console.log(count);
        btn.innerText="X";
    }
   
    // chekcing of ans;
    count++;
    checking();

    if (!gameOver && count === 9){
        changeOfPlayer.innerText="Play Again DON";
        alert("No One Won...");
        setTimeout( ()=> {
            location.reload();
        },1500);
    }
}


// clickings
zeroZero.addEventListener("click",()=> {
    yourMove(zeroZero);
})
zeroOne.addEventListener("click",()=> {
    yourMove(zeroOne);
})
zeroTwo.addEventListener("click",()=> {
    yourMove(zeroTwo);
})
oneZero.addEventListener("click",()=> {
    yourMove(oneZero);
})
oneOne.addEventListener("click",()=> {
    yourMove(oneOne);
})
oneTwo.addEventListener("click",()=> {
    yourMove(oneTwo);
})
twoZero.addEventListener("click",()=> {
    yourMove(twoZero);
})
twoOne.addEventListener("click",()=> {
    yourMove(twoOne);
})
twoTwo.addEventListener("click",()=> {
    yourMove(twoTwo);
})

// -------------------------IMP-------------------------------
// better option
// let boxes = document.querySelectorAll(".box div");

// boxes.forEach(box => {
//     box.addEventListener("click", () => yourMove(box));
// });
// -----------------------------------------------------------


function oWon(){
    gameOver=true;
    changeOfPlayer.innerText="Player O Won";
    alert("Player having O won");
    setTimeout( ()=> {
        location.reload();
    },1500);
    // stopping game.
}
function xWon(){
    gameOver=true;
    changeOfPlayer.innerText="Player X Won";
    alert("Player having X won");
    setTimeout( ()=> {
        location.reload();
    },1500);
    // stopping game.
}

function checking(){

    let arr = [
        [zeroZero.innerText, zeroOne.innerText, zeroTwo.innerText],
        [oneZero.innerText, oneOne.innerText, oneTwo.innerText],
        [twoZero.innerText, twoOne.innerText, twoTwo.innerText]
    ];

    //  Row checking
    for(let i = 0; i < 3; i++){
        let checksO = 0;
        let checksX = 0;

        for(let j = 0; j < 3; j++){
            if(arr[i][j] === "O") checksO++;
            else if(arr[i][j] === "X") checksX++;
        }

        if(checksO === 3){
            oWon();
            return;
        } 
        
        if(checksX === 3){
            xWon();
            return;
        } 
    }

    //  Column checking
    for(let j = 0; j < 3; j++){
        let checksO = 0;
        let checksX = 0;

        for(let i = 0; i < 3; i++){
            if(arr[i][j] === "O") checksO++;
            else if(arr[i][j] === "X") checksX++;
        }

        if(checksO === 3){
            oWon();
            return;
        } 
        
        if(checksX === 3){
            xWon();
            return;
        } 
    }

    //  Main diagonal
    let checksO = 0;
    let checksX = 0;

    for(let i = 0; i < 3; i++){
        if(arr[i][i] === "O") checksO++;
        else if(arr[i][i] === "X") checksX++;
    }

    if(checksO === 3){
        oWon();
        return;
    } 
        
    if(checksX === 3){
        xWon();
        return;
    } 

    // Anti-diagonal
    checksO = 0;
    checksX = 0;

    for(let i = 0; i < 3; i++){
        if(arr[i][2 - i] === "O") checksO++;
        else if(arr[i][2 - i] === "X") checksX++;
    }

    if(checksO === 3){
        oWon();
        return;
    } 
        
    if(checksX === 3){
        xWon();
        return;
    } 
}