import fs from "fs";

const svg = fs.readFileSync("public/assets/logo/miniu-logo.svg", "utf8");
const paths = svg.match(/<path[^>]+>/g) || [];

const logoMarkIndices = [1, 2, 8, 9, 20];
const wordmarkIndices = [4, 5, 6, 7, 13, 14, 57, 58];
const badgeIndices = [3, 28, 29, 30, 34, 35, 37, 38, 39, 40, 41, 43, 44, 45, 46, 47, 48, 49, 50, 52, 53, 54, 55, 56];

const allIndices = [...logoMarkIndices, ...wordmarkIndices, ...badgeIndices];
const validPaths = allIndices.map(i => paths[i - 1]).filter(Boolean);

const newSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1412 560" width="100%" height="100%">
  <g id="miniu-logo-mark">
${validPaths.join("\n")}
  </g>
  <text x="50%" y="505" text-anchor="middle" fill="#0f172a" font-size="96" font-weight="400" font-style="italic" font-family="'Outfit', 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" letter-spacing="0.04em">Small steps, big dreams</text>
</svg>`;

fs.writeFileSync("public/assets/logo/miniu-logo.svg", newSvg);
console.log("Clean static SVG logo generated successfully!");
