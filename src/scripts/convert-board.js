import fs from "fs";

function convertTsvToBoard(inputFile, outputFile) {
  const data = fs.readFileSync(inputFile, "utf8");
  const lines = data.trim().split("\n");

  let output = "";

  lines.forEach((line) => {
    const fields = line.split("\t");

    // fields[0] = Name
    // fields[1] = Position
    // fields[2] = Major
    // fields[3] = Grade
    // fields[4] = Hometown
    // fields[5] = Hobbies
    // fields[6] = Fun Fact

    if (fields.length >= 7) {
      output += `${fields[0].trim()}\n`;
      output += `${fields[1].trim()}\n`;
      output += `${fields[2].trim()}\n`;
      output += `${fields[3].trim()}\n`;
      output += `${fields[4].trim()}\n`;
      output += `${fields[5].trim()}\n`;
      output += `${fields[6].trim()}\n\n`;
    }
  });

  output += "end";

  fs.writeFileSync(outputFile, output, "utf8");
  console.log(`Converted ${inputFile} to ${outputFile}`);
}

// Usage: node convert-board.js input.csv output.csv
const inputFile = process.argv[2] || "../data/raw_board.csv";
const outputFile = process.argv[3] || "../data/board.csv";

convertTsvToBoard(inputFile, outputFile);
