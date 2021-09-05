const puppeteer = require('puppeteer');
const express = require('express')
const app = express()
const port = 5000


app.get('/screenshot', async (req, res) => {
  const browser = await puppeteer.launch({
    defaultViewport: {width: 2560, height: 1600}
  });
  const page = await browser.newPage();
  await page.goto(req.query.url, {waitUntil: 'networkidle0'});
  const image = await page.screenshot();
  await browser.close();
  res.set('Content-Type', 'image/png');
  res.send(image);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

