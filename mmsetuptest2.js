const puppeteer = require('puppeteer');
const dappeteer = require('@chainsafe/dappeteer');

const key = "";

const TwitterAccounts = [""];
let TwitterAccount = TwitterAccounts[0].split(":");
const proxy = ["91.239.130.17:44443:mr11388CgaN:M45lu0TDaz_session-r5kfbwu9"]
let p = proxy[0].split(":");
async function main() {
    const browser = await dappeteer.launch(puppeteer, {
        metamaskVersion: 'v10.15.0', defaultViewport: null,
        executablePath: "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe", args: ['--no-sandbox', '--disable-extensions-except=C:\\Users\\domin\\AppData\\Local\\Google\\Chrome\\User Data\\Profile 1\\Extensions\\nkbihfbeogaeaoehlefnkodbefgpgknn\\10.15.1_0,C:\\Users\\domin\\AppData\\Local\\Google\\Chrome\\User Data\\Profile 1\\Extensions\\ealjoeebhfijfimofmecjcjcigmadcai\\1.0.1_0',
            '--load-extension=C:\\Users\\domin\\AppData\\Local\\Google\\Chrome\\User Data\\Profile 1\\Extensions\\nkbihfbeogaeaoehlefnkodbefgpgknn\\10.15.1_0,C:\\Users\\domin\\AppData\\Local\\Google\\Chrome\\User Data\\Profile 1\\Extensions\\ealjoeebhfijfimofmecjcjcigmadcai\\1.0.1_0', '--enable-remote-extensions',` --proxy-server=${p[0]}:${p[1]}`
            
        ], headless: false, devtools: true, slowMo: 10
    });
    const metamask = await dappeteer.setupMetamask(browser, { seed: "" });
    await metamask.importPK(key);

    const page = await browser.newPage()
    await page.authenticate({ username: p[2], password: p[3] });
    await page.setDefaultTimeout(10000000);

    await page.goto("https://twitter.com/");
    await page.waitForXPath("/html/body/div/div/div/div[2]/main/div/div/div[1]/div[1]/div/div[3]/div[5]/a");
    await page.waitForTimeout(874);
    console.log("logging in");
    await page.goto("https://twitter.com/login");
    await page.waitForTimeout(5000);
    await page.type("input[autocomplete='username']", TwitterAccount[0]);
    await page.waitForTimeout(800);
    const elements = await page.$x('/html/body/div/div/div/div[1]/div/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div/div/div/div[6]/div');
    await elements[0].click()
    console.log("username typed");
    await page.waitForTimeout(3000);
    await page.type("input[autocomplete='current-password']", TwitterAccount[1]);
    const elements2 = await page.$x('/html/body/div/div/div/div[1]/div/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div[2]/div/div[1]/div/div/div/div');
    await elements2[0].click();
    try {
        await page.type("input[autocomplete='tel']", TwitterAccount[2]);
        console.log("need to type phone number")
        await page.waitForTimeout(600);
        const elements3 = await page.$x('/html/body/div[1]/div/div/div[1]/div/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div[2]/div/div/div/div/div');
        await elements3[0].click();
    }
    catch (err) {
        console.log(err);
    }
    await page.goto("https://wzrds.xyz/mint");
    await page.waitForXPath("/html/body/div[2]/div/div[3]/div/button[1]");
    await page.click("button[class='mint-early-connect-button btn btn-primary']");
    await page.waitForXPath("/html/body/div[4]/div/div/div[2]/div[1]/div");
    const elements4 = await page.$x('/html/body/div[4]/div/div/div[2]/div[1]/div');
    await elements4[0].click();
    await metamask.approve({ allAccounts: false });
    console.log("click for metamask connection");
    await page.waitForTimeout(15000);
    await page.waitForXPath("/html/body/div[2]/div/div[2]/div/div/button");
    await page.click("button[class='mint-closed-share-button btn btn-primary']");
    console.log("click to tweet");
    await page.waitForTimeout(15000);
    await browser.close();
}

main();