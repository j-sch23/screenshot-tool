const puppeteer = require("puppeteer");

export default async function screenshotAPI(req, res) {
  const browser = await puppeteer.launch({
    defaultViewport: { width: 960, height: 600},
  });
  const page = await browser.newPage();
  await page.goto(req.query.url, { waitUntil: "networkidle0" });
  const image = await page.screenshot();
  await browser.close();
  res.send(image)
}