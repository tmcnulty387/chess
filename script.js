const boardSize = 8; // 8x8 chessboard
const chessboard = document.getElementById('chessboard');

let chessPieces = new Map([
    ['a8', 'darkRook'], ['b8', 'darkKnight'], ['c8', 'darkBishop'], ['d8', 'darkQueen'],
    ['e8', 'darkKing'], ['f8', 'darkBishop'], ['g8', 'darkKnight'], ['h8', 'darkRook'],
    ['a7', 'darkPawn'], ['b7', 'darkPawn'], ['c7', 'darkPawn'], ['d7', 'darkPawn'],
    ['e7', 'darkPawn'], ['f7', 'darkPawn'], ['g7', 'darkPawn'], ['h7', 'darkPawn'],
    ['a2', 'lightPawn'], ['b2', 'lightPawn'], ['c2', 'lightPawn'], ['d2', 'lightPawn'],
    ['e2', 'lightPawn'], ['f2', 'lightPawn'], ['g2', 'lightPawn'], ['h2', 'lightPawn'],
    ['a1', 'lightRook'], ['b1', 'lightKnight'], ['c1', 'lightBishop'], ['d1', 'lightQueen'],
    ['e1', 'lightking'], ['f1', 'lightBishop'], ['g1', 'lightKnight'], ['h1', 'lightRook']
]);

// initializes chess board
for (let row = 0; row < boardSize; row++) {
    for (let col = 0; col < boardSize; col++) {
        let square = document.createElement('div');
        square.id = String.fromCharCode('a'.charCodeAt(0) + col) + (boardSize - row);
        square.classList.add('chess-square');
        square.addEventListener("dragover", function(e){
            e.preventDefault();
        });

        if(chessPieces.has(square.id)){
            let piece = document.createElement('img');
            piece.setAttribute('draggable', 'true');
            piece.id = chessPieces.get(square.id);
            piece.classList.add('chess-piece');
            piece.src = "chessPieces/" + piece.id + '.png';
            square.appendChild(piece);
        }
        chessboard.appendChild(square);
    }
}

let pieces = document.getElementsByClassName('chess-piece');
let boxes = document.getElementsByClassName('chess-square');
let selectedPiece = null;

for (let piece of pieces) {
    piece.addEventListener("dragstart", function(e) {
        selectedPiece = e.target;
    });
}

for (let box of boxes) {
    box.addEventListener("dragover", function(e) {
        e.preventDefault();
    });

    box.addEventListener("drop", function(e) {
        if (selectedPiece) {
            e.target.appendChild(selectedPiece);
            selectedPiece = null;
        }
    });
}

// Alternate color pattern for chess plots //!UNFINISHED
let x = 0;
let chessPieceBackground = document.getElementsByClassName('chess-square');
for(let i = 0; i < chessPieceBackground.length; i++){
    if(x % 2 == 0){
        chessPieceBackground[i].setAttribute('style','background-color: #00ff00');
    } else {
        chessPieceBackground[i].setAttribute('style','background-color: #dd0000');
    }
    x += 1;
    if(x == 8 || x == 17 || x == 26 || x == 35 || x == 44 || x == 53 || x == 62){
    x += 1;
    }
}

function movePiece(){
    // TODO
}