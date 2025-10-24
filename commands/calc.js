import calculator from "../models/calculator.js";

const calc = {
  command: "calc",
  describe: "performs simple calculations",
  builder: {
    sum: {
      alias: "s",
      type: "array",
      describe: "sum a list of numbers",
      demandOption: true,
    },
  },
  handler: (argv) => {
    const sum = calculator.sum(...argv.sum);

    console.log(`Result: ${sum}`);
  },
};

export default calc;
