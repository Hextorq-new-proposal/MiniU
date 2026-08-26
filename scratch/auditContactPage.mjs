import { chromium } from "playwright";
import path from "path";

const artifactDir = "C:/Users/vishn/.gemini/antigravity-cli/brain/c35160d1-bf60-4f52-bac6-a0cc5664ba31";

async function run() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  // Set sessionStorage to avoid splash when testing contact page
  await page.addInitScript(() => {
    sessionStorage.setItem("miniu_intro_played", "true");
  });

  await page.goto("http://localhost:5173/contact");
  await page.waitForTimeout(1000);

  // 1. Capture Header & Contact Banner & Top 3 Cards
  await page.screenshot({ path: path.join(artifactDir, "contact_page_top.png") });

  // 2. Scroll to Form & Map Section
  await page.evaluate(() => window.scrollBy(0, 500));
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(artifactDir, "contact_page_form_map.png") });

  // 3. Test Form Validation & Submission
  await page.fill('input[name="name"]', "Suresh Kumar");
  await page.fill('input[name="email"]', "suresh@example.com");
  await page.fill('input[name="mobile"]', "9876543210");
  await page.fill('input[name="location"]', "Coimbatore");
  await page.fill('textarea[name="message"]', "I want to inquire about the upcoming SAP FICO batch.");
  await page.click('button[type="submit"]');

  await page.waitForTimeout(1200);
  await page.screenshot({ path: path.join(artifactDir, "contact_page_submitted_state.png") });

  // 4. Test Mobile Viewport
  await page.setViewportSize({ width: 390, height: 844 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(artifactDir, "contact_page_mobile.png") });

  console.log("Contact page screenshots captured successfully!");
  await browser.close();
}

run().catch(console.error);
