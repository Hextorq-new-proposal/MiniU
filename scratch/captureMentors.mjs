import { chromium } from "playwright";
import path from "path";

const artifactDir = "C:/Users/vishn/.gemini/antigravity-cli/brain/c35160d1-bf60-4f52-bac6-a0cc5664ba31";

async function run() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  
  await context.addInitScript(() => {
    sessionStorage.setItem("miniu_intro_played", "true");
  });

  const page = await context.newPage();
  await page.goto("http://localhost:5173/", { waitUntil: "networkidle" });
  await page.waitForTimeout(1000);

  // Find Mentors section
  const section = await page.$("section:has(h2:has-text('Meet Your Mentors'))");
  if (section) {
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(400);
    await section.screenshot({ path: path.join(artifactDir, "mentors_section_refined.png") });
    console.log("Saved mentors_section_refined.png!");
  }

  await browser.close();
}

run().catch(console.error);
