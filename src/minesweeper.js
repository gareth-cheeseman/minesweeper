const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [];
  for (let rowNumber = 0; rowNumber < numberOfRows; rowNumber++) {
    let row = [];
    for (let columnNumber = 0; columnNumber < numberOfColumns; columnNumber++) {
      row.push(" ");
    }
    board.push(row);
  }
  return board;
};

const printBoard = board => {
  console.log("Current board:");
  board.forEach(row => {
    console.log(row.join(" | "));
  });
};

printBoard(generatePlayerBoard(3, 3));
