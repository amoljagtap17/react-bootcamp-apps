import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Dice.module.scss'

const CX = classNames.bind(styles)

const Dice = ({ face, rolling }) => {

  const className = CX({
    dice: true,
    [`dice-${face}`]: true,
    shaking: rolling
  })

  return (
    <i className={className} />
  )
}

Dice.propTypes = {
  face: PropTypes.string.isRequired,
  rolling: PropTypes.bool.isRequired
}

export default Dice
