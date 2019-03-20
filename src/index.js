function getSimpleNumbersFromBase(base, numbers = []){
  let currentNumbers = numbers;
  let simpleNumber = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41,
  43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,
  101, 103, 107, 109, 113, 127, 131, 137, 139, 149,
  151, 157, 163, 167, 173, 179, 181, 191, 193, 197,
  199, 211, 223, 227, 229, 233, 239, 241, 251];
  
  for(let i = 0; i < simpleNumber.length; i++){
  if(base % simpleNumber[i] === 0){
  base /= simpleNumber[i];
  currentNumbers.push(simpleNumber[i]);
  break;
  }
  }
  if(base > 1){
  getSimpleNumbersFromBase(base, currentNumbers);
  }
  return currentNumbers;
  }
module.exports = function getZerosCount(number, base) {
  let simpleFactors = getSimpleNumbersFromBase(base);
  let biggestNumber = Math.max(...simpleFactors);
  let countBiggestNumber = simpleFactors.filter(item => item === biggestNumber).length;
  let countNumberTwo = simpleFactors.filter(item => item === 2).length;
  let countZeros = 0;
  let n = 1;
    while (true) {
      if (countNumberTwo >= biggestNumber * countBiggestNumber) {
        biggestNumber = 2;
        countBiggestNumber = countNumberTwo;
      }
      let temp = Math.pow(biggestNumber, n);
      if (temp < number) {
        countZeros += parseInt(number/temp);
        n++;
      }
      else {
        break;
      }
   }
  if (countBiggestNumber > 1) {
    countZeros = parseInt(countZeros / countBiggestNumber);
  }
  return(countZeros);
}

