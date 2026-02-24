import { exec } from "child_process";
import members from "../data/board.json" assert { type: "json" };
import fs from "fs";

let execMembers = [];
let eventsMembers = [];
let performanceMembers = [];
let tutoringMembers = [];

const branchPrefixes = ["events", "performance", "tutoring"];

function stripBranch(position) {
  if (!position) return position;
  return position.replace(
    new RegExp(`^(${branchPrefixes.join("|")})\\s+`, "i"),
    "",
  );
}

members.forEach((member) => {
  // Convert position to lowercase for case-insensitive comparison
  const positionLower = member.position.toLowerCase();

  // Strip branch prefix from the displayed position (e.g. "Events Operations Director" -> "Operations Director")
  const strippedPosition = stripBranch(member.position);
  const memberCopy = positionLower.includes("chair")
    ? member
    : { ...member, position: strippedPosition };

  // Check which category the member belongs to and push them to the respective array
  if (
    positionLower.includes("chair") ||
    positionLower.includes("president") ||
    positionLower.includes("treasurer")
  ) {
    execMembers.push(member);
  }
  if (positionLower.includes("events")) {
    eventsMembers.push(memberCopy);
  } else if (positionLower.includes("performance")) {
    performanceMembers.push(memberCopy);
  } else if (positionLower.includes("tutoring")) {
    tutoringMembers.push(memberCopy);
  }
});

function writeJSON(filename, data) {
  fs.writeFileSync(filename, JSON.stringify(data, null, 2));
}

writeJSON("../data/exec.json", execMembers);
writeJSON("../data/events.json", eventsMembers);
writeJSON("../data/performance.json", performanceMembers);
writeJSON("../data/tutoring.json", tutoringMembers);

console.log("Yay");
