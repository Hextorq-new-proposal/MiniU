import fs from "fs";

const svgRaw = fs.readFileSync("D:/confidentails projects/new-proposal/miniu-react/public/assets/logo/miniu logo.svg", "utf-8");
console.log("Original SVG viewBox / width / height:");
const svgTag = svgRaw.match(/<svg[^>]+>/)?.[0];
console.log(svgTag);

// Check all transforms and their bbox/y coordinates
const pathRegex = /<path([^>]+)\/>/g;
let match;
let count = 0;
while ((match = pathRegex.exec(svgRaw)) !== null) {
  count++;
  const fill = match[1].match(/fill="([^"]+)"/)?.[1];
  const transform = match[1].match(/transform="([^"]+)"/)?.[1];
  console.log(`Path ${count}: fill=${fill}, transform=${transform}`);
}
