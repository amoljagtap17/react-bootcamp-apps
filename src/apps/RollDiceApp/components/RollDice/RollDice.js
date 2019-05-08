import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { getRandomValueFromArray } from 'utils/utils'
import Dice from 'apps/RollDiceApp/components/Dice/Dice'
import styles from 'apps/RollDiceApp/components/RollDice/RollDice.module.scss'

const RollDice = ({ sides }) => {
  const [dice1, setDice1] = useState('one')
  const [dice2, setDice2] = useState('one')
  const [rolling, setRolling] = useState(false)

  const rollDice = () => {
    const newDice1 = getRandomValueFromArray(sides)
    const newDice2 = getRandomValueFromArray(sides)

    setDice1(newDice1)
    setDice2(newDice2)
    setRolling(true)

    setTimeout(() => {
      setRolling(false)
    }, 1000)
  }

  return (
    <div className={styles['roll-dice']}>
      <div className={styles['roll-dice-container']}>
        <Dice face={dice1} rolling={rolling} />
        <Dice face={dice2} rolling={rolling} />
      </div>
      <button onClick={rollDice} disabled={rolling}>
        {rolling ? 'Rolling...' : 'Roll Dice!'}
      </button>
    </div>
  )
}

RollDice.defaultProps = {
  sides: ["one", "two", "three", "four", "five", "six"]
}

RollDice.propTypes = {
  sides: PropTypes.array
}

export default RollDice
