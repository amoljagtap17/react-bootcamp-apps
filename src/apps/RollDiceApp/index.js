import React from 'react'
import Dice from 'apps/RollDiceApp/components/Dice/Dice'

const RollDiceApp = () => (
  <div>
    <Dice face="two" rolling={true} />
    <Dice face="four" rolling={true} />
  </div>
)

export default RollDiceApp
