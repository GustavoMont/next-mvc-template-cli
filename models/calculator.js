function sum(...numbers) {
  numbers = numbers.map(Number);
  if (numbers.some((num) => isNaN(num))) {
    console.error("❌ Digite apenas números");
    return;
  }

  return numbers.reduce((sum, currentNumber) => sum + currentNumber, 0);
}

const calculator = {
  sum,
};

export default calculator;
