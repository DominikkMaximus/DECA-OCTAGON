
const puppeteer = require('puppeteer');
const dappeteer = require('@chainsafe/dappeteer');
const Web3 = require("web3")

const projectid = "";
const web3 = new Web3('https://mainnet.infura.io/v3/' + projectid);

const accounts = [
];
const gallerys = [
];

const gallerys2 = [
];

async function main() {
    const browser = await dappeteer.launch(puppeteer, {
        metamaskVersion: 'v10.15.0', defaultViewport: null,
        executablePath: "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe", args: ['--no-sandbox', '--disable-extensions-except=C:\\Users\\domin\\AppData\\Local\\Google\\Chrome\\User Data\\Profile 1\\Extensions\\nkbihfbeogaeaoehlefnkodbefgpgknn\\10.16.1_0,C:\\Users\\domin\\AppData\\Local\\Google\\Chrome\\User Data\\Profile 1\\Extensions\\ealjoeebhfijfimofmecjcjcigmadcai\\1.0.1_0',
            '--load-extension=C:\\Users\\domin\\AppData\\Local\\Google\\Chrome\\User Data\\Profile 1\\Extensions\\nkbihfbeogaeaoehlefnkodbefgpgknn\\10.16.1_0,C:\\Users\\domin\\AppData\\Local\\Google\\Chrome\\User Data\\Profile 1\\Extensions\\ealjoeebhfijfimofmecjcjcigmadcai\\1.0.1_0', '--enable-remote-extensions'
        ], headless: false
    });


    const metamask = await dappeteer.setupMetamask(browser, { seed: "" });
    while (true) {
        console.log("creating account");
        const account = web3.eth.accounts.create();
        const privateKey = account.privateKey;
        console.log("account successfully created");
        await metamask.importPK(privateKey);
        const page = await browser.newPage();
        //await page.setDefaultTimeout(10000000);
        await page.goto("https://deca.art/");
        await page.waitForXPath("/html/body/div/div[1]/header/div/div/div/button");
        await page.click("button[class='inline-flex w-full items-center rounded-md border border-gray-300 bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100']");
        await page.waitForXPath("/html/body/div/div[1]/header/div/div/div[2]/div/button[1]");
        await page.click("button[class='text-gray-700 block w-full px-4 py-2 text-sm']");
        const page2 = await browser.newPage();
        await page2.goto("chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/home.html#");
        await page2.waitForXPath("/html/body/div[1]/div/div[2]/div/div[3]/div[2]/button[2]");
        await page2.click("button[class='button btn--rounded btn-primary']");
        await page2.waitForXPath("/html/body/div[1]/div/div[2]/div/div[2]/div[2]/div[2]/footer/button[2]");
        await page2.click("button[class='button btn--rounded btn-primary page-container__footer-button']");
        await page2.waitForXPath("/html/body/div[1]/div/div[3]/div/div[3]/button[2]");
        await page2.click("button[class='button btn--rounded btn-primary btn--large request-signature__footer__sign-button']");
        await page2.close();
        await page.waitForXPath("/html/body/div[2]/div/div/div/div/div[2]/form/div/div[1]/input");
        await page.click("input[id='acceptTerms']");
        await page.click("button[class='inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50']");

        //await page.waitForXPath("/html/body/div[2]/div[2]/button[3]");
        // await page.click("button[class='']");
        //await page.waitForXPath("");
        // await page.click("button[class='']");
        for (let i = 0; i < accounts.length; i++) {
            console.log("Following account: " + accounts[i] + " " + i);
            await page.goto(accounts[i]);
            await page.waitForXPath("/html/body/div/div[1]/main/div[1]/div[2]/div[1]/div[2]/div[2]/div/button");
            await page.$eval("button[class='inline-flex items-center font-medium border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 px-4 py-2 text-sm rounded-md shadow-sm border-transparent text-white bg-indigo-600 hover:bg-indigo-700']", elem => elem.click());
            await page.waitForTimeout(200);
        }
        for (let i = 0; i < gallerys.length; i++) {
            await page.goto(gallerys[i]);
            await page.waitForXPath("/html/body/div/div[1]/main/div/div[6]/div/span[1]/button");
            await page.$eval("button[class='grayscale hover:grayscale-0']", elem => elem.click());
            console.log("Successfully reacted to galery: " + gallerys[i]);
            await page.waitForTimeout(200);
        }
        for (let i = 0; i < gallerys2.length; i++) {
            await page.goto(gallerys2[i]);
            await page.waitForXPath("/html/body/div/div[1]/main/div/div[5]/div/div[2]/div/span[1]/button");
            await page.$eval("button[class='grayscale hover:grayscale-0']", elem => elem.click());
            console.log("Successfully reacted to galery: " + gallerys[i]);
            await page.waitForTimeout(200);
        }


        await page.waitForXPath("/html/body/div/div[1]/nav/div/div/div[3]/div/div/button");
        await page.click("button[class='flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2']");
        await page.waitForTimeout(1000);
        console.log('hejj');
        await page.waitForXPath("/html/body/div/div[1]/nav/div/div/div[3]/div/div[2]/button");
        await page.click("button[class='block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100']");
        await page.waitForTimeout(1000);
        await page.goto("chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/home.html#");
        try {
            await page.waitForXPath("/html/body/div[1]/div/div[3]/div/div[3]/button[2]");
            await page.click("button[class='button btn--rounded btn-primary btn--large request-signature__footer__sign-button']");
        }
        catch (err) { ; }
        await page.waitForTimeout(1000);
        await page.waitForXPath("/html/body/div[1]/div/div[3]/div/div/div/div[1]/button");
        await page.click("button[class='fas fa-ellipsis-v menu-bar__account-options']");
        await page.waitForTimeout(1000);
        await page.waitForXPath("/html/body/div[2]/div[2]/button[3]");
        await page.click("button[data-testid='account-options-menu__connected-sites']");
        await page.waitForTimeout(1000);
        await page.waitForXPath("/html/body/div[2]/div/div/section/div[2]/main/div/a");
        await page.click("a[class='button btn-link connected-sites-list__content-row-link-button']");
        await page.waitForTimeout(1000);
        await page.waitForXPath("/html/body/div[2]/div/div/section/div[2]/div/button[2]");
        await page.click("button[class='button btn--rounded btn-primary']");
    }


}
main();

