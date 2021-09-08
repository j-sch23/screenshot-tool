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
  if (req.query.multiple) {
    zip.folder("screenshots");
    for (const device of req.query.devices) {
      console.log(device)
      await page.setViewport({
        width: 1920,
        height: 1080,
      });
      const image = await page.screenshot();
      zip.file(`${device.name}.png`, image);
    };
    zip.file("README.md", "This is a sample readme file");
    zip.generateAsync({ type: "base64" }).then((base64) => {
      let zip = Buffer.from(base64, "base64");
      res.end(zip);
    });
    res.setHeader("Content-Type", "application/zip");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${dateFormat(now, "isoDateTime")}.zip`
    );
    
  } else {
    const image = await page.screenshot();
    res.setHeader("Content-Type", "image/png");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${dateFormat(now, "isoDateTime")}.png`
    );
    res.status(200).send(image);
  }
  await browser.close();
}
