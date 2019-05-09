import React, { useState } from 'react'
import { getRandomValueFromArray } from 'utils/utils'
import Coin from '../Coin/Coin'
import styles from './CoinContainer.module.scss'

const CoinContainer = ({ coins }) => {
  const [currentCoin, setCurrentCoin] = useState(null)
  const [numFlips, setNumFlips] = useState(0)
  const [numHeads, setNumHeads] = useState(0)
  const [numTails, setNumTails] = useState(0)

  const handleClick = e => flipCoin()

  const flipCoin = () => {
    const newCoin = getRandomValueFromArray(coins)

    setCurrentCoin(newCoin)
    setNumFlips(numFlips + 1)

    if (newCoin.side === 'heads') {
      setNumHeads(numHeads + 1)
    } else {
      setNumTails(numTails + 1)
    }
  }

  return (
    <div className={styles['coin-container']}>
      <h2>Let's Flip A Coin!</h2>
      {currentCoin && <Coin currentCoin={currentCoin} />}
      <button onClick={handleClick}>Flip Me!</button>
      <p>Out of {numFlips} flips, there have been {numHeads} heads and {numTails} tails.</p>
    </div>
  )
}

CoinContainer.defaultProps = {
  coins: [
    {
      side: 'heads',
      imgSrc: 'https://tinyurl.com/react-coin-heads-jpg'
    },
    {
      side: 'tails',
      imgSrc: 'https://tinyurl.com/react-coin-tails-jpg'
    }
  ]
}

export default CoinContainer
