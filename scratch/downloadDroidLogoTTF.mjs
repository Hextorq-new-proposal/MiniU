import https from "https";
import fs from "fs";
import path from "path";

const fontsDir = "D:/confidentails projects/new-proposal/miniu-react/public/assets/fonts";
if (!fs.existsSync(fontsDir)) {
  fs.mkdirSync(fontsDir, { recursive: true });
}

const dest = path.join(fontsDir, "DroidLogo-Regular.ttf");
const file = fs.createWriteStream(dest);

const options = {
  headers: {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Referer": "https://fontsfree.net/droid-logo-font-download.html"
  }
};

https.get("https://fontsfree.net/wp-content/uploads/2024/01/DroidLogo-Regular.ttf", options, (response) => {
  if (response.statusCode === 302 || response.statusCode === 301) {
    https.get(response.headers.location, options, (res) => {
      res.pipe(file);
      file.on("finish", () => {
        file.close();
        console.log("Downloaded via redirect to:", dest, "Size:", fs.statSync(dest).size);
      });
    });
  } else {
    response.pipe(file);
    file.on("finish", () => {
      file.close();
      console.log("Downloaded directly to:", dest, "Size:", fs.statSync(dest).size);
    });
  }
}).on("error", (err) => {
  console.error("Error downloading font:", err.message);
});
