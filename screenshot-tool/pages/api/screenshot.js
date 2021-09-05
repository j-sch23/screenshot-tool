// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const puppeteer = require("puppeteer");
const JSZip = require("jszip");
const zip = new JSZip();

export default async function screenshotAPI(req, res) {
  const browser = await puppeteer.launch({
    defaultViewport: { width: 2560, height: 1600 },
  });
  const page = await browser.newPage();
  await page.goto(req.query.url, { waitUntil: "networkidle0" });
  const image = await page.screenshot();
  await browser.close();
  zip.folder("screenshots").file("screenshot", image);
  zip.file("README.md", "This is a sample readme file");
  zip.generateAsync({ type: "base64" }).then((base64) => {
    let zip = Buffer.from(base64, "base64");
    res.end(zip);
  });
}
