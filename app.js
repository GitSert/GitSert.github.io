//
//rock paper scissors below
//
//references
//get reference for input
let input = document.getElementById("input").value;
//get reference for submit button
const submit = document.getElementById("submit");
//get reference for where to put countdown
const countdown = document.getElementById("countdownHere");
//get reference for where to put rps result
const resultHere = document.getElementById("resultHere");
//
//declare loss, tie and wincount
let lossCount = 0;
let tieCount = 0;
let winCount = 0;

//result of rock, paper, scissors is
let rpsResult = rps(input);
function rps(input) {
  let botChose = undefined;
  //pick a random nr between 1 and 3
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  //if the random nr is 1, bot picked rock, etc.
  if (randomNumber === 1) {
    botChose = "rock";
  } else if (randomNumber === 2) {
    botChose = "paper";
  } else if (randomNumber === 3) {
    botChose = "scissors";
  } else {
    console.log(
      "The bot fucked up and picked something else than rock, paper or scissors"
    );
  }
  //if the user input is the same as what the bot chose the result is a tie
  if (input === botChose) {
    tieCount += 1;
    return `It's a tie! You and the bot picked ${input}`;
  }
  //if the input is rock see what the bot picks to see if you've won
  else if (input === "rock") {
    if (botChose === "scissors") {
      winCount += 1;
      return "Congratz! You picked rock and the bot picked scissors";
    } else if (botChose === "paper") {
      lossCount += 1;
      return "Too bad! You picked rock and the bot picked paper";
    }
  }
  //if the input is paper see what the bot picks to see if you've won
  else if (input === "paper") {
    if (botChose === "scissors") {
      lossCount += 1;
      return "Too bad! You picked paper and the bot picked scissors";
    } else if (botChose === "rock") {
      winCount += 1;
      return "Congratz! You picked paper and the bot picked rock";
    }
  }
  //if the input is scissors see what the bot picked to see if you've won
  else if (input === "scissors") {
    if (botChose === "rock") {
      lossCount += 1;
      return "Too bad! You picked scissors and the bot picked rock";
    } else if (botChose === "paper") {
      winCount += 1;
      return "Congratz! You picked scissors and the bot picked paper";
    }
  }
}
//add a function that shows the losses, ties and wins
function showStats() {
  //redeclare where to put stats
  const lossesHere = document.getElementById("lossesHere");
  const tiesHere = document.getElementById("tiesHere");
  const winsHere = document.getElementById("winsHere");
  //bugtest
  console.log("loss", lossCount);
  console.log("tie", tieCount);
  console.log("win", winCount);
  //assign the amount of losses to the innerHTML of each result
  lossesHere.innerHTML = `Losses - ${lossCount}`;
  tiesHere.innerHTML = `Ties - ${tieCount}`;
  winsHere.innerHTML = `Wins - ${winCount}`;
}
//add a function that hides the losses, ties and wins
//unused for now
// function hideStats() {
//   lossesHere.innerHTML = "";
//   tiesHere.innerHTML = "";
//   winsHere.innerHTML = "";
// }

//adds eventlistener to submit button that shows a countdown, the result of rps and updates the stats
submit.addEventListener("click", showFullRps);

//adds a function that shows a countdown to 3 manually
function seconds3() {
  countdown.innerHTML = `Showing result in 3 seconds`;
}
function seconds2() {
  countdown.innerHTML = `Showing result in 2 seconds`;
}
function seconds1() {
  countdown.innerHTML = `Showing result in 1 second`;
}

function showFullRps() {
  //see the input
  input = document.getElementById("input").value;
  //see the result of rps for input
  rpsResult = rps(input);
  //empty the resulthere if there is something there (for more than 1 use)
  resultHere.innerHTML = ``;
  //countdown
  setTimeout(seconds3, 0);
  setTimeout(seconds2, 1000);
  setTimeout(seconds1, 2000);
  //hide the countdown
  setTimeout(hideCountdown, 3000);
  //show the result of rps on the page
  setTimeout(showResult, 3000);
  //update the stats
  setTimeout(showStats, 3000);
}

//adds a function that removes countdown
function hideCountdown() {
  countdown.innerHTML = "";
}

//adds a function that shows the result of the rps game in the resultHere div
function showResult() {
  resultHere.innerHTML = rpsResult;
}
//
//rock paper scissors above
//
