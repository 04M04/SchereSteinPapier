let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.getElementById(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

main();

function getComputerChoice() {
    const choices = ['r', 'p', 's']    
    return choices[Math.floor(Math.random() * 3)];
}

function convertToWord(letter) {
    if(letter === "r") return "Stein";
    if(letter === "p") return "Papier";
    if(letter === "s") return "Schere";
}

function win(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallComputerWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;    
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} besiegt ${convertToWord(computerChoice)}${smallComputerWord}. Du gewinnst!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(() => { document.getElementById(userChoice).classList.remove('green-glow'); }, 300);
}

function lose(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallComputerWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;        
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;   
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} wird zerstört von ${convertToWord(computerChoice)}${smallComputerWord}. Du hast verloren.`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(() => { document.getElementById(userChoice).classList.remove('red-glow'); }, 300);
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallComputerWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} gegen ${convertToWord(computerChoice)}${smallComputerWord}. Nichts passiert....`;
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(() => { document.getElementById(userChoice).classList.remove('gray-glow'); }, 300);
}

function game(userChoice) {
    console.log(userChoice);
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
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

function main(){
    rock_div.addEventListener('click', () => { game("r"); })

    paper_div.addEventListener('click', () => { game("p"); })

    scissors_div.addEventListener('click', () => { game("s"); })
}
