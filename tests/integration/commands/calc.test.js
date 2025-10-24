import orchestrator from "tests/orchestrator.js";

describe("Command Calc", () => {
  test("input a list of number", async () => {
    const { stdout } = await orchestrator.executeCommand("calc -s 1 2 3 4");

    expect(stdout).toBe("Result: 10\n");
  });
});
