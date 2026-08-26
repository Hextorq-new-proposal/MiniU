import https from "https";

const urls = [
  "https://fonts.cdnfonts.com/css/droid-logo",
  "https://fonts.cdnfonts.com/css/android-logo",
  "https://fonts.cdnfonts.com/css/android",
  "https://fonts.cdnfonts.com/css/norad"
];

for (const url of urls) {
  https.get(url, (res) => {
    let data = "";
    res.on("data", (chunk) => data += chunk);
    res.on("end", () => {
      console.log(`URL: ${url} -> Status: ${res.statusCode}`);
      if (res.statusCode === 200) {
        console.log("Snippet:", data.slice(0, 300));
      }
    });
  }).on("error", (err) => {
    console.error(url, err.message);
  });
}
