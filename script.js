
    let playerSelection;
    let computerSelection;
    let playerScore = 0;
    let computerScore = 0;
    let options = ['rock', 'paper', 'scissors'];
    let roundWinner;

    function random (n){
        return Math.floor(Math.random() * n);
    }

    function computerPlay(){
           
           return options[random(3)];      
       }

    function updateScore(){
        
        if (roundWinner === 'tie'){
            return;
        }
        if(roundWinner === 'player'){
            playerScore++;
            playerScoreNumber.textContent = playerScore;
            playerScoreCounter.appendChild(playerScoreNumber);
            gameResult.textContent = 'Player wins';
            if (playerScore === 5){
                gameResult.textContent = 'Congratulations, you won!';
            }
            if (computerScore === 5){
                gameResult.textContent = 'Game Over, Computer won...';
            }
        }if(roundWinner === 'computer'){
            computerScore++;
            computerScoreNumber.textContent = computerScore;
            computerScoreCounter.appendChild(computerScoreNumber);
            gameResult.textContent = 'Computer wins';
            if (playerScore === 5){
                gameResult.textContent = 'Congratulations, you won!';
            }
            if (computerScore === 5){
                gameResult.textContent = 'Game Over, Computer won...';
            }
        }
    }

    function playRound(playerSelection, computerSelection){
               
            computerSelection = computerPlay();
            computerChoiceResult.textContent = computerSelection;
            computerChoice.appendChild(computerChoiceResult);

          
            if (playerSelection === computerSelection){
                roundWinner ='tie';
                gameResult.textContent = `It's a tie!`;
                return;
            }
            else if (playerSelection === 'rock'){
                if (computerSelection === 'paper'){
                    roundWinner = 'computer';                  
                    return;
                }else{
                    roundWinner = 'player';   
                    return;
                }
            }
            else if (playerSelection === 'paper'){
                if (computerSelection === 'rock'){
                    roundWinner = 'player';
                    updateScore();
                    return;
                    
                }else{
                    roundWinner = 'computer';
                    updateScore();
                    return;
                }
            }
            else if (playerSelection === 'scissors'){
                if (computerSelection === 'rock'){
                    roundWinner = 'computer';
                    updateScore();
                    return;
                }else{
                    roundWinner = 'player';
                    updateScore();
                    return;
                }
            }
              

        }

        const rockButton = document.querySelector('#button_rock');
        const paperButton = document.querySelector('#button_paper');
        const scissorsButton = document.querySelector('#button_scissors');
        const computerChoice = document.querySelector('.computerChoice');
        const computerChoiceResult = document.createElement('p');
        const playerScoreCounter = document.querySelector('.playerScore');
        const computerScoreCounter = document.querySelector('.computerScore');
        const playerScoreNumber = document.createElement('p');
        const computerScoreNumber = document.createElement('p');
        const gameResult = document.querySelector('.game_result')

        rockButton.addEventListener('click', () => {
            playRound('rock', computerPlay);
            updateScore();                      
        });
        
        paperButton.addEventListener('click', () => {
            playRound('paper', computerPlay);
            updateScore();
        });

        scissorsButton.addEventListener('click', () => {
            playRound('scissors', computerPlay);
            updateScore();
        });

        

        /*  function game(){
            
            for (let i = 0; i < 5; i++){
                playerSelection = prompt('Your turn: ')
                playRound(playerSelection, computerSelection);
                console.log(playerSelection);
                console.log(computerSelection);
                console.log(`Player : ${playerScore}`);
                console.log(`Computer : ${computerScore}`);
            }
        }  */