// TYPES
type RomanNumerals = 'I' | 'V' | 'X' | 'L' | 'C' | 'D' | 'M';
type RomanNumeralExtension = 'IV' | 'IX' | 'XL' | 'XC' | 'CD' | 'CM';
type RomanNumeralMap = {
  [numeral in RomanNumerals | RomanNumeralExtension]: number;
};

/**
 * ======================================================================
 *
 *
 *              The idea behind my solution is the following:
 *
 *
 * => example input is 2318
 * => look at 2000, map to MM,
 * => look at  300, map to CCC,
 * => look at   10, map to X,
 * => look at    8, map to VIII.
 * => create ['M','M','C','C','C','X','V','I','I','I'] then return 'MMCCCXVIII'
 *
 *
 * ----------------------------------------------------------------------
 */

const romanNumeralMap: RomanNumeralMap = {
  I: 1,
  IV: 4,
  V: 5,
  IX: 9,
  X: 10,
  XL: 40,
  L: 50,
  XC: 90,
  C: 100,
  CD: 400,
  D: 500,
  CM: 900,
  M: 1000,
};

function numberToRomanNumeral(num: number): string | null {
  if (typeof num !== 'number') return null; // Runtime check shape of given input (not really needed for the dg frontend task, but good practice to keep it.)

  const romanNumeralArray: Array<keyof RomanNumeralMap> = []; // store numerals ['M','M','C','C','C','X','V','I','I','I']

  while (num !== 0) {
    const found = Object.entries(romanNumeralMap)
      .reverse()
      .filter(([mapLiteral, mapNumber]) => mapNumber <= num)[0]; // when we have 318 for example, the romanMapNumber must be smaller so 100 or less

    const amountRepeatingLiterals = Math.floor(num / found[1]); // Math.floor(318 / 100) = 3. Amount of times we need to store the char in array.
    num -= amountRepeatingLiterals * found[1]; // 318 - 300, continue loop with 18
    for (let i = 0; i < amountRepeatingLiterals; i++) {
      romanNumeralArray.push(found[0] as keyof RomanNumeralMap); // store 3 units of 'C' in array
    }
  }

  return romanNumeralArray.join(''); // return numerals as string 'MMCCCXVIII'
}

export default numberToRomanNumeral;

/**
 * function returns expected output.
 */
