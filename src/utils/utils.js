const getRandomValueFromArray = inputArray => {
  return inputArray[
    Math.floor(
      Math.random() * inputArray.length
    )
  ]
}

export {
  getRandomValueFromArray
}
