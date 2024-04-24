const puppeteer = require('puppeteer-extra')

// Add stealth plugin and use defaults (all tricks to hide puppeteer usage)
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

console.time();

const delay = 3040;

const galeryUrl = ["https://deca.art/thunda/gallery2","https://deca.art/onawa/Gallery2"];

async function visit(page) {
    for (let i = 0; i < galeryUrl.length; i++) {
        await page.goto(galeryUrl[i]);
        await page.waitForTimeout(delay);
    }
}

async function getViews(i) {
    const browser = await puppeteer.launch({ executablePath: "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe", args: ['--no-sandbox'], headless: false, slowMo: 15 });
    const page = await browser.newPage();
    await page.setDefaultTimeout(10000000);
    await page.setRequestInterception(true);
    page.on('request', (request) => {
        // Block All Images
        if (request.url().endsWith('.png') || request.url().endsWith('.jpg')) {
            request.abort();
            console.log("Image request aborted");
        } else if (request.resourceType() === 'video') {
            request.abort();
            console.log("Video request aborted");
        }
        else {
            request.continue()
        }
    });
    await visit(page);
    console.timeLog();
    await page.waitForTimeout(1020);
    await browser.close();
        i++;
    if (i < 52) {
        console.log(i);
        getViews(i);
    }
    else console.log("All views have been distributed");
}

function main() {
    let i = 0;
    getViews(i);
}

main();
