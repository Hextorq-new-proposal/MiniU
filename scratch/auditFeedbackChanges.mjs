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

  // 1. Header & Hero
  await page.screenshot({ path: path.join(artifactDir, "audit_1_header_hero.png"), clip: { x: 0, y: 0, width: 1440, height: 850 } });

  // 2. TrustStrip & CareerFinder
  const careerFinder = await page.$("#career-discovery");
  if (careerFinder) {
    await careerFinder.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await careerFinder.screenshot({ path: path.join(artifactDir, "audit_2_careerfinder.png") });
  }

  // 3. CareerPreviewSection & WhyMiniU
  const careerPreview = await page.$("section:has(h2:has-text('Interactive Career Path Explorer'))");
  if (careerPreview) {
    await careerPreview.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await careerPreview.screenshot({ path: path.join(artifactDir, "audit_3_career_preview.png") });
  }

  const whyMiniu = await page.$("section:has(h2:has-text('Why Learners Choose MiniU'))");
  if (whyMiniu) {
    await whyMiniu.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await whyMiniu.screenshot({ path: path.join(artifactDir, "audit_4_whyminiu.png") });
  }

  // 4. PlacementStories & HowItWorks
  const placements = await page.$("#placement-proof");
  if (placements) {
    await placements.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await placements.screenshot({ path: path.join(artifactDir, "audit_5_placements.png") });
  }

  const howItWorks = await page.$("section:has(h2:has-text('How MiniU Works'))");
  if (howItWorks) {
    await howItWorks.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await howItWorks.screenshot({ path: path.join(artifactDir, "audit_6_howitworks.png") });
  }

  // 5. StudentStories & FAQ & FinalCTA & Footer
  const studentStories = await page.$("section:has(h2:has-text('Student Stories'))");
  if (studentStories) {
    await studentStories.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await studentStories.screenshot({ path: path.join(artifactDir, "audit_7_student_stories.png") });
  }

  const faq = await page.$("section:has(h2:has-text('Frequently Asked Questions'))");
  if (faq) {
    await faq.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await faq.screenshot({ path: path.join(artifactDir, "audit_8_faq.png") });
  }

  const finalCta = await page.$("section:has(h2:has-text('Ready to choose your next career move?'))");
  if (finalCta) {
    await finalCta.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await finalCta.screenshot({ path: path.join(artifactDir, "audit_9_final_cta.png") });
  }

  const footer = await page.$("footer");
  if (footer) {
    await footer.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await footer.screenshot({ path: path.join(artifactDir, "audit_10_footer.png") });
  }

  console.log("All 10 audit screenshots captured successfully!");
  await browser.close();
}

run().catch(console.error);
