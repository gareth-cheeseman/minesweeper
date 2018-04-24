class Game {
  constructor (numberOfRows, numberOfColumns, numberOfBombs){
    this._board = new Board(numberOfRows, numberOfRows, numberOfBombs);

  }
  playMove (rowIndex, columnIndex){
    this._board.flipTile(rowIndex, columnIndex);
    if(this._board[rowIndex][columnIndex] === 'B'){
      console.log('Game over!');
      this._board.print();
    }else if(this._board.hasSafeTiles){
      //continue playing
    }else{
      //game won
    }
  }
}
















class Board {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._numberOfBombs = numberOfBombs;
    this._numberOfTiles = numberOfRows * numberOfColumns;
    this._playerBoard = Board.generatePlayerBoard(
      numberOfRows,
      numberOfColumns
    );
    this._bombBoard = Board.generateBoardBoard(
      numberOfRows,
      numberOfColumns,
      numberOfBombs
    );
  }
  get playerBoard() {
    return this._playerBoard;
  }

  flipTile(rowIndex, columnIndex) {
    if (this._playerBoard[rowIndex][columnIndex] !== " ") {
      console.log("This tile has already been flipped!");
      return;
    } else if (this._bombBoard[rowIndex][columnIndex] === "B") {
      this._playerBoard[rowIndex][columnIndex] = "B";
    } else {
      this._playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs(
        rowIndex,
        columnIndex
      );
    }
    this._numberOfTiles--;
  }

  getNumberOfNeighborBombs(rowIndex, columnIndex) {
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
    const numberOfRows = this._bombBoard.length;
    const numberOfColumns = this._bombBoard[0].length;
    let numberOfBombs = 0;

    neighborOffSets.forEach(offset => {
      const neighborRowIndex = rowIndex + offset[0];
      const neighborColumnIndex = columnIndex + offset[1];
      if (
        neighborRowIndex >= 0 &&
        neighborRowIndex < numberOfRows &&
        neighborColumnIndex >= 0 &&
        neighborColumnIndex < numberOfColumns
      ) {
        if (this._bombBoard[neighborRowIndex][neighborColumnIndex] === "B") {
          numberOfBombs++;
        }
      }
    });
    return numberOfBombs;
  }

  hasSafeTiles() {
    return this._numberOfTiles !== this._numberOfBombs;
  }

  print() {
    console.log(this._playerBoardboard.map(row => row.join(" | ")).join("\n"));
  }

  static generatePlayerBoard(numberOfRows, numberOfColumns) {
    let board = [];
    for (let rowNumber = 0; rowNumber < numberOfRows; rowNumber++) {
      let row = [];
      for (
        let columnNumber = 0;
        columnNumber < numberOfColumns;
        columnNumber++
      ) {
        row.push(" ");
      }
      board.push(row);
    }
    return board;
  }

  generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
    let board = [];
    for (let rowNumber = 0; rowNumber < numberOfRows; rowNumber++) {
      let row = [];
      for (
        let columnNumber = 0;
        columnNumber < numberOfColumns;
        columnNumber++
      ) {
        row.push(null);
      }
      board.push(row);
    }
    let numberOfBombsPlaced = 0;
    while (numberOfBombsPlaced < numberOfBombs) {
      let randomRowIndex = Math.floor(Math.random() * numberOfRows);
      let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
      if (board[randomRowIndex][randomColumnIndex] !== "B") {
        board[randomRowIndex][randomColumnIndex] = "B";
        numberOfBombsPlaced++;
      }
    }
    return board;
  }
}

let playerBoard = generatePlayerBoard(3, 4);
let bombBoard = generateBombBoard(3, 4, 5);

console.log("Player board: ");
printBoard(playerBoard);

console.log("Bomb board: ");
printBoard(bombBoard);

flipTile(playerBoard, bombBoard, 0, 0);

console.log("Updated player board:");
printBoard(playerBoard);
