/** create a board nrows high/ncols wide, each cell randomly lit or unlit */

const createBoard = (numRows, numCols, chanceLightStartsOn) => {
  let board = []
  // TODO: create array-of-arrays of true/false values
  for (let y = 0; y < numRows; y++) {
    let row = []
    for (let x = 0; x < numCols; x++) {
      row.push(Math.random() < chanceLightStartsOn)
    }

    board.push(row)
  }

  return board
}

export {
  createBoard
}
