const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 420 });
  const errors = [];
  page.on("pageerror", (e) => errors.push(String(e)));
  await page.goto("http://localhost:8123/index.html", { waitUntil: "networkidle0" });

  const results = [];
  const check = (name, ok) => results.push((ok ? "PASS " : "FAIL ") + name);

  const navBox = await page.evaluate(() => {
    const n = document.querySelector(".desktop-nav");
    const r = n.getBoundingClientRect();
    return { x: r.x + r.width / 2, y: r.y + r.height / 2, scrollable: n.scrollHeight - n.clientHeight };
  });
  const pagePoint = { x: 760, y: 400 };

  check("sidebar is scrollable", navBox.scrollable > 50);

  const state = () => page.evaluate(() => ({
    nav: document.querySelector(".desktop-nav").scrollTop,
    win: window.scrollY
  }));

  // scenario A: wheel over sidebar scrolls sidebar only
  let s = await state();
  await page.mouse.move(navBox.x, navBox.y);
  await page.mouse.wheel({ deltaY: 120 });
  await new Promise(r => setTimeout(r, 150));
  let a = await state();
  check("A: sidebar scrolls on wheel over it", a.nav > s.nav + 50);
  check("A: page does not move", Math.abs(a.win - s.win) < 2);

  // scenario B: move mouse to page WITHOUT wheel -> page must not have moved from the sidebar gesture
  await page.mouse.move(pagePoint.x, pagePoint.y);
  await new Promise(r => setTimeout(r, 400));
  let b = await state();
  check("B: no phantom page scroll after switching hover", Math.abs(b.win - a.win) < 2);

  // scenario C: wheel over page while owner still sidebar -> page blocked until next gesture
  s = await state();
  await page.mouse.wheel({ deltaY: 200 });
  await new Promise(r => setTimeout(r, 150));
  let c = await state();
  check("C: first page wheel absorbed (one gesture one target)", c.win === s.win && c.nav === s.nav);

  // scenario D: second wheel over page scrolls the page, sidebar untouched
  await page.mouse.wheel({ deltaY: 300 });
  await new Promise(r => setTimeout(r, 400));
  let d = await state();
  check("D: page scrolls on continued wheel over it", d.win > s.win + 100);
  check("D: sidebar untouched", d.nav === c.nav);

  // scenario E: move back over sidebar and wheel -> sidebar must scroll (not page)
  s = await state();
  await page.mouse.move(navBox.x, navBox.y);
  await page.mouse.wheel({ deltaY: 120 });
  await new Promise(r => setTimeout(r, 150));
  let e = await state();
  check("E: sidebar scrolls when hovered again", e.nav > s.nav + 50);
  check("E: page did not steal the scroll", Math.abs(e.win - s.win) < 2);

  // scenario F: edge release - scroll sidebar to bottom then keep wheeling down -> page may take over
  await page.evaluate(() => { document.querySelector(".desktop-nav").scrollTop = 9999; });
  s = await state();
  await page.mouse.wheel({ deltaY: 120 });
  await new Promise(r => setTimeout(r, 150));
  await page.mouse.wheel({ deltaY: 120 });
  await new Promise(r => setTimeout(r, 150));
  let f = await state();
  check("F: at sidebar bottom, further wheel releases to page", f.win > s.win + 50);

  // scenario G: wheel over page area never touches sidebar
  s = await state();
  await page.mouse.move(pagePoint.x, pagePoint.y);
  await page.mouse.wheel({ deltaY: -200 });
  await new Promise(r => setTimeout(r, 150));
  await page.mouse.wheel({ deltaY: -300 });
  await new Promise(r => setTimeout(r, 300));
  let g = await state();
  check("G: page wheel never moves sidebar", g.nav === s.nav);

  check("no page errors", errors.length === 0);

  console.log(results.join("\n"));
  if (errors.length) console.log("ERRORS:", errors.join(" | "));
  await browser.close();
  process.exit(results.some(r => r.startsWith("FAIL")) ? 1 : 0);
})();
