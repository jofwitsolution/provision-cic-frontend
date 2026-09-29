// Usage (Chrome required): npm i -D playwright-core (or install in a temp folder), serve the site, then
//   BASE_URL=http://localhost:3000 node screenshots.mjs <output-dir>
import { chromium } from "playwright-core";
import fs from "node:fs";
import path from "node:path";

const BASE = process.env.BASE_URL ?? "http://localhost:4173";
const OUT = process.argv[2];
const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";

const routes = [
  ["home", "/"],
  ["about", "/about"],
  ["support", "/support"],
  ["events", "/events"],
  ["event-christmas-2025", "/events/christmas-celebration-2025"],
  ["event-amber-warning", "/events/amber-weather-warning-west-midlands-january-2026"],
  ["event-hostel-opening", "/events/provision-hostel-opening-coventry-march-2026"],
  ["referrals", "/referrals"],
  ["accommodation", "/accommodation"],
  ["contact", "/contact"],
  ["faq", "/faq"],
  ["terms-and-conditions", "/terms-and-conditions"],
  ["privacy-policy", "/privacy-policy"],
];

const viewports = {
  desktop: { width: 1440, height: 900 },
  mobile: { width: 390, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 2 },
};

// Scroll the whole page so whileInView / lazy content renders before capture.
async function settle(page) {
  await page.evaluate(async () => {
    const step = window.innerHeight / 2;
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 150));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(1500);
}

const browser = await chromium.launch({ executablePath: CHROME });
for (const [vpName, vp] of Object.entries(viewports)) {
  const dir = path.join(OUT, vpName);
  fs.mkdirSync(dir, { recursive: true });
  const { width, height, ...rest } = vp;
  const context = await browser.newContext({ viewport: { width, height }, ...rest });
  const page = await context.newPage();

  for (const [name, route] of routes) {
    await page.goto(BASE + route, { waitUntil: "networkidle" });
    await settle(page);
    await page.screenshot({ path: path.join(dir, `${name}.png`), fullPage: true });
    console.log(`${vpName}/${name}`);
  }

  if (vpName === "mobile") {
    await page.goto(BASE + "/", { waitUntil: "networkidle" });
    await page.waitForTimeout(3000);
    await page.locator("button:has(svg.lucide-menu)").first().click();
    await page.waitForTimeout(2000);
    await page.screenshot({ path: path.join(dir, "nav-sheet-open.png") });
    console.log("mobile/nav-sheet-open");
  }
  await context.close();
}
await browser.close();
