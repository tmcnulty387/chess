const boardSize = 8; // 8x8 chessboard
const chessboard = document.getElementById('chessboard');

// initializes chess board
for (let row = 0; row < boardSize; row++) {
    for (let col = 0; col < boardSize; col++) {
        let square = document.createElement('div');
        square.id = String.fromCharCode('a'.charCodeAt(0) + col) + (boardSize - row);
        square.classList.add('chess-square');
        chessboard.appendChild(square);
    }
}
