import fs from "fs";

const svgContent = fs.readFileSync("D:/confidentails projects/new-proposal/miniu-react/public/assets/logo/miniu logo.svg", "utf-8");
fs.copyFileSync("D:/confidentails projects/new-proposal/miniu-react/public/assets/logo/miniu logo.svg", "D:/confidentails projects/new-proposal/miniu-react/public/assets/logo/miniu-logo.svg");

console.log("SVG Length:", svgContent.length);

// Extract paths and their fills / transforms
const pathRegex = /<path([^>]+)\/>/g;
let match;
let count = 0;
while ((match = pathRegex.exec(svgContent)) !== null) {
  count++;
  const fill = match[1].match(/fill="([^"]+)"/)?.[1] || "none";
  const transform = match[1].match(/transform="([^"]+)"/)?.[1] || "none";
  console.log(`Path ${count}: fill=${fill}, transform=${transform}`);
}
