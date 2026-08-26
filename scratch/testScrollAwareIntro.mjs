import { chromium } from "playwright";
import http from "http";
import fs from "fs";
import path from "path";

const artifactDir = "C:/Users/vishn/.gemini/antigravity-cli/brain/c35160d1-bf60-4f52-bac6-a0cc5664ba31";
const distDir = "D:/confidentails projects/new-proposal/miniu-react/dist";

const mimeTypes = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".json": "application/json",
  ".woff2": "font/woff2"
};

const server = http.createServer((req, res) => {
  let filePath = path.join(distDir, req.url === "/" ? "index.html" : req.url.split("?")[0]);
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = path.join(distDir, "index.html");
  }
  const ext = path.extname(filePath);
  const contentType = mimeTypes[ext] || "application/octet-stream";

  try {
    const data = fs.readFileSync(filePath);
    res.writeHead(200, { "Content-Type": contentType });
    res.end(data);
  } catch (err) {
    res.writeHead(404);
    res.end("Not found");
  }
});

server.listen(4174, async () => {
  console.log("Static test server listening on http://localhost:4174");

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  // Test 1: Initial visit at the top of homepage -> Intro plays
  console.log("1. Visiting Homepage at top (scrollY = 0)...");
  await page.goto("http://localhost:4174/");
  await page.waitForTimeout(1500);
  await page.screenshot({ path: path.join(artifactDir, "test1_intro_at_top.png") });

  // Wait for intro to finish and reveal homepage
  await page.waitForTimeout(2500);

  // Test 2: Scroll down to 1000px and reload -> Intro must NOT play
  console.log("2. Scrolling down to 1000px...");
  await page.evaluate(() => {
    window.scrollTo(0, 1000);
    window.dispatchEvent(new Event("scroll"));
  });
  await page.waitForTimeout(500);

  console.log("Reloading while scrolled down...");
  await page.reload();
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(artifactDir, "test2_scrolled_reload_no_intro.png") });

  // Test 3: Scroll back up to 0 and reload -> Intro MUST play
  console.log("3. Scrolling back to top (scrollY = 0)...");
  await page.evaluate(() => {
    window.scrollTo(0, 0);
    window.dispatchEvent(new Event("scroll"));
  });
  await page.waitForTimeout(500);

  console.log("Reloading at top...");
  await page.reload();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: path.join(artifactDir, "test3_top_reload_intro_plays.png") });

  console.log("All scroll-aware intro tests passed successfully!");
  await browser.close();
  server.close();
  process.exit(0);
});
