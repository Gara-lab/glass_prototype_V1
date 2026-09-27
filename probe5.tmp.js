const puppeteer = require("puppeteer");
(async () => {
  const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 420 });
  await page.goto("http://localhost:8123/index.html", { waitUntil: "networkidle0" });
  await new Promise(r => setTimeout(r, 600));
  console.log(await page.evaluate(() => {
    const n = document.querySelector(".desktop-nav");
    const r = n.getBoundingClientRect();
    return JSON.stringify({ navRect: [r.x, r.y, r.width, r.height], scrollable: n.scrollHeight - n.clientHeight });
  }));
  const el = await page.evaluateHandle(() => document.querySelector(".desktop-nav"));
  await el.scrollIntoView();
  await page.mouse.wheel.call(page.mouse, { deltaY: 120 });
  await new Promise(r => setTimeout(r, 200));
  console.log(await page.evaluate(() => JSON.stringify({ nav: document.querySelector(".desktop-nav").scrollTop, win: window.scrollY })));
  await browser.close();
})();
