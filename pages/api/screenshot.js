

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const playwright = require("playwright-aws-lambda");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});
const devices = [
  { name: "iphone6", width: 375, height: 667, mobile: true },
  { name: "iphone11", width: 414, height: 896, mobile: true },
  { name: "googlepixel", width: 411, height: 731, mobile: true },
  { name: "iphonexsmax", width: 414, height: 896, mobile: true },
  { name: "macbookpro15", width: 1440, height: 900, mobile: false },
];


module.exports = async (req, res) => {
  let browser = null
  const { query } = req
  try {
      if (query.url && isValidUrl(query.url)) {
          browser = await playwright.launchChromium({ headless: true })
          const context = await browser.newContext()
          const page = await context.newPage()
          await page.goto(query.url)
          const screenshot = await page.screenshot({ type: "png" })
          res.setHeader("Content-Type", "image/png")
          res.status(200).send(screenshot)
      } else throw "Please provide a valid url"
  } catch (error) {
      res.status(500).send({
          status: "Failed",
          error,
      })
  } finally {
      if (browser !== null) {
          await browser.close()
      }
  }
}
function isValidUrl(string) {
  try {
      new URL(string)
  } catch (_) {
      return false
  }
  return true
}