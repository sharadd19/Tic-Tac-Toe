## Initial Planning

- Select whether you want to play with another person, or a computer

## Board
- Create the board
- Get the board 
- Update the board / print the board 

## Play Game
- Get players turn 
- Place symbol on the board 
    - make sure you can't place it on a location with an existing value
- check to see if win, draw, lose
    - win (meets winning combos)
    - draw (all cells are filled and no winning combinations)
    - if one of the above then end game
- if none of the above and cells are not filled then switch turns

## Game Controller
- play the game
- 3x3 grid of cells that are clickable
- player 1's turn (X)
- when you click on a cell, it populates the content of that cell with X
- disable that cell so you can't click on it and store its index so that it can be accessed later to check
- players 2's turn (O)
    - if computer has been selected: 
        - computers choice must be random within the bounds of the board and not including already selected elements
- click on a cell that hasn't been populated already to populate it with a O
    - if player 2 clicks on players 1 selection, do nothing
- repeat the above until all squares are populated
- while the game is going on, we need to check winning conditions
    - search the board to find these conditions
    - once winning condition is found, highlight those squares, and say who won, lost or drew
- once the game is won, show a button to reset the game 
- reset the board 
