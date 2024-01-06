/*
    0 = null
    1 = pawn
    2 = castle
    3 = knight
    4 = bishop
    5 = queen
    6 = king
*/

const board_size = 8;
let board = [
    [2, 3, 4, 5, 6, 4, 3, 2],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [2, 3, 4, 5, 6, 4, 3, 2]
];

function validateMove(piece, destination){
    switch(piece){
        case 0:
            break;
        case 1:
            break;
        case 2:
            break;
            
    }
}