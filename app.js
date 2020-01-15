let userScore=0;
let compScore=0;
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissors_div=document.getElementById("s");
const userScore_span=document.getElementById("user-score");
const compScore_span=document.getElementById("comp-score");
const result_p=document.querySelector(".result > p");

function getCompChoice(){
    const choices=["r","p","s"];
    randomNumber=Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertToWord(a){
    if (a=="r") return "Rock";
    if (a=="p") return "Paper";
    return "Scissors";
}

function win (userChoice, compChoice){
    userScore++;
    userScore_span.innerHTML=userScore;
    compScore_span.innerHTML=compScore;
    result_p.innerHTML=`${convertToWord(userChoice)} beats ${convertToWord(compChoice)}. You Win!`;
    blueGlow=document.getElementById(userChoice);
    blueGlow.classList.add("blue-glow");
    setTimeout(()=> blueGlow.classList.remove("blue-glow"),700);

}

function lose (userChoice, compChoice){
    compScore++;
    userScore_span.innerHTML=userScore;
    compScore_span.innerHTML=compScore;
    result_p.innerHTML=`${convertToWord(userChoice)} loses to ${convertToWord(compChoice)}. You Lose!`;
    redGlow=document.getElementById(userChoice);
    redGlow.classList.add("red-glow");
    setTimeout(()=>redGlow.classList.remove("red-glow"),700);

}

function draw(userChoice, compChoice){
    userScore_span.innerHTML=userScore;
    compScore_span.innerHTML=compScore;
    result_p.innerHTML=`${convertToWord(userChoice)} equals ${convertToWord(compChoice)}. Straw!`;
    yellowGlow=document.getElementById(userChoice);
    yellowGlow.classList.add("yellow-glow");
    setTimeout(()=>yellowGlow.classList.remove("yellow-glow"),700);

}

function game (userChoice){
   compChoice= getCompChoice();
   switch (userChoice+compChoice){
       case "rs":
       case "pr":
       case "sp":
           win (userChoice, compChoice);
           break;
       case "sr":
       case "rp":
       case "ps":
           lose (userChoice, compChoice);
           break;
       case "rr":
       case "pp":
       case "ss":
           draw(userChoice, compChoice);
           break;
   }
}

rock_div.addEventListener('click',function(){
    game ("r");
})
paper_div.addEventListener('click',function(){
   game("p");
})
scissors_div.addEventListener('click',function(){
   game ("s");
})