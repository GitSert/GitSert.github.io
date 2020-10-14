//rock paper scissors below
//references
//
//get reference for input
let input = document.getElementById("input").value;
//get reference for submit button
let submit = document.getElementById("submit");
//get reference for where to put countdown
const countdown = document.getElementById("countdownHere");
//get reference for where to put rps result
const resultHere = document.getElementById("resultHere");

//
let rpsResult = rps(input);
function rps(input) {
  let botChose = undefined;
  let randomNumber = Math.floor(Math.random() * 3 + 1);
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
  if (input === botChose) {
    return `It's a tie! You and the bot picked ${input}`;
  } else if (input === "rock") {
    if (botChose === "scissors") {
      return "Congratz! You picked rock and the bot picked scissors";
    } else if (botChose === "paper") {
      return "Too bad! You picked rock and the bot picked paper";
    }
  } else if (input === "paper") {
    if (botChose === "scissors") {
      return "Too bad! You picked paper and the bot picked scissors";
    } else if (botChose === "rock") {
      return "Congratz! You picked paper and the bot picked rock";
    }
  } else if (input === "scissors") {
    if (botChose === "rock") {
      return "Too bad! You picked scissors and the bot picked rock";
    } else if (botChose === "paper") {
      return "Congratz! You picked scissors and the bot picked paper";
    }
  } else {
    console.log("Somehow something went wrong");
  }
}

//adds eventlistener to submit button that shows a countdown and then the result
submit.addEventListener("click", showCountdown);

//adds a function that shows a countdown to 3 manually because it didn't want to work dynamically
let countTo = 3;
function seconds2() {
  countdown.innerHTML = `Showing result in 2 seconds`;
}
function seconds1() {
  countdown.innerHTML = `Showing result in 1 second`;
}

function showCountdown() {
  input = document.getElementById("input").value;
  rpsResult = rps(input);
  countdown.innerHTML = `Showing result in ${countTo} seconds`;
  setTimeout(seconds2, 1000);
  setTimeout(seconds1, 2000);
  setTimeout(hideCountdown, 3000);
  setTimeout(showResult, 3000);
}

// let counter = 3;
// const countdown = setInterval(() => {
//   if (counter > 0) {
//     counter--;
//     countdown.innerHTML = `Showing result in ${counter} seconds`;
//   } else {
//     clearInterval(countdown);
//   }
// }, 1000);

//adds a function that removes countdown
function hideCountdown() {
  countdown.innerHTML = "";
}

//adds a function that shows the result of the rps game in the resultHere div
function showResult() {
  resultHere.innerHTML = rpsResult;
}
//rock paper scissors above
