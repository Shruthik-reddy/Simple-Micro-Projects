let gameSeq=[];
let userSeq=[];

let h3=document.querySelector("h3");
let h1=document.querySelector("h1");
let started=false;
let level=0;

document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        levelup();
    }
    let allBtns=document.querySelectorAll(".btn");
    for(btn of allBtns){
        btn.addEventListener("click",btnPress);
    }
});

function levelup(){
    userSeq=[];
    level++;
    h3.innerHTML=`<big><b>Level ${level}</b></big>`;

    let randIdx=Math.floor(Math.random()*4);
    let randbtn=document.querySelector(`#btn${randIdx+1}`);
    gameSeq.push(randbtn);
    gameFlash(randbtn);
}

function gameFlash(btn){
    btn.classList.add("gameFlash");
    setTimeout(function(){
        btn.classList.remove("gameFlash");
    },200);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },200);
}


function btnPress(){
    let btn = this;
    userSeq.push(btn);
    userFlash(btn);
    checkSeq(userSeq.length-1);
}

function checkSeq(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup,500);
        }
    }else{
        h3.innerHTML=`<big><b>Game Over!</b></big> Your score was <big><b>${level-1}</b></big><br>Press any key to start again`;
        document.querySelector("body").style.backgroundColor="red";
        h3.style.color="white";
        h1.style.color="white";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
            h1.style.color=`rgb(138, 84, 189)`;
            h3.style.color=`rgb(101, 95, 95)`;
        },150);
        reset();
    }
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
    let allBtns=document.querySelectorAll(".btn");
    for(btn of allBtns){
        btn.removeEventListener("click",btnPress);
    }
}