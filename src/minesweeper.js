const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [];
  for (let rowNumber = 0; rowNumber < numberOfRows; rowNumber++) {
    let row = [];
    for (let columnNumber = 0; columnNumber < numberOfColumns; columnNumber++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = [];
  for (let rowNumber = 0; rowNumber < numberOfRows; rowNumber++) {
    let row = [];
    for (let columnNumber = 0; columnNumber < numberOfColumns; columnNumber++) {
      row.push(null);
    }
    board.push(row);
  }
  let numberOfBombsPlaced = 0;
  while (numberOfBombsPlaced < numberOfBombs) {
    let randomRowIndex = Math.floor(Math.random() * numberOfRows);
    let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    if (board[randomRowIndex][randomColumnIndex] !== 'B') {
      board[randomRowIndex][randomColumnIndex] = 'B';
      numberOfBombsPlaced++;
    }
  }
  return board;
};

const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {
  const neighborOffSets = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1]
  ];
  const numberOfRows = bombBoard.length;
  const numberOfColumns = bombBoard[0].length;
  const numberOfBombs = 0;

  neighborOffSets.forEach(offset => {
    const neighborRowIndex = rowIndex + offset[0];
    const neighborColumnIndex = columnIndex + offset[1];
    if (
      neighborRowIndex >= 0 &&
      neighborRowIndex < numberOfRows &&
      neighborColumnIndex >= 0 &&
      neighborColumnIndex < numberOfColumns
    ) {
      if (bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
        numberOfBombs++;
      }
    }
  });
};

const printBoard = board => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
};

let playerBoard = generatePlayerBoard(3, 4);
let bombBoard = generateBombBoard(3, 4, 5);

console.log('Player board: ');
printBoard(playerBoard);

console.log('Bomb board: ');
printBoard(bombBoard);
