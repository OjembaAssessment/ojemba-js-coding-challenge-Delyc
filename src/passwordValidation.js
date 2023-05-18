export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 */


export default function isValidPassword(password = "") {
  password = String(password);

  // Check if password length is not equal to 10, return false
  if (password.length !== 10) return false;

  // Check if password contains only alphanumeric characters, return false
  if (!/^[a-zA-Z0-9]+$/.test(password)) return false;

  // Check if password contains any non-word character or is in the forbidden passwords list, return false
  if (/[^\w]/.test(password) || forbiddenPasswords.includes(password)) return false;

  // Check if password contains at least one lowercase letter, one uppercase letter, and one digit, return false
  if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) return false;

  // Check if password contains a sequence of directly ascending or descending numbers, return false
  if (/(012|123|234|345|456|567|678|789|876|765|654|543|432|321|210)/.test(password)) return false;

  // Check if password has less than 4 different digits/characters, return false
  if (/^(?:(\w)\1{3}|(\W)\2{3})[^0-9]*$/.test(password)) return false;

  const setOfPassword = new Set([...password]);
  if (setOfPassword.size < 4) return false;
  return true;
}
