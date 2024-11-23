const calculateSumAndAverage = (numbers) => {
  if (numbers.length === 0) {
    return { sum: 0, average: 0 };
  }
  const sum = numbers.reduce(
    (accumulator, current) => accumulator + current,
    0
  );
  const average = sum / numbers.length;
  return { sum, average };
};

const numbers = [200, 50, 120, 40, 4580];
const result = calculateSumAndAverage(numbers);

console.log(`Sum: ${result.sum}`);
console.log(`Average: ${result.average}`);
