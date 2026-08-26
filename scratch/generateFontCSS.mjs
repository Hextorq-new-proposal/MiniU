import fs from "fs";
import path from "path";

const fontPath = "D:/confidentails projects/new-proposal/miniu-react/public/assets/fonts/DroidLogo-Regular.ttf";
const fontBuffer = fs.readFileSync(fontPath);
const base64Font = fontBuffer.toString("base64");

const cssContent = `/* Exact Droid Logo Font from FontMeme (fontmeme.com/fonts/droid-logo-font) */
@font-face {
  font-family: 'DroidLogoFont';
  src: url('data:font/truetype;charset=utf-8;base64,${base64Font}') format('truetype'),
       url('/assets/fonts/DroidLogo-Regular.ttf') format('truetype');
  font-weight: 100 900;
  font-style: normal;
  font-display: block;
}

.droid-logo-text {
  font-family: 'DroidLogoFont', 'Droid', sans-serif !important;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-transform: none;
}
`;

fs.writeFileSync("D:/confidentails projects/new-proposal/miniu-react/src/styles/droidLogoFont.css", cssContent, "utf-8");
console.log("src/styles/droidLogoFont.css generated with embedded font data URI!");
