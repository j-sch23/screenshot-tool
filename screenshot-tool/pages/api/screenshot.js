// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const puppeteer = require("puppeteer");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "dxgbphyhg",
  api_key: "619665542547417",
  api_secret: "ubhUuIiHTtjZo9a3UpA_2CGzCG0",
});
let deviceIndex = null;
const devices = [
  { name: "iphone6", width: 375, height: 667, mobile: true },
  { name: "iphone11", width: 414, height: 896, mobile: true },
  { name: "googlepixel", width: 411, height: 731, mobile: true },
  { name: "iphonexsmax", width: 414, height: 896, mobile: true },
  { name: "macbookpro15", width: 1440, height: 900, mobile: false },
];


export default async function screenshotAPI(req, res) {
  const browser = await puppeteer.launch({
    defaultViewport: {
      width:  1280,
      height: 720,
    },
  });
  const page = await browser.newPage();
  req.query.enablejs
    ? await page.setJavaScriptEnabled({ enabled: req.query.enablejs })
    : null;
  deviceIndex = req.query.device ? devices.findIndex(x => x.name === req.query.device) : null;
  await page.setViewport({
      width: deviceIndex ? devices[deviceIndex].width : parseInt(req.query.width),
      height: deviceIndex ? devices[deviceIndex].height : parseInt(req.query.height), 
      isMobile: deviceIndex ? devices[deviceIndex].mobile : false
    })
    .then(async () => {
      await page.goto(`https://${req.query.url}`, {
        waitUntil: "networkidle0",
    })}
    )
    .then(async () => {
      const image = await page.screenshot({
        type: req.query.filetype ? req.query.filetype : null,
        encoding: req.query.discard === 'true' ? 'binary' : "base64",
        fullPage: req.query.fullpage === 'true' ? true : null
      });
      if (req.query.discard === 'true') {
        res.setHeader("Content-Type", `image/${req.query.filetype ? req.query.filetype : 'png'}`);
        res.setHeader("Content-Disposition", "inline;");
        res.status(200).send(image)
        throw new Error('discard')
      } else {
        return image;
      }
    })
    .then((result) => {
      const URI = `data:image/${req.query.filetype ? req.query.filetype : 'png'};base64,` + result;
      return URI;
    })
    .then(async (uri) => {
      await cloudinary.uploader.upload(
        uri,
        {
          overwrite: true,
        },
        function (error, result) {
          res.status(200).redirect(result.url);
        }
      );
    })
    .catch((e) => {
      let response = null;
      switch(e.message) {
        case 'Protocol error (Emulation.setDeviceMetricsOverride): Invalid parameters Failed to deserialize params.width - BINDINGS: int32 value expected at position 21':
          response = 'Invalid viewport dimensions';
          break;
        case 'Unknown options.type value: jpg':
          response = 'Invalid file type';
          break;
        case 'discard':
          break;
        default:
          response = e.message;
          break;
      }
      response !== null ? res.status(400).json({ error: response }) : null;
    });

  await browser.close();
}
