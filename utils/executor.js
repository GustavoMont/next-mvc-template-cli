import { exec } from "node:child_process";
import { promisify } from "node:util";

const execAsync = promisify(exec);

function execute(args) {
  return execAsync(args);
}

const executor = {
  execute,
};

export default executor;
