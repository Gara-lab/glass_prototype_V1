const puppeteer = require("puppeteer");
(async () => {
  const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto("http://localhost:8123/index.html", { waitUntil: "networkidle0" });
  console.log(await page.evaluate(() => {
    const n = document.querySelector(".desktop-nav");
    const h = document.getElementById("site-header");
    return JSON.stringify({
      navExists: !!n,
      headerDisplay: h ? getComputedStyle(h).display : null,
      navScrollH: n ? n.scrollHeight : null,
      navClientH: n ? n.clientHeight : null,
      navOverflowY: n ? getComputedStyle(n).overflowY : null,
      bodyHeight: document.body.scrollHeight,
      winHeight: window.innerHeight
    }, null, 1);
  }));
  await browser.close();
})();
