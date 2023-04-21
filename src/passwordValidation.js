export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 */
export default function isValidPassword(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (typeof password !== "string") password = String(password);
  if (password.length !== 10) {
    return false;
  }

  const specialChars = /[@\/#\\!$%\^&\*()_\+={}\[\]\|:;"'<>,\.\?]/;
  if (specialChars.test(password)) return false

  if(forbiddenPasswords.includes(password)) return false

  const characterOnly = /^[a-zA-Z]+$/;
  if (characterOnly.test(password)) return false

  const numbersOnly = /^\d+$/;
  if (numbersOnly.test(password)) return false

  
  let hasLowercase = false;
  let hasUppercase = false;
  for (let i = 0; i < password.length; i++) {
    const charCode = password.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      hasUppercase = true;
    } else if (charCode >= 97 && charCode <= 122) {
      hasLowercase = true;
    }
    if (hasLowercase && hasUppercase) {
      break;
    }
  }
  if (!hasLowercase || !hasUppercase) {
    return false;
  }
  
  // * * * YOUR CODE GOES IN HERE ... * * *
  /*
   * if (password is not exactly 10 digits or characters...) {
   *   return ...;
   * }
   *
   * if (is not composed by digits and numbers) {
   *   return ...;
   * }
   */
  const setOfPassword = new Set([...password]);
  if (setOfPassword.size < 4) return false;
  return true;
}
