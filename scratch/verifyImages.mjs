import fs from "fs";
import path from "path";

const filePath = "D:/confidentails projects/new-proposal/miniu-react/src/data/coursesData.js";
const content = fs.readFileSync(filePath, "utf-8");

const regex = /"((\/assets\/images\/[^"]+))"/g;
let match;
let missing = 0;
let total = 0;

while ((match = regex.exec(content)) !== null) {
  total++;
  const imgPath = match[1];
  const fullPath = path.join("D:/confidentails projects/new-proposal/miniu-react/public", imgPath);
  if (!fs.existsSync(fullPath)) {
    console.error("MISSING:", imgPath);
    missing++;
  } else {
    console.log("OK:", imgPath);
  }
}

console.log(`Total: ${total}, Missing: ${missing}`);
