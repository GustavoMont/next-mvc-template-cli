function sum(...numbers) {
  return numbers.reduce((total, currentNumber) => total + currentNumber, 0);
}

const calculator = {
  sum,
};

export default calculator;
