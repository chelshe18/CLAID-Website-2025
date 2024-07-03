const fs = require("fs");
const BoardMember = require("./BoardMember.js");

function parse(filePath) {
  const data = fs.readFileSync(filePath, "utf8");
  const lines = data.split("\n");
  const boardMembers = [];

  let index = 0;
  while (index < lines.length) {
    const line = lines[index].trim();
    //stop parse
    if (line == "end") {
      break;
    }
    //end of file
    if (line == "") {
      index++;
      continue;
    }
    const name = lines[index++].trim();
    const position = lines[index++].trim();
    const major = lines[index++].trim();
    const grade = lines[index++].trim();
    const hometown = lines[index++].trim();
    const whyClaid = lines[index++].trim();
    const hobbies = lines[index++].trim();
    const funFact = lines[index++].trim();
    const firstName = name.split(" ")[0];
    const imageUrl = `images/board/${firstName}.png`;
    const netid = name;

    const boardMember = new BoardMember();
    boardMember.populate({
      name,
      position,
      major,
      grade,
      hometown,
      whyClaid,
      hobbies,
      funFact,
      imageUrl,
      netid,
    });
    boardMembers.push(boardMember);

    index++;
  }
  return boardMembers;
}
const boardMembers = parse("board.csv");
const boardData = JSON.stringify(boardMembers, null, 2);
fs.writeFileSync("board.json", boardData, "utf8");
