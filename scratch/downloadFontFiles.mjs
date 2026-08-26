import https from "https";
import fs from "fs";
import path from "path";

const fontsDir = "D:/confidentails projects/new-proposal/miniu-react/public/assets/fonts";
if (!fs.existsSync(fontsDir)) {
  fs.mkdirSync(fontsDir, { recursive: true });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on("finish", () => {
        file.close();
        console.log("Downloaded:", dest);
        resolve();
      });
    }).on("error", (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function main() {
  await downloadFile("https://fonts.cdnfonts.com/s/146973/droid-light.woff", path.join(fontsDir, "droid-light.woff"));
  await downloadFile("https://fonts.cdnfonts.com/s/146973/droid-heavy.woff", path.join(fontsDir, "droid-heavy.woff"));
  console.log("All Droid Logo font files downloaded successfully!");
}

main();
