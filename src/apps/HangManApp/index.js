import React from 'react'
import HangMan from './components/HangMan/Hangman'
import styles from './index.module.scss'

const HangmanApp = () => (
  <div className={styles['app']}>
    <HangMan />
  </div>
)

export default HangmanApp
