
    

    let circleTurn;
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

    
    function startGame(){

        circleTurn = false;
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

    }

    // This function is to 
    function handleClick(e) {
        const currentCell = e.target;
        const currentMarker = circleTurn ? CIRCLE_CLASS: X_CLASS

        // Place marker
        placeMarker(currentCell, currentMarker);
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
            setBoardHoverClass();
        }

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
            winningMessageDiv.innerText = `${circleTurn ? "O's" : "X's"} Win!`
        }
        
        winningMessage.classList.add('show')

        
    }

    function placeMarker(currentCell, currentMarker){
        currentCell.classList.add(currentMarker);
    }

    function switchTurn(){
        circleTurn = !circleTurn;
    }

    function setBoardHoverClass(){
        board.classList.remove(CIRCLE_CLASS);
        board.classList.remove(X_CLASS);
        if (circleTurn) {
            board.classList.add(CIRCLE_CLASS);
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