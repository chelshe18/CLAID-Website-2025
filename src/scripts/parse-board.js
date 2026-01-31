import { execSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function run(cmd) {
  console.log(`\n> ${cmd}\n`);
  execSync(cmd, { stdio: "inherit", cwd: __dirname });
}

try {
  run("node convert-board.js");
  run("node make-board.js");
  run("node separate-board.js");
  console.log("All steps finished successfully.");
} catch (err) {
  console.error("Error running scripts:", err.message);
  process.exit(1);
}
