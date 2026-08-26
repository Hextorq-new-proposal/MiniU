import fs from "fs";
import path from "path";

const filePath = "D:/confidentails projects/new-proposal/miniu-react/src/data/coursesData.js";
let content = fs.readFileSync(filePath, "utf-8");

// Replace all relative image paths with root slash
content = content.replace(/"assets\/images\//g, '"/assets/images/');

// Fix directory mismatches
content = content.replace(/\/assets\/images\/miniu\/dev\//g, '/assets/images/miniu/development/');
content = content.replace(/\/assets\/images\/miniu\/design\//g, '/assets/images/miniu/designing/');
content = content.replace(/\/assets\/images\/miniu\/marketing\//g, '/assets/images/miniu/business/');
content = content.replace(/ui\.jpg/g, 'uiux.jpg');

fs.writeFileSync(filePath, content, "utf-8");
console.log("coursesData.js image paths fixed successfully!");
