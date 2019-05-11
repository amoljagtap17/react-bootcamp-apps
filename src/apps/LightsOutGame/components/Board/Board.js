import React, { useState } from 'react'
import Cell from '../Cell/Cell'
import styles from './Board.module.scss'

import { createBoard } from './createBoard'

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

const Board = ({ numRows, numCols, chanceLightStartsOn }) => {
  const [state, setState] = useState({
    hasWon: false,
    board: createBoard(numRows, numCols, chanceLightStartsOn)
  })

  const { hasWon, board } = state

  /** handle changing a cell: update board & determine if winner */

  const flipCellsAround = coord => {
    let newBoard = board
    let [y, x] = coord.split('-').map(Number)

    function flipCell(y, x) {
      // if this coord is actually on board, flip it

      if (x >= 0 && x < numCols && y >= 0 && y < numRows) {
        newBoard[y][x] = !newBoard[y][x]
      }
    }

    // TODO: flip this cell and the cells around it
    flipCell(y, x) //Flip initial cell
    flipCell(y, x - 1) //flip left
    flipCell(y, x + 1) //flip right
    flipCell(y - 1, x) //flip below
    flipCell(y + 1, x) //flip above

    // win when every cell is turned off
    // TODO: determine is the game has been won
    let hasWon = newBoard.every(row => row.every(cell => !cell))

    setState({
      hasWon,
      board: newBoard
    })
  }

  /** Render game board or winning message. */
  const makeTable = () => {
    let tblBoard = []

    for (let y = 0; y < numRows; y++) {
      let row = []
      for (let x = 0; x < numCols; x++) {
        let coord = `${y}-${x}`
        row.push(
          <Cell
            key={coord}
            isLit={board[y][x]}
            flipCellsAroundMe={() => flipCellsAround(coord)}
          />
        )
      }

      tblBoard.push(<tr key={y}>{row}</tr>)
    }

    return (
      <table className={styles['board']}>
        <tbody>{tblBoard}</tbody>
      </table>
    )
  }

  return (
    <div>
      {hasWon ? (
        <div className={styles['winner']}>
          <span className={styles['neon-orange']}>YOU</span>
          <span className={styles['neon-blue']}>WIN!</span>
        </div>
      ) : (
          <div>
            <div className={styles['board-title']}>
              <div className={styles['neon-orange']}>Lights</div>
              <div className={styles['neon-blue']}>Out</div>
            </div>
            {makeTable()}
          </div>
        )}
    </div>
  )
}

Board.defaultProps = {
  numRows: 5,
  numCols: 5,
  chanceLightStartsOn: 0.25
}

export default Board
