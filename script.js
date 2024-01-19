// const GameBoard = (function() {
    
//     // Create board
//     board = [];
//     for (let i=0; i<=8; i++) {
//         board[i] = [];
//         board[i].push(Cell());
//     }
    
//     getBoard = () => board;

//     // We take a turn by selecting a place on the board and changing the value of the cell to our symbol.
//     dropSymbol = (location, playerSymbol) => { 

//         // Filter the board to find the empty cells and add the player symbol to it.
//         const availableCells = getEmptyCells();
//         if (availableCells.length === 0) {return};
        
//         // How does the board have access to this method (addPlayerSymbol) when it exists outside the function?
//         // ANS - because you've pushed Cell() into the board, it has access to all of Cells functions.
//         availableCells[location].addPlayerSymbol(playerSymbol);

//     };

//     printBoard = () => {

//         board.map(cell => {cell.getValue()});    

//     }
    
//     getEmptyCells = () => {
//         board.filter(cell => cell.isEmpty())
//     }

//     return {getBoard, dropSymbol, printBoard};

// })();



// function Cell() {
//     let value = 0; 

//     // Change the value of the cell depending on the player
//     addPlayerSymbol = (player) => {
//         value = player;
//     };
//     // Get this value 
//     getValue = () => value;

//     return {addPlayerSymbol, getValue};
// }

// const playGame = ((playerOne = "Player One", playerTwo = "Player 2") => {

//     const board = GameBoard.getBoard();
//     const players = [
//         {
//             name: playerOne,
//             symbol: 'X'
//         },
//         {
//             name: playerTwo,
//             symbol: 'O'
//         }
//     ];

//     let activePlayer = players[0]; 
//     getActivePlayer = () => activePlayer;
    
//     switchPlayers = () => {
//         // Set the active equal to player 2 if the current active player is player 1.
//         activePlayer = activePlayer === players[0] ? players[1] : players[0];
//     };

//     printNewRound = () => {
//         GameBoard.printBoard();
//         console.log(`${getActivePlayer().name}'s turn`);
//     }

//     playRound = (location) => {
//         console.log(`Dropping ${getActivePlayer.name}'s symbol into the location ${location}...`);
//         GameBoard.dropSymbol(location, getActivePlayer.symbol);


//     // Check winning conditions
//     switchPlayers();
//     printNewRound();

//     };

//     printNewRound();

//     return {playRound, getActivePlayer};
// })();

// const game = playGame;