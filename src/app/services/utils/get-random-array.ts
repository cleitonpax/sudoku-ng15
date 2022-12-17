export function getRandomArray() {
  let numbers = [];

  let min, max, length, randomNumber, isDuplicated;

  min = 1;
  max = 9;
  length = 9;

  for (let number = 0; number < length; number++) {
    do {
      randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      isDuplicated = numbers.includes(randomNumber);

      if (!isDuplicated) {
        numbers.push(randomNumber);
      }
    } while (isDuplicated);
  }

  return numbers;
}