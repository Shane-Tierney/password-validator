const validatePassword = (password) => {
  let length = lengthCheck(password)
  let lower = lowerCaseCheck(password)
  let upper = upperCaseCheck(password)
  let numb = numberCheck(password)
  let character = characterCheck(password)

  if (length && lower && upper && numb && character) {
    return true
  } else return false
}

const lengthCheck = (password) => {
    if (password.length >= 8) {
        return true
    } else return false
}

const lowerCaseCheck = (password) => {
    for (let i = 0; i < password.length; i++) {
      const letter = password[i]
      
      if (letter.toUpperCase() !== letter) {
          return true
      }
      
      return false

    }
}

const upperCaseCheck = (password) => {
    for (let i = 0; i < password.length; i++) {
        const letter = password[i]
        
        if (letter.toUpperCase() === letter) {
            return true
        }

        return false
        
      }
}

const numberCheck = (password) => {

}

const characterCheck = (password) => {

}

module.exports = validatePassword
