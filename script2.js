const GameBoard = (function () {

    // Create a 3x3 board as an array
    let board = ['','','','','','','','',''];
    function getBoard() {
        return board;
    }

    // We want to add a marker to a specific place on the board with the players marker
    function addMarker(board, location) {
        
        // If there are no empty cells then exit
        if (boardIsFull(board)){
            return;
        };
        
        while (board[location] !== '') {
            
            location = Number(prompt('There is already a marker there, enter another number between 0 - 8'));             
        }

        return board.splice(location, 1, Players.playerMarker());
    }

    function boardIsFull(board){

        return board.filter(cell => cell === '').length === 0;
    }

    function clearBoard() {

        return board.map(cell => cell === '');
    }

   return {
    getBoard: getBoard,
    addMarker: addMarker, 
    clearBoard: clearBoard,
    boardIsFull: boardIsFull
   }
   
    
})();

const Players = (function() {

    const players = [
        {
            name: 'Player One',
            marker: 'X'
        },
        {
            name: 'Player Two',
            marker: 'O'
        }
    ];

    let activePlayer = players[0];

    function getActivePlayer(){
        return activePlayer;
    }
    
    function playerMarker(){

        return getActivePlayer().marker;
    }

    function switchPlayers(){
        return activePlayer = activePlayer === players[0] ? players[1] : players[0];

    }

    return {
        playerMarker: playerMarker, 
        getActivePlayer: getActivePlayer, 
        switchPlayers: switchPlayers
    }

})();

// Create a method within the protoype of array that gets the indexes of our players marker
Array.prototype.multiIndexOf = function(marker){
    let indxs = [];
    for (let i=0; i <= this.length - 1; i++ ) {
        if (this[i] === marker) {
            indxs.push(i);
        }
    }
    return indxs;
}

// We want to check if the player has their marker in the position required to win
function win(board) {

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    // If the board contains the same symbol at the indexes of any of the conditions above return true
    const xMarker = board.multiIndexOf('X'); // [0, 1, 2, 3, 7] WIN
    const oMarker = board.multiIndexOf('O'); // [4, 5, 6, 8] LOSE

    if (xMarker.length >= 3) {
        
        // NOT WORKING
        return winningConditions.some(row => row.includes(xMarker));
    }

    else if (oMarker.length >= 3) {
        
        // NOT WORKING
        return winningConditions.some(row => row.includes(oMarker));
    }

    return;
}

function playRound() {

    let board = GameBoard.getBoard(); // ['','','','','','','','','']

    // GETTING CAUGHT IN HERE
    while (!win(board) && !GameBoard.boardIsFull(board)) {
        Players.playerMarker(); // 'X'
        let location = Number(prompt('Pick a number between 0 - 8')); // 4, 0
        GameBoard.addMarker(board, location);
        
        //Check for wins
        if (win(board)){
            const winMessage = `${Players.getActivePlayer().name} wins!!`;
            alert(winMessage);
            endGame();
        }
        else if (!win(board) && GameBoard.boardIsFull(board)){
            const tieMessage = 'Game is a tie!'
            alert(tieMessage);
            endgame();
        }
        Players.switchPlayers();

    }
   endgame(currentPlayer, board);
    
}

function startGame() {
    // clear the board
    GameBoard.clearBoard();

    // play the round
    playRound();
}

function endgame(){
    // if (board.filter(cell => cell === '').length !== 0)
    // {
    //     const winMessage = `${Players.getActivePlayer().name} wins!!`;
    //     console.log(winMessage);
    // }
    GameBoard.clearBoard();
}

startGame();