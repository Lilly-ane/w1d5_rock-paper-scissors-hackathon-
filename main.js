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

 //## Task 2: Function
//Take the if statements that you've written and tested and put them into a function. The variables from before should now be taken in as parameters so that you can call the function with any two moves. Instead of printing the result to the console, the function should return:

//- `1` if player1 wins
//- `0` if it is a draw
//- `-1` if player1 loses (player2 wins)

function getWinner(player1, player2) {
     if(player1 ==="rock" & player2 ==="paper"){
     return -1;
     }
     if(player1 ==="paper" & player2 ==="rock"){
        return 1;
        }
     if(player1==="paper" & player2 ==="paper"){
        return 0;
     }
     if(player1==="rock" & player2 ==="rock"){
        return 0;
     }
     if(player1==="scissor" & player2==="rock"){
        return -1;
     }
    
     if(player1==="paper" & player2==="scissor"){
     return -1;
     }
    
     if(player1==="scissor" & player2==="paper"){
     return 1
     }
    
     if(player1==="scissor" & player2==="scissor"){
     return 0;
     }
}
let result = getWinner("paper", "paper");
console.log(result);

//## Task 3: User Input
//Using `prompt`, get a user-inputted value for the player move. Then call your function with that value as the player move and the hard-coded computer move. Display the result using `alert`.
//This will be deemed as complete when you can input any move for the player move and hard-code any move for the computer move and see the correct result (1, 0, or -1) in the alert.

let Player1choice = prompt("Please enter your choise");
alert(getWinner(Player1choice,"rock"));