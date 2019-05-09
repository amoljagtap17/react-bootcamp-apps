import React from 'react'
import styles from './Coin.module.scss'

const Coin = ({ currentCoin }) => (
  <div className={styles['coin']}>
    <img src={currentCoin.imgSrc} alt={currentCoin.side} />
  </div>
)

export default Coin
