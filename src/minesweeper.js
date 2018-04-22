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