import https from "https";
import fs from "fs";

https.get("https://fonts.cdnfonts.com/css/android-logo", (res) => {
  let data = "";
  res.on("data", (chunk) => data += chunk);
  res.on("end", () => {
    console.log("Full CSS:\n", data);
  });
});
