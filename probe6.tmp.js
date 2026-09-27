const puppeteer = require("puppeteer");
(async () => {
  const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 420 });
  await page.goto("http://localhost:8123/index.html", { waitUntil: "networkidle0" });
  await new Promise(r => setTimeout(r, 700));
  console.log(await page.evaluate(() => {
    const h = document.getElementById("site-header");
    const n = h.querySelector(".desktop-nav");
    return JSON.stringify({
      headerH: h.getBoundingClientRect().height,
      inlineMax: n.style.maxHeight,
      navH: n.getBoundingClientRect().height,
      scrollH: n.scrollHeight,
      brandH: h.querySelector(".brand") ? h.querySelector(".brand").getBoundingClientRect().height : null,
      ctaH: !!h.querySelector(".header-cta"),
      hideH: !!h.querySelector(".sidebar-hide"),
      rowGap: getComputedStyle(h).rowGap,
      pad: getComputedStyle(h).paddingTop + "/" + getComputedStyle(h).paddingBottom
    });
  }));
  await browser.close();
})();
