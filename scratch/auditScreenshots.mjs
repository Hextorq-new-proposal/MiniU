import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const artifactDir = "C:/Users/vishn/.gemini/antigravity-cli/brain/c35160d1-bf60-4f52-bac6-a0cc5664ba31";
const outDir = path.join(artifactDir, "playwright_audit");
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function runAudit() {
  console.log("Launching Chromium for comprehensive site visual audit...");
  const browser = await chromium.launch({ headless: true });
  
  // Test 1: Desktop Session (with Intro Splash)
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2
  });
  const page = await context.newPage();
  
  console.log("1. Visiting Homepage (Fresh Session)...");
  await page.goto("http://localhost:5173/", { waitUntil: "networkidle" });
  
  // Capture intro splash states
  await page.screenshot({ path: path.join(outDir, "01_intro_splash.png") });
  console.log("Saved: 01_intro_splash.png");
  
  // Wait for 4s intro animation to finish and hero to reveal
  await page.waitForTimeout(4500);
  
  // Full page desktop screenshot
  await page.screenshot({ path: path.join(outDir, "02_home_full_desktop.png"), fullPage: true });
  console.log("Saved: 02_home_full_desktop.png");

  // Section Screenshots
  const sections = [
    { name: "03_hero_desktop.png", selector: ".miniu-hero-section" },
    { name: "04_career_discovery.png", selector: "#career-discovery" },
    { name: "05_career_paths.png", selector: "main > section.miniu-bg-slate" },
    { name: "06_placement_stories.png", selector: "#placement-proof" },
    { name: "07_final_cta.png", selector: "main > section:has(.btn-miniu-primary)" },
    { name: "08_footer.png", selector: "footer" }
  ];

  for (const sec of sections) {
    try {
      const el = await page.$(sec.selector);
      if (el) {
        await el.screenshot({ path: path.join(outDir, sec.name) });
        console.log(`Saved: ${sec.name}`);
      }
    } catch (err) {
      console.log(`Could not capture section ${sec.name}:`, err.message);
    }
  }

  // Test 2: Test 30-Second Matchmaker Interaction
  console.log("2. Testing 30-Second Matchmaker interaction...");
  try {
    // Click "Data Analytics"
    const dataBtn = await page.getByRole("button", { name: "Data Analytics" });
    if (dataBtn) {
      await dataBtn.click();
      await page.waitForTimeout(300);
      await page.screenshot({ path: path.join(outDir, "09_matchmaker_data_selected.png") });
      console.log("Saved: 09_matchmaker_data_selected.png");
    }
  } catch (err) {
    console.log("Matchmaker test error:", err.message);
  }

  // Test 3: Test Modal Opening
  console.log("3. Testing Counselling Modal...");
  try {
    const modalBtn = await page.getByRole("button", { name: "Book Free Counselling" }).first();
    if (modalBtn) {
      await modalBtn.click();
      await page.waitForTimeout(500);
      await page.screenshot({ path: path.join(outDir, "10_counselling_modal.png") });
      console.log("Saved: 10_counselling_modal.png");
      // Close modal if open
      const closeBtn = await page.$(".modal-header button, .modal button:has-text('✕')");
      if (closeBtn) await closeBtn.click();
    }
  } catch (err) {
    console.log("Modal test error:", err.message);
  }

  // Test 4: Mobile Viewport (iPhone 14 / 390x844)
  console.log("4. Testing Mobile Viewport (390x844)...");
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto("http://localhost:5173/", { waitUntil: "networkidle" });
  await mobilePage.waitForTimeout(4500);
  await mobilePage.screenshot({ path: path.join(outDir, "11_home_mobile_full.png"), fullPage: true });
  console.log("Saved: 11_home_mobile_full.png");

  // Test 5: Courses Page
  console.log("5. Testing Courses Page...");
  await page.goto("http://localhost:5173/courses", { waitUntil: "networkidle" });
  await page.screenshot({ path: path.join(outDir, "12_courses_page_desktop.png"), fullPage: true });
  console.log("Saved: 12_courses_page_desktop.png");

  // Test 6: Course Details Page
  console.log("6. Testing Course Details Page...");
  await page.goto("http://localhost:5173/courses/sap-fico", { waitUntil: "networkidle" });
  await page.screenshot({ path: path.join(outDir, "13_course_details_sap_fico.png"), fullPage: true });
  console.log("Saved: 13_course_details_sap_fico.png");

  // Test 7: Contact Page
  console.log("7. Testing Contact Page...");
  await page.goto("http://localhost:5173/contact", { waitUntil: "networkidle" });
  await page.screenshot({ path: path.join(outDir, "14_contact_page_desktop.png"), fullPage: true });
  console.log("Saved: 14_contact_page_desktop.png");

  await browser.close();
  console.log("Visual audit completed! All screenshots captured successfully.");
}

runAudit().catch(err => {
  console.error("Audit failed:", err);
  process.exit(1);
});
