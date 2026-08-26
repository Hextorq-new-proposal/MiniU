import { chromium } from "playwright";
import path from "path";

const artifactDir = "C:/Users/vishn/.gemini/antigravity-cli/brain/c35160d1-bf60-4f52-bac6-a0cc5664ba31";

async function run() {
  const browser = await chromium.launch({ headless: true });
  // fresh session without sessionStorage so intro runs
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  await page.goto("http://localhost:5173/");

  // Capture at 0.5s, 1.2s, 2.2s, 3.2s
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(artifactDir, "intro_frame_0_5s.png") });

  await page.waitForTimeout(700); // 1.2s
  await page.screenshot({ path: path.join(artifactDir, "intro_frame_1_2s.png") });

  await page.waitForTimeout(1000); // 2.2s
  await page.screenshot({ path: path.join(artifactDir, "intro_frame_2_2s.png") });

  await page.waitForTimeout(1000); // 3.2s
  await page.screenshot({ path: path.join(artifactDir, "intro_frame_3_2s.png") });

  console.log("Intro frames captured!");
  await browser.close();
}

run().catch(console.error);
