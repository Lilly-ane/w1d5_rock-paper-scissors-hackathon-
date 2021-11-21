//## Task 1: Logic
//To complete this ticket you will need to write a set of if statements that will determine the winner of rock, paper, scissors. 
//The two moves should be stored in two variables like so:

var playerMove = "rock";
var computerMove = "paper";
if(playerMove==="rock" & computerMove==="paper"){
    console.log ("computer win");
}

var playerMove = "paper";
var computerMove = "rock";
if(playerMove==="paper" & computerMove==="rock"){
    console.log ("player win");
}

var playerMove = "paper";
var computerMove = "paper";
if(playerMove==="paper" & computerMove==="paper"){
    console.log ("Draw");
}

var playerMove = "rock";
var computerMove = "rock";
if(playerMove==="rock" & computerMove==="rock"){
 console.log ("Draw");
}

var playerMove = "rock";
var computerMove = "scissor";
if(playerMove==="rock" & computerMove==="scissor"){
    console.log ("player win");
}
var playerMove = "scissor";
var computerMove = "rock";
if(playerMove==="scissor" & computerMove==="rock"){
    console.log ("computer win");
}

var playerMove="paper";
var computerMove="scissor";
if(playerMove==="paper" & computerMove==="scissor"){
console.log("Computer win")
}

var playerMove="scissor";
var computerMove="paper"
if(playerMove==="scissor" & computerMove==="paper"){
console.log("Player win")
}

var playerMove="scissor";
var computerMove="scissor"
if(playerMove==="scissor" & computerMove==="scissor"){
console.log("Draw")
}