console.log("Hello Youtube!");

let player = 'X';
let board = [];
let gameOver = false;
let moveIndex = 1;

function initializeBoard(boardSize) {
    for(let row=0; row < boardSize; row++){
        let boardRow = [];
        for(let column=0; column < boardSize; column++){
            boardRow.push('-');
        }
        board.push(boardRow);
    }
    console.table(board);
}



function playTicTacToe(boardSize) {
    initializeBoard(boardSize);
    do {
        let position = prompt(`Enter row and column for player ${player}`);
        if(position == null) {
            break;
        }
        let positionX = position.split(',')[0];
        let positionY = position.split(',')[1];
        if(positionX > boardSize-1 || positionY > boardSize-1) {
            alert("Wrong move");
            continue;
        } 
        board[positionX][positionY] = player;
        console.table(board);
        checkWinner(boardSize, positionX, positionY);
        player = (player == 'X') ? 'O' : 'X';
        moveIndex++;
    } while(!gameOver)
}

function checkWinner(boardSize, positionX, positionY) {
    if(moveIndex == (boardSize*boardSize)) {
        gameOver = true;
        alert("It is a draw");
    }
    let rowValues = new Set();
    let columnValues = new Set();
    let diagonal1Values = new Set();
    let diagonal2Values = new Set();
    for(let index = 0; index < boardSize; index++){
        rowValues.add(board[positionX][index]);
        columnValues.add(board[index][positionY]);
        diagonal1Values.add(board[index][index]);
        diagonal2Values.add(board[index][boardSize-index-1]);
    }
    if((rowValues.size == 1 && !rowValues.has('-')) 
    || (columnValues.size == 1 && !columnValues.has('-'))
    || (diagonal1Values.size == 1 && !diagonal1Values.has('-'))
    || (diagonal2Values.size == 1 && !diagonal2Values.has('-'))) {
        gameOver = true;
        alert(`Winner is ${player}`);
    }

}
let size = prompt("Enter board size");
playTicTacToe(size);