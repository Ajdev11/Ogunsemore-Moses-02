// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================
//challenge-1
function sumOfNumbers(){
   let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   let sumOfNumbers = 0;
      for(i=0; i<arrayOfNumbers.length; i++){
        sumOfNumbers += arrayOfNumbers[i]
      }
   return sumOfNumbers
 }
assignment.sumOfNumbers = sumOfNumbers
//challenge-2
function countEvenNumbers(){
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const countEvenNumbers = arr.filter(number => {
  return number % 2 === 0;
});
  return countEvenNumbers.length
  }
assignment.countEvenNumbers = countEvenNumbers;
/**
 * Challenge - 3
 * 
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 * If you did Challenge - 3, remove the comment in the line just after this function
 * 
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 * 
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
 */
function celsiusToFahrenheit(arrayOfNumbers) {
    return arrayOfNumbers;
}
// assignment.celsiusToFahrenheit = celsiusToFahrenheit;


// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

