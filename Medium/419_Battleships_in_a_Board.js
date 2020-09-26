var countBattleships = function (board) {
  // loop through all the board => mark as checked ('')
  // if found battleship, continue marking connected X, count 1

  const rows = board.length;
  const cols = board[0].length;

  let count = 0;

  // use this flag to mark continuous checking of X
  const walk = (row, col, isPrevX) => {
    // if checked already
    switch (board[row][col]) {
      case "":
        return;
      case ".":
        board[row][col] = "";
        return;
      case "X":
        if (!isPrevX) count += 1;

        if (row + 1 < rows && board[row + 1][col] === "X") {
          walk(row + 1, col, true);
        }

        if (col + 1 < cols && board[row][col + 1] === "X") {
          walk(row, col + 1, true);
        }

        board[row][col] = "";
    }
  };

  // loop through all the board
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      walk(row, col, false);
    }
  }

  return count;
};

// Testcase:
// [["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]]
