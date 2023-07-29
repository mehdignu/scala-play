/**
 * 1. Runtime check shape of given input (not really needed for the dg frontend task, but good practice to keep it.)
 * 2. Check if ISBN input is in correct shape
 * 3. Do the first 12 digit multiplication and calculate sum of the products
 * 4. Compare check digit to last digit of ISBN input
 */

export type ISBN = string | number; // depending on input

function isbnIsValid(isbn: ISBN): boolean {
  // 1.
  if (typeof isbn === 'number') {
    isbn = isbn.toString();
  }

  // 2.
  if (isbn.length !== 13) return false; // ONLY for ISBN with 13 letters

  const first12Digits = isbn.substring(0, 12);
  const lastDigit = Number(isbn.substring(12, 13));

  // 3.
  let sumOfProducts = 0;
  for (let digit = 0; digit < first12Digits.length; digit++) {
    const multiplier = (digit + 1) % 2 === 0 ? 3 : 1;
    const thisProduct = Number(first12Digits[digit]) * multiplier;

    sumOfProducts += thisProduct;
  }
  const remainder = sumOfProducts % 10;
  const checkDigit = remainder === 0 ? 0 : 10 - remainder;

  // 4.
  return lastDigit === checkDigit ? true : false;
}

export default isbnIsValid;

/**
 * function returns expected output.
 */
