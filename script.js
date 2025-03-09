document.addEventListener("DOMContentLoaded", () => {
    function getComputerChoice() {
        const choice = Math.floor(Math.random() * 3);
        if (choice === 0) {
            return "paper";
        } else if (choice === 1) {
            return "rock";
        } else {
            return "scissor";
        }
    }

    const btnRock = document.querySelector("#btnRock");
    const btnPaper = document.querySelector("#btnPaper");
    const btnScissors = document.querySelector("#btnScissors");

    function getHumanChoice() {
        return new Promise((resolve) => {
            btnPaper.addEventListener("click", () => {
                resolve("paper");
            });
            btnRock.addEventListener("click", () => {
                resolve("rock");
            });
            btnScissors.addEventListener("click", () => {
                resolve("scissor");
            });
        });
    }

    const computerChoiceText = document.querySelector(".computerChoice");
    const playRoundResult = document.querySelector(".playRoundResult");
    const humanScoreText = document.querySelector(".humanScore");
    const computerScoreText = document.querySelector(".computerScore");

    function playRound(humanChoice, computerChoice) {
        computerChoiceText.textContent = computerChoice;
        if (humanChoice === computerChoice) {
            playRoundResult.textContent = "It's a tie";
            return -1;
        } else if (humanChoice === "paper" && computerChoice === "scissor") {
            playRoundResult.textContent = "You lose! Scissor beats Paper";
            return 0;
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            playRoundResult.textContent = "You lose! Paper beats Rock";
            return 0;
        } else if (humanChoice === "scissor" && computerChoice === "rock") {
            playRoundResult.textContent = "You lose! Rock beats Scissor";
            return 0;
        } else if (humanChoice === "scissor" && computerChoice === "paper") {
            playRoundResult.textContent = "You Win! Scissor beats Paper";
            return 1;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            playRoundResult.textContent = "You Win! Paper beats Rock";
            return 1;
        } else if (humanChoice === "rock" && computerChoice === "scissor") {
            playRoundResult.textContent = "You Win! Rock beats Scissor";
            return 1;
        }
    }

    const results = document.querySelector(".result");

    async function playGame() {
        let humanScore = 0;
        let computerScore = 0;
        while (humanScore < 5 && computerScore < 5) {
            const humanSelection = await getHumanChoice();
            const computerSelection = getComputerChoice();
            const roundResult = playRound(humanSelection, computerSelection);
            if (roundResult === 1) {
                ++humanScore;
            } else if (roundResult === 0) {
                ++computerScore;
            }
            humanScoreText.textContent = `Human Score: ${humanScore}`;
            computerScoreText.textContent = `Computer Score: ${computerScore}`;
        }
        if (humanScore > computerScore) {
            results.textContent = "You are the Winner YAY!!!";
        } else if (humanScore === computerScore) {
            results.textContent = "It's a tie haha";
        } else {
            results.textContent = "You are the Loser BOO!!!";
        }
    }

    playGame();
});