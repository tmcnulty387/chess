const boardSize = 8; // 8x8 chessboard
const chessboard = document.getElementById('chessboard');

let chessPieces = new Map([
    ['a8', 'black-rook'], ['b8', 'black-knight'], ['c8', 'black-bishop'], ['d8', 'black-queen'],
    ['e8', 'black-king'], ['f8', 'black-bishop'], ['g8', 'black-knight'], ['h8', 'black-rook'],
    ['a7', 'black-pawn'], ['b7', 'black-pawn'], ['c7', 'black-pawn'], ['d7', 'black-pawn'],
    ['e7', 'black-pawn'], ['f7', 'black-pawn'], ['g7', 'black-pawn'], ['h7', 'black-pawn'],
    ['a2', 'white-pawn'], ['b2', 'white-pawn'], ['c2', 'white-pawn'], ['d2', 'white-pawn'],
    ['e2', 'white-pawn'], ['f2', 'white-pawn'], ['g2', 'white-pawn'], ['h2', 'white-pawn'],
    ['a1', 'white-rook'], ['b1', 'white-knight'], ['c1', 'white-bishop'], ['d1', 'white-queen'],
    ['e1', 'white-king'], ['f1', 'white-bishop'], ['g1', 'white-knight'], ['h1', 'white-rook']
]);

// initializes chess board
for (let row = 0; row < boardSize; row++) {
    for (let col = 0; col < boardSize; col++) {
        let square = document.createElement('div');
        square.id = String.fromCharCode('a'.charCodeAt(0) + col) + (boardSize - row);
        square.classList.add('chess-square');
        chessboard.appendChild(square);

        if(chessPieces.has(square.id)){
            let piece = document.createElement('img');
            piece.id = chessPieces.get(square.id);
            piece.src = piece.id + '.png';
            square.appendChild(piece);
        }
    }
}
// Alternate color pattern for chess plots //!UNFINISHED
/*let chessPieceBackground = document.querySelectorAll('chess-square');
for(let i = 0; i < chessPieceBackground.length; i++){
    if(i % 2 == 0){
        chessPieceBackground[i].setAttribute('background-color', '#0f0ff0');
    } else {
        chessPieceBackground[i].setAttribute('background-color', '#0fffff');
    }
    
}*/

function movePiece(){
    // TODO
}