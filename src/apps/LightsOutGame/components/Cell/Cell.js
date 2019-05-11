import React from 'react'
import classNames from 'classnames/bind'
import styles from './Cell.module.scss'

/** A single cell on the board.
 *
 * This has no state --- just two props:
 *
 * - flipCellsAroundMe: a function rec'd from the board which flips this
 *      cell and the cells around of it
 *
 * - isLit: boolean, is this cell lit?
 *
 * This handles clicks --- by calling flipCellsAroundMe
 *
 **/

const CX = classNames.bind(styles)

const Cell = ({ flipCellsAroundMe, isLit }) => {
  const handleClick = evt => {
    flipCellsAroundMe()
  }

  const className = CX({
    cell: true,
    [`cell-lit`]: isLit
  })

  return <td className={className} onClick={handleClick} />
}

export default Cell
