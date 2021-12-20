const puppeteer = require('puppeteer')
const https = require('https')
const fs = require('fs')
const path = require('path')

const run = async () => {
    const tikTokCreativeCenterUrl = 'https://ads.tiktok.com/business/creativecenter/music/pad/en?from=100'

    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.setExtraHTTPHeaders({
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36',
        'upgrade-insecure-requests': '1',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-US,en;q=0.9,en;q=0.8'
    })
    await page.goto(tikTokCreativeCenterUrl, {
        waitUntil: 'load'
    })

    const trackSelector = '.singleItem--18zsI'
    const tracks = await page.$$(trackSelector)
    const randomTrack = Math.floor(Math.random() * tracks.length)
    const targetTrack = await tracks[randomTrack].$('.imgWrap--1Vwyr')

    await targetTrack.click()
    await page.waitForSelector('audio')

    const audioSelector = 'audio'
    const audioSrc = await page.$$eval(
        audioSelector,
        ([audio]) => audio.src
    )

    https.get(audioSrc, response => {
        const stream = fs.createWriteStream(
            path.resolve(__dirname, './src/assets/music.mp3')
        )
        response.pipe(stream)

        stream.on('finish', () => stream.close())
    })

    await browser.close()
}

run()
