/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */
export default function penaltyPoints(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (typeof password !== "string") password = String(password);

  // * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  // * * * INSERT YOUR CODE HERE * * * * * * * * * * * * * *



  if (Object.is(password, null) || !password) {
    return 0
  } else {
    const penArr = []
    const ascendingArr = []
    const splittedPass = password.split('')
    for (let i = 0; i < splittedPass.length; i++) {
      if (splittedPass[i] === splittedPass[i + 1]) {
        penArr.push(splittedPass[i], splittedPass[i + 1])
      }
      // if(splittedPass[i+1] === (Number(splittedPass[i]) + 1).toString()){
      //   return false
      // }
    
    }

      if (penArr.length == 0) {
        return 0
      } else if (penArr.length == 2) {
        return 1
      } else if (
        penArr.length >= 3
      ) {
        return 2
      }
    
  }




  // * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  //
}
