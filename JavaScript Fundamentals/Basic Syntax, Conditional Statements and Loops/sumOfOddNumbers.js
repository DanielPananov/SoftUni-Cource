function sumOfOddNumbers(n) {
  let counter = 0;
  let sum = 0;

  for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
      console.log(i);
      counter += 1;
      sum += i;
    }

    if (counter >= n) {
      break;
    }
  }
  console.log(`Sum: ${sum}`);
}

sumOfOddNumbers(5)
sumOfOddNumbers(3)
