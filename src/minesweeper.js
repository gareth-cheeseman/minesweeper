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
  while(numberOfBombsPlaced < numberOfBombs){
      let randomRowIndex = Math.floor(Math.random() * numberOfRows);
      let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
      board[randomRowIndex][randomColumnIndex] = 'B';
      numberOfBombsPlaced++;
      //can add bombs on top of bombs.
  }



  return board;
};

const printBoard = board => {
  console.log('Current board:');
  console.log(board.map(row => row.join(' | ')).join('\n'));
};

printBoard(generatePlayerBoard(3, 3));
