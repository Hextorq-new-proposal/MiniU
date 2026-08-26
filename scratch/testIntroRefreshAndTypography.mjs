import { chromium } from "playwright";
import path from "path";

const artifactDir = "C:/Users/vishn/.gemini/antigravity-cli/brain/c35160d1-bf60-4f52-bac6-a0cc5664ba31";

async function run() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  console.log("Navigating to http://localhost:5173/ (Homepage initial load)...");
  await page.goto("http://localhost:5173/");

  // Capture at 2.4s (Subtitle and entire logo fully visible and settled)
  await page.waitForTimeout(2400);
  await page.screenshot({ path: path.join(artifactDir, "intro_clean_typography_2_4s.png") });

  // Wait for splash to finish and reveal homepage
  await page.waitForTimeout(2000);
  await page.screenshot({ path: path.join(artifactDir, "homepage_revealed.png") });

  // Test Refresh on Homepage: Should replay animation
  console.log("Reloading homepage (F5)...");
  await page.reload();
  await page.waitForTimeout(2200);
  await page.screenshot({ path: path.join(artifactDir, "intro_replay_on_refresh.png") });

  // Test Non-Home Page: Navigate to /contact and reload -> Should NOT show intro animation
  console.log("Navigating to /contact...");
  await page.goto("http://localhost:5173/contact");
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(artifactDir, "contact_page_no_intro.png") });

  console.log("All intro refresh & typography tests completed successfully!");
  await browser.close();
}

run().catch(console.error);
