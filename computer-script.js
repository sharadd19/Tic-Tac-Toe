document.title = "Tic Tac Toe";
let computerTurn;
const CIRCLE_CLASS = 'circle';
const X_CLASS = 'x';
const WINNING_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const cells = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
const winningMessageDiv = document.querySelector('[data-winning-message-text]');
const winningMessage = document.getElementById('winning-message');
const restartButton = document.getElementById('restart-button');

startGame();

function createBucket() {
    return bucket = [0,1,2,3,4,5,6,7,8];
}
function startGame(){

    computerTurn = false;
    cells.forEach(cell => {

        // Set the board up 
        cell.classList.remove(X_CLASS);
        cell.classList.remove(CIRCLE_CLASS);
        cell.removeEventListener('click', handleClick);

        cell.addEventListener('click', handleClick, {once: true})
    });
    
    setBoardHoverClass();

    //Set the board up 
    winningMessage.classList.remove('show');
    createBucket();

    //computerMove(CIRCLE_CLASS);
}

function handleClick(e) {

    let currentMarker = computerTurn ? CIRCLE_CLASS: X_CLASS
    
    
    // Determine Player 1's turn 
    const position = e.target;
    placeMarker(position, currentMarker);        
    
    //console.log('computercell',computerCell)
    // Determine which marker to use depending on whose turn it is
    
    
    /* const currentMarker = computerTurn ? CIRCLE_CLASS: X_CLASS
    // Determine which cell to place the marker in 
    const currentPlayerPosition = computerTurn ? computerCell : playerOneCell;

    // Place marker
    placeMarker(currentPlayerPosition, currentMarker); */
    // Check for wins or draws
    if (checkWin(currentMarker)){
        endGame(false);
    } 
    else if (isDraw()){
        endGame(true);
    }
    else{
        // Switch turns 
        switchTurn();
        currentMarker = CIRCLE_CLASS;
        setBoardHoverClass();
        computerMove(e, currentMarker);
        switchTurn();
        setBoardHoverClass();
    } 
    
    
        
}
function computerMove(e, currentMarker){
    let playerChoiceToRemove = Number(e.target.id); // We have this so we can remove the player's choice from the available options that the computer can play in. 
    let computerChoice = getComputerChoice(playerChoiceToRemove);
    let computerPosition = cells[computerChoice];
    computerPosition.classList.add(currentMarker);
    
}

function placeMarker(currentPlayerPosition, currentMarker){
    currentPlayerPosition.classList.add(currentMarker);

}

function switchTurn(){
    computerTurn = !computerTurn;
}

function getComputerChoice(playerChoiceToRemove){
    // Player's pick is removed from bucket 
    bucket = bucket.filter(number => number !== playerChoiceToRemove);

    // Computer picks number at random from the remaining numbers
    var randomIndex = Math.floor(Math.random() * bucket.length);
    const computerChoice = bucket.splice(randomIndex, 1)[0]; 

    // Computer's pickis removed from the bucket 
    bucket = bucket.filter(number => number !== computerChoice);

    
    // Repeat
    console.log('bucket', bucket)
    console.log('computerchoice',computerChoice)
    return computerChoice;
}
restartButton.addEventListener('click', startGame);

// If the board is full we draw
function isDraw(){
    return [...cells].every(cell => {
        return cell.classList.contains(X_CLASS) || 
        cell.classList.contains(CIRCLE_CLASS)
    });
}

function endGame(draw){
    // Clear the board if the game is draw 
    if (draw){
        winningMessageDiv.innerText = "Draw!"
    } else{
        // Show winning message 
        winningMessageDiv.innerText = `${computerTurn ? "Computer" : "Player One"} Wins!`
    }
    
    winningMessage.classList.add('show')

    
}



function setBoardHoverClass(){
    board.classList.remove(CIRCLE_CLASS);
    board.classList.remove(X_CLASS);
    if (computerTurn) {
        return
    }
    else {
        board.classList.add(X_CLASS);
    }
}

// If any of the cells appear in the winning combinations, we have won.
function checkWin(currentClass){
    return WINNING_CONDITIONS.some(combination => {
        return combination.every(index => {
            return cells[index].classList.contains(currentClass);
        })
    })
}