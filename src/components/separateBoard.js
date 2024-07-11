import members from "./board.json" assert { type: "json" };
import fs from "fs";

let eventsMembers = [];
let financeMembers = [];
let performanceMembers = [];
let tutoringMembers = [];

members.forEach((member) => {
  // Convert position to lowercase for case-insensitive comparison
  const positionLower = member.position.toLowerCase();

  // Check which category the member belongs to and push them to the respective array
  if (positionLower.includes("events")) {
    eventsMembers.push(member);
  } else if (positionLower.includes("finance")) {
    financeMembers.push(member);
  } else if (positionLower.includes("performance")) {
    performanceMembers.push(member);
  } else if (positionLower.includes("tutoring")) {
    tutoringMembers.push(member);
  }
});

function writeJSON(filename, data) {
  fs.writeFileSync(filename, JSON.stringify(data, null, 2));
}

writeJSON("events.json", eventsMembers);
writeJSON("finance.json", financeMembers);
writeJSON("performance.json", performanceMembers);
writeJSON("tutoring.json", tutoringMembers);

console.log("Yay");
