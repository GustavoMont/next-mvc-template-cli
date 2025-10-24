import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import calc from "./commands/calc.js";

yargs(hideBin(process.argv))
  .command(
    calc.command,
    calc.describe,
    (builder) => builder.option("sum", calc.builder.sum),
    calc.handler,
  )
  .parse();
