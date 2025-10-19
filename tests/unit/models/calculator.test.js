import calculator from "models/calculator.js";

describe("Calculator", () => {
  describe("sum", () => {
    test("Sum multiple numbers", () => {
      const result = calculator.sum(1, 2, 3);
      expect(result).toBe(6);
    });
  });
});
