const puppeteer = require('puppeteer-extra')

const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())
const privatekey = "";
const seedphrase = [];
async function main() {
    const browser = await puppeteer.launch({
        executablePath: "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe", args: ['--no-sandbox', '--disable-extensions-except=C:\\Users\\domin\\AppData\\Local\\Google\\Chrome\\User Data\\Profile 1\\Extensions\\nkbihfbeogaeaoehlefnkodbefgpgknn\\10.16.1_0,C:\\Users\\domin\\AppData\\Local\\Google\\Chrome\\User Data\\Profile 1\\Extensions\\ealjoeebhfijfimofmecjcjcigmadcai\\1.0.1_0',
            '--load-extension=C:\\Users\\domin\\AppData\\Local\\Google\\Chrome\\User Data\\Profile 1\\Extensions\\nkbihfbeogaeaoehlefnkodbefgpgknn\\10.16.1_0,C:\\Users\\domin\\AppData\\Local\\Google\\Chrome\\User Data\\Profile 1\\Extensions\\ealjoeebhfijfimofmecjcjcigmadcai\\1.0.1_0', '--enable-remote-extensions'
        ], headless: false, slowMo: 10
    });
    const page = await browser.newPage();
    await page.setDefaultTimeout(10000000);
    await page.goto("chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/home.html#initialize/select-action");
    await page.waitForXPath("/html/body/div[1]/div/div[2]/div/div/div[2]/div/div[2]/div[1]/button");
    await page.click("button[class='button btn--rounded btn-primary first-time-flow__button']");
    await page.waitForXPath("/html/body/div[1]/div/div[2]/div/div/div/div[5]/div[1]/footer/button[2]");
    await page.click("button[class='button btn--rounded btn-primary page-container__footer-button']");
    await page.waitForXPath("/html/body/div[1]/div/div[2]/div/div/div[2]/form/div[1]/div[3]/div[1]/div[1]/div/input");
    await page.type("input[id='import-srp__srp-word-0']", seedphrase[0]);
    await page.type("input[id='import-srp__srp-word-1']", seedphrase[1]);
    await page.type("input[id='import-srp__srp-word-2']", seedphrase[2]);
    await page.type("input[id='import-srp__srp-word-3']", seedphrase[3]);
    await page.type("input[id='import-srp__srp-word-4']", seedphrase[4]);
    await page.type("input[id='import-srp__srp-word-5']", seedphrase[5]);
    await page.type("input[id='import-srp__srp-word-6']", seedphrase[6]);
    await page.type("input[id='import-srp__srp-word-7']", seedphrase[7]);
    await page.type("input[id='import-srp__srp-word-8']", seedphrase[8]);
    await page.type("input[id='import-srp__srp-word-9']", seedphrase[9]);
    await page.type("input[id='import-srp__srp-word-10']", seedphrase[10]);
    await page.type("input[id='import-srp__srp-word-11']", seedphrase[11]);
    await page.type("input[id='password']", "asdfghjk");
    await page.type("input[id='confirm-password']", "asdfghjk");
    await page.click("input[id='create-new-vault__terms-checkbox']");
    await page.click("button[type='submit']");
    await page.waitForXPath("/html/body/div[1]/div/div[2]/div/div/button");
    await page.click("button[role='button']");
    await page.waitForXPath("/html/body/div[2]/div/div/section/div[1]/div/button");
    await page.goto("chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/home.html#new-account/import");
    await page.waitForXPath("/html/body/div[1]/div/div[3]/div/div/div[2]/div[2]/div[1]/input");
    await page.type("input[id='private-key-box']", privatekey);
    await page.click("button[class='button btn--rounded btn-primary btn--large new-account-create-form__button']");

}
main();