const printBoard = board => {
    console.log('Current board:');
    board.forEach(row => {
        console.log(row.join(' | '))
    });
}

const board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];

printBoard(board);

board[0][1] = '1';
board[2][2] = 'B';
printBoard(board);