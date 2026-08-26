import { chromium } from "playwright";
import path from "path";

const artifactDir = "C:/Users/vishn/.gemini/antigravity-cli/brain/c35160d1-bf60-4f52-bac6-a0cc5664ba31";

async function run() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  await page.goto("http://localhost:5173/", { waitUntil: "networkidle" });
  
  // Set session storage so intro splash doesn't trigger on subsequent loads
  await page.evaluate(() => sessionStorage.setItem("miniu_intro_played", "true"));
  
  // Wait 4.5s for intro to finish
  await page.waitForTimeout(4500);

  // Scroll down smoothly through all sections to trigger any scroll triggers
  console.log("Scrolling through page...");
  const totalHeight = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y <= totalHeight; y += 400) {
    await page.evaluate((pos) => window.scrollTo(0, pos), y);
    await page.waitForTimeout(100);
  }

  // Scroll back to top
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);

  // Capture full page screenshot after smooth scroll
  await page.screenshot({ path: path.join(artifactDir, "home_full_scrolled.png"), fullPage: true });
  console.log("Saved home_full_scrolled.png!");

  await browser.close();
}

run().catch(console.error);
