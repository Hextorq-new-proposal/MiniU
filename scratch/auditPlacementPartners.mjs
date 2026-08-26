import { chromium } from "playwright";
import path from "path";

const artifactDir = "C:/Users/vishn/.gemini/antigravity-cli/brain/c35160d1-bf60-4f52-bac6-a0cc5664ba31";

async function run() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  await page.addInitScript(() => {
    sessionStorage.setItem("miniu_intro_played", "true");
  });

  await page.goto("http://localhost:5173/");
  await page.waitForTimeout(1000);

  // Scroll to Placement Partners section
  const partnersSection = page.locator("#clients");
  await partnersSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);

  await page.screenshot({ path: path.join(artifactDir, "audit_placement_partners.png") });

  console.log("Placement Partners section screenshot captured!");
  await browser.close();
}

run().catch(console.error);
