const puppeteer = require("puppeteer");
(async () => {
  const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto("http://localhost:8123/index.html", { waitUntil: "networkidle0" });
  await new Promise(r => setTimeout(r, 300));
  console.log(await page.evaluate(() => {
    const n = document.querySelector(".desktop-nav");
    return JSON.stringify({ inlineMax: n.style.maxHeight, scrollH: n.scrollHeight, clientH: n.clientHeight });
  }));
  await browser.close();
})();
