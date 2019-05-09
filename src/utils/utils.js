const getRandomValueFromArray = inputArray => {
  const randomIndex = Math.floor(
    Math.random() * inputArray.length
  )

  return inputArray[randomIndex]
}

export {
  getRandomValueFromArray
}
