const puppeteer = require('puppeteer-extra')

const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

const proxy = "91.239.130.17:44443:mr11388CgaN:M45lu0TDaz_session-r5kfbwu9";

let p = proxy.split(':');

async function main() {
    const browser = await puppeteer.launch({
        executablePath: "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe", args: [
            ` --proxy-server=${p[0]}:${p[1]}`], headless: false
    });

    const page = await browser.newPage();

    await page.authenticate({ username: p[2], password: p[3] });
    await page.goto("https://twitter.com");
    
}
main();

