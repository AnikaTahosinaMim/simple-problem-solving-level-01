const evenNumber = (numbers) => {
  let even = [];
  let evenCount = 0;
  for (const number of numbers) {
    if (number % 2 === 0) {
      evenCount++;
      even.push(number);
    }
  }
  return { even, evenCount };
};
console.log(evenNumber([6, 5, 20, 79]));

const EvenNumbers = (num) => num.filter((n) => n % 2 === 0);
// console.log(EvenNumbers([11, 12, 24, 56, 0, 90, 30]));


