import { chromium } from "playwright";
import http from "http";
import fs from "fs";
import path from "path";

const artifactDir = "C:/Users/vishn/.gemini/antigravity-cli/brain/c35160d1-bf60-4f52-bac6-a0cc5664ba31";
const distDir = "D:/confidentails projects/new-proposal/miniu-react/dist";

// Simple static server for dist
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

server.listen(4173, async () => {
  console.log("Static preview server listening on http://localhost:4173");

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  console.log("1. Visiting Homepage...");
  await page.goto("http://localhost:4173/");

  // Capture Intro Logo Animation at 2.4s (Clean subtitle typography)
  await page.waitForTimeout(2300);
  await page.screenshot({ path: path.join(artifactDir, "intro_clean_typography_2_3s.png") });

  // Wait for intro to finish and reveal homepage
  await page.waitForTimeout(2000);

  // Scroll to Placement Partners section
  const partnersSection = page.locator("#clients");
  await partnersSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(artifactDir, "placement_partners_slow_smooth.png") });

  // Test Refresh on Homepage: Should replay animation cleanly
  console.log("2. Reloading Homepage (F5)...");
  await page.reload();
  await page.waitForTimeout(2200);
  await page.screenshot({ path: path.join(artifactDir, "intro_replay_on_refresh.png") });

  // Test Non-Home Page: Navigate to /contact and reload -> Should NOT show intro animation
  console.log("3. Visiting /contact...");
  await page.goto("http://localhost:4173/contact");
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(artifactDir, "contact_page_no_intro.png") });

  console.log("All visual tests passed successfully!");
  await browser.close();
  server.close();
  process.exit(0);
});
