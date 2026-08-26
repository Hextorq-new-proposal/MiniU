import fs from "fs";

const svg = fs.readFileSync("public/assets/logo/miniu-logo.svg", "utf8");
const paths = svg.match(/<path[^>]+>/g) || [];
console.log("Total paths:", paths.length);
paths.forEach((p, idx) => {
  const fill = (p.match(/fill="([^"]+)"/) || [])[1];
  const tr = (p.match(/transform="([^"]+)"/) || [])[1];
  console.log(`Path ${idx + 1}: fill=${fill}, tr=${tr}`);
});
