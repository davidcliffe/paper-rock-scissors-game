// load variables for future use
var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const reset_form = document.getElementById("reset-button");

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random()*3); 
  const compChoice = choices[randomNumber];
  const compChoiceId = document.getElementById(`comp-${compChoice}`);
  compChoiceId.classList.add('comp-highlight');  
  setInterval(function() {compChoiceId.classList.remove('comp-highlight')}, 1000); 
  return compChoice;
}

function convertToWord(letter) {
  switch(letter) {
  case "r":
    return "Rock"
  case "p":
    return "Paper"
  case "s":
    return "Scissors"
  }
}

function win(userChoice, computerChoice) {
  const userLabel = document.getElementById("user-label");
  const compLabel = document.getElementById("comp-label");
  userScore++;
  userScore_span.textContent = userScore;
  result_p.textContent = `You win!!  ${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}`;  
  userLabel.classList.add('green-flash');
  compLabel.classList.add('red-flash');
  setTimeout(function() {userLabel.classList.remove('green-flash'); compLabel.classList.remove('red-flash');}, 1000);
}

function lose(userChoice, computerChoice) {
  const userLabel = document.getElementById("user-label");
  const compLabel = document.getElementById("comp-label");
  computerScore++;
  compScore_span.textContent = computerScore;
  result_p.textContent = `You lose!!  ${convertToWord(computerChoice)} beats ${convertToWord(userChoice)}`;  
  userLabel.classList.add('red-flash');
  compLabel.classList.add('green-flash');
  setTimeout(function() {userLabel.classList.remove('red-flash');compLabel.classList.remove('green-flash');}, 1000);
}

function draw(userChoice, computerChoice) {
  const userLabel = document.getElementById("user-label");
  const compLabel = document.getElementById("comp-label");
  result_p.textContent = `Draw!! ${convertToWord(userChoice)} matches ${convertToWord(computerChoice)}`;  
  userLabel.classList.add('draw-flash');
  compLabel.classList.add('draw-flash');
  setTimeout(function() {userLabel.classList.remove('draw-flash');compLabel.classList.remove('draw-flash');}, 1000);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch(userChoice + computerChoice) {
    case "rs":          
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":          
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":          
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() { 
  rock_div.addEventListener('click', function() {
    game("r");
  })
  paper_div.addEventListener('click', function() {
    game("p");  
  })
  scissors_div.addEventListener('click', function() {
    game("s");  
  })
  reset_form.addEventListener('click', function() {
    location.reload();
  })
}

main();

