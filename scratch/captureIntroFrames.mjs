import { chromium } from "playwright";
import path from "path";

const artifactDir = "C:/Users/vishn/.gemini/antigravity-cli/brain/c35160d1-bf60-4f52-bac6-a0cc5664ba31";

async function run() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  await page.goto("http://localhost:5173/");

  // Capture at 0.5s, 1.2s, 1.9s, 2.5s, 3.2s
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(artifactDir, "intro_step_1_logomark.png") });

  await page.waitForTimeout(700); // 1.2s
  await page.screenshot({ path: path.join(artifactDir, "intro_step_2_wordmark.png") });

  await page.waitForTimeout(800); // 2.0s
  await page.screenshot({ path: path.join(artifactDir, "intro_step_3_badge_subtitle.png") });

  await page.waitForTimeout(800); // 2.8s
  await page.screenshot({ path: path.join(artifactDir, "intro_step_4_settle.png") });

  console.log("All intro sequence steps captured successfully!");
  await browser.close();
}

run().catch(console.error);
