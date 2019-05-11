import React, { useState } from 'react'
import { randomWord } from 'utils/wordsData'
import styles from './Hangman.module.scss'
import img0 from '../../assets/images/0.jpg'
import img1 from '../../assets/images/1.jpg'
import img2 from '../../assets/images/2.jpg'
import img3 from '../../assets/images/3.jpg'
import img4 from '../../assets/images/4.jpg'
import img5 from '../../assets/images/5.jpg'
import img6 from '../../assets/images/6.jpg'

const Hangman = ({ maxWrong, images }) => {
  const [numWrong, setNumWrong] = useState(0)
  const [guessed, setGuessed] = useState(new Set())
  const [answer, setAnswer] = useState(randomWord())

  const reset = () => {
    setNumWrong(0)
    setGuessed(new Set())
    setAnswer(randomWord())
  }

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  const guessedWord = () => {
    return answer.split('').map(letter => (guessed.has(letter) ? letter : '_'))
  }

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  const handleGuess = evt => {
    const letter = evt.target.value
    setGuessed(prevGuessed => prevGuessed.add(letter))
    setNumWrong(
      prevNumWrong => prevNumWrong + (answer.includes(letter) ? 0 : 1)
    )
  }

  /** generateButtons: return array of letter buttons to render */
  const generateButtons = () => {
    return 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter => (
      <button
        key={letter}
        value={letter}
        onClick={handleGuess}
        disabled={guessed.has(letter)}
      >
        {letter}
      </button>
    ))
  }

  const gameOver = numWrong >= maxWrong
  const isWinner = guessedWord().join('') === answer
  const altText = `${numWrong}/${maxWrong} guesses`
  let gameState = generateButtons()
  if (isWinner) gameState = 'You Win!'
  if (gameOver) gameState = 'You Lose!'

  /** render: render game */
  return (
    <div className={styles['hangman']}>
      <h1>Hangman</h1>
      <img src={images[numWrong]} alt={altText} />
      <p>Guessed Wrong: {numWrong}</p>
      <p className={styles['hangman-word']}>
        {!gameOver ? guessedWord() : answer}
      </p>
      <p className={styles['hangman-btns']}>{gameState}</p>
      <button id="reset" onClick={reset}>
        Restart?
      </button>
    </div>
  )
}

Hangman.defaultProps = {
  maxWrong: 6,
  images: [img0, img1, img2, img3, img4, img5, img6]
}

export default Hangman
