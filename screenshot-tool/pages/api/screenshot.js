// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const puppeteer = require("puppeteer");
const JSZip = require("jszip");
const zip = new JSZip();
const dateFormat = require("dateformat");
const now = new Date();

export default async function screenshotAPI(req, res) {
  const browser = await puppeteer.launch({
    defaultViewport: {
      width: req.query.width ? parseInt(req.query.width) : 1280,
      height: req.query.height ? parseInt(req.query.height) : 720,
    },
  });
  const page = await browser.newPage();
  await page.goto(`https://${req.query.url}`, { waitUntil: "networkidle0" });
  const image = await page.screenshot();
  await browser.close();
  if (req.query.zip) {
    res.setHeader("Content-Type", "application/zip");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${dateFormat(now, "isoDateTime")}.zip`
    );
    zip.folder("screenshots").file("screenshot.png", image);
    zip.file("README.md", "This is a sample readme file");
    zip.generateAsync({ type: "base64" }).then((base64) => {
      let zip = Buffer.from(base64, "base64");
      res.end(zip);
    });
  } else {
    res.setHeader("Content-Type", "image/png");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${dateFormat(now, "isoDateTime")}.png`
    );
    res.status(200).send(image);
  }
}
