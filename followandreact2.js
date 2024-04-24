const puppeteer = require('puppeteer-extra');

// Add stealth plugin and use defaults (all tricks to hide puppeteer usage)
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

console.time();

const accounts = [];
/**/

console.log(accounts.length);

const delay = 3040;
const i = 0;

async function main() {

    const browser = await puppeteer.launch({
        executablePath: "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe", args: ['--no-sandbox', '--disable-extensions-except=C:\\Users\\domin\\AppData\\Local\\Google\\Chrome\\User Data\\Profile 1\\Extensions\\nkbihfbeogaeaoehlefnkodbefgpgknn\\10.15.1_0',
            '--load-extension=C:\\Users\\domin\\AppData\\Local\\Google\\Chrome\\User Data\\Profile 1\\Extensions\\nkbihfbeogaeaoehlefnkodbefgpgknn\\10.15.1_0', '--enable-remote-extensions'], headless: false
    });
    const page = await browser.newPage();
    await page.setDefaultTimeout(10000000);
    await page.setRequestInterception(true);

    page.on('request', (request) => {
        // Block All Images
        if (request.url().endsWith('.png') || request.url().endsWith('.jpg')) {
            request.abort();
        } else if (request.resourceType() === 'video') {
            request.abort();
        }
        else {
            request.continue()
        }
    });

    await page.goto('https://deca.art/app');
    await page.waitForTimeout(delay);
    await page.waitForXPath("/html/body/div/div[1]/main/div[1]/div[2]/div[1]/div[2]/div[2]/div/button");
    /*
    //login into twitter
    await page.goto("https://deca.art/settings");
    await page.waitForXPath("/html/body/div/div[1]/main/div/div[3]/div/button[1]");
    await page.click("button[class='inline-flex items-center font-medium border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 px-4 py-2 text-sm rounded-md shadow-sm border-transparent text-white bg-indigo-600 hover:bg-indigo-700']");
    await page.waitForXPath("/html/body/div/div/div/div[2]/main/div/div/div[2]/div/div/a");
    await page.waitForTimeout(874);
    await page.click("a[role='link']");
    await page.waitForXPath("/html/body/div/div/div/div[1]/div/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div/div/div/div[5]/label/div/div[2]/div/input");
 
    //login into discord
    await page.waitForTimeout(1000);
    await page.waitForXPath("/html/body/div/div[1]/main/div/div[3]/div/button[2]");
    await page.click("button[class='inline-flex items-center font-medium border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 px-4 py-2 text-sm rounded-md shadow-sm border-transparent text-white bg-indigo-600 hover:bg-indigo-700']");
    await page.waitForXPath("/html/body/div[1]/div[2]/div/div[1]/div/div/div/div/form/div/div/div[1]/div[2]/div[1]/div/div[2]/input");
    */

    for (let i = 0; i < accounts.length; i++) {
        console.log("Following account: " + accounts[i] + " " + i);
        await page.goto(accounts[i]);
        await page.waitForXPath("/html/body/div/div[1]/main/div[1]/div[2]/div[1]/div[2]/div[2]/div/button");
        await page.$eval("button[class='inline-flex items-center font-medium border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 px-4 py-2 text-sm rounded-md shadow-sm border-transparent text-white bg-indigo-600 hover:bg-indigo-700']", elem => elem.click());
        console.log("Successfully followed account: " + accounts[i] + " " + i);
        await page.waitForTimeout(delay);
    }

    for (let i = 52; i < 77; i++) {
        await page.goto("https://deca.art/Dominikk/gallery" + i);
        await page.waitForXPath("/html/body/div/div[1]/main/div/div[6]/div/span[1]/button");
        await page.$eval("button[class='grayscale hover:grayscale-0']", elem => elem.click());
        console.log("Successfully reacted to galery: " + "https://deca.art/abcdefg/gallery" + i);
        await page.waitForTimeout(delay);
    }

}
main();
