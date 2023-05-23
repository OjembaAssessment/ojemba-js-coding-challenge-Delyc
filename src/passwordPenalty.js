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
  if (password.length < 10) {
    return 0;
  }
  
  const regex = /([a-zA-Z0-9])(\1{2,}|\1)/g;
  const matches = password.match(regex);
  let points = 0;
  
  matches?.forEach((match) => {
    points += (match.length > 2) ? 2 : 1;
  });
  
  return points;



  // * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  //
}
