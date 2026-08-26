import { chromium } from "playwright";
import path from "path";

const artifactDir = "C:/Users/vishn/.gemini/antigravity-cli/brain/c35160d1-bf60-4f52-bac6-a0cc5664ba31";

async function run() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  
  // Set sessionStorage before page loads
  await context.addInitScript(() => {
    sessionStorage.setItem("miniu_intro_played", "true");
  });

  const page = await context.newPage();
  await page.goto("http://localhost:5173/", { waitUntil: "networkidle" });
  await page.waitForTimeout(1000);

  // Find the CareerPreviewSection container
  const card = await page.$(".hero-mockup-card");
  if (card) {
    // Get parent section
    const section = await page.evaluateHandle((el) => el.closest("section"), card);
    if (section) {
      await section.asElement().scrollIntoViewIfNeeded();
      await page.waitForTimeout(400);
      await section.asElement().screenshot({ path: path.join(artifactDir, "career_preview_refined.png") });
      console.log("Saved section screenshot!");
    }
  }

  await browser.close();
}

run().catch(console.error);
