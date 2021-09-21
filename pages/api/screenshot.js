

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
          let device = query.device ? devices.find(x => x.name === query.device) : null;
          await page.setViewportSize({height: (device ? device.height : parseInt(query.height)), width: (device ? device.width : parseInt(query.width))});
          await page.goto(query.url, {waitUntil: "networkidle0"})
          const screenshot = await page.screenshot({  
          type: query.filetype ? req.query.filetype : 'png',
          fullPage: query.fullpage === 'true' ? true : false })
          if (query.upload === 'true') {
          const URI = `data:image/${query.filetype ? query.filetype : 'png'};base64,` + screenshot.toString('base64');
            await cloudinary.uploader.upload(
              
              URI,
              {
                overwrite: true,
              },
              function (error, result) {  
                console.log(result);   
                res.status(200).redirect(result.secure_url);
              }
            );
          } else {
            res.setHeader("Content-Type", "image/png")
            res.status(200).send(screenshot)
          }
      } else throw "Please provide a valid url"
  } catch (error) {
      res.status(500).send({
          status: "Failed",
          error: error.message,
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
    console.log('invalid url')
      return false
  }
  return true
}