const lengthCheck = (password) => {
  if (password.length >= 8) {
    return true
  } else return false
}

const lowerCaseCheck = (password) => {
  let value = false

  for (let i = 0; i < password.length; i++) {
    const letter = password[i]

    if (letter.toLowerCase() === letter) {
      value = true
    }
  }

  return value
}

const upperCaseCheck = (password) => {
  let value = false

  for (let i = 0; i < password.length; i++) {
    const letter = password[i]

    if (letter.toUpperCase() === letter) {
      value = true
    }
  }

  return value
}

const numberCheck = (password) => {
  let value = false

  for (let i = 0; i < password.length; i++) {
    const number = password[i]


    if (Number(number)) {
      value = true
    }
  }

  return value
}

const characterCheck = (password) => {
  const specialCharacters = '!@#$%&*()\'+,-./:;<=>?[]^_`{|}'
  let value = false

  for (let i = 0; i < password.length; i++) {
    const special = password[i]

    if (specialCharacters.includes(special)) {
      value = true
    }
  }

  return value
}

const validatePassword = (password) => {
  let length = lengthCheck(password)
  let lower = lowerCaseCheck(password)
  let upper = upperCaseCheck(password)
  let numb = numberCheck(password)
  let character = characterCheck(password)

  console.log(length, lower, upper, numb, character)

  if (length && lower && upper && numb && character) {
    return true
  } else return false
}


module.exports = validatePassword
