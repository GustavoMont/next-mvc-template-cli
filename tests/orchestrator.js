import executor from "utils/executor.js";

function executeCommand(command) {
  return executor.execute(`next-mvc ${command}`);
}

const orchestrator = {
  executeCommand,
};

export default orchestrator;
