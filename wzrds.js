const puppeteer = require('puppeteer-extra')

const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

const TwitterAccounts = [""];
const proxy = [""]
const privatekey = [""];//array of the same length as TwitterAccounts and proxy



const seedphrase = [];
let i = 0;
async function main() {

    let TwitterAccount = TwitterAccounts[i].split(":");
    let p = proxy[i].split(":");
    let key=privatekey[i];
    i++;
    const browser = await puppeteer.launch({
        executablePath: "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe", args: ['--no-sandbox', '--disable-extensions-except=C:\\Users\\domin\\AppData\\Local\\Google\\Chrome\\User Data\\Profile 1\\Extensions\\nkbihfbeogaeaoehlefnkodbefgpgknn\\10.15.1_0,C:\\Users\\domin\\AppData\\Local\\Google\\Chrome\\User Data\\Profile 1\\Extensions\\ealjoeebhfijfimofmecjcjcigmadcai\\1.0.1_0',
            '--load-extension=C:\\Users\\domin\\AppData\\Local\\Google\\Chrome\\User Data\\Profile 1\\Extensions\\nkbihfbeogaeaoehlefnkodbefgpgknn\\10.15.1_0,C:\\Users\\domin\\AppData\\Local\\Google\\Chrome\\User Data\\Profile 1\\Extensions\\ealjoeebhfijfimofmecjcjcigmadcai\\1.0.1_0', '--enable-remote-extensions',
            ` --proxy-server=${p[0]}:${p[1]}`

        ], headless: false, slowMo: 80
    });

    const page = await browser.newPage();
    await page.authenticate({ username: p[2], password: p[3] });
    await page.setDefaultTimeout(10000000);
    console.log("setuping metamask");
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
    await page.type("input[id='private-key-box']", key);
    await page.click("button[class='button btn--rounded btn-primary btn--large new-account-create-form__button']");
    console.log("metamask setted up");
    await page.waitForTimeout(1000);
    await page.goto("https://twitter.com/");
    await page.waitForXPath("/html/body/div/div/div/div[2]/main/div/div/div[1]/div[1]/div/div[3]/div[5]/a");
    await page.waitForTimeout(874);
    console.log("logging in");
    await page.goto("https://twitter.com/login");
    await page.waitForTimeout(5000);
    await page.type("input[autocomplete='username']", TwitterAccount[0]);
    console.log("username typed, click for next step");
    await page.waitForTimeout(10000);
    await page.type("input[autocomplete='current-password']", TwitterAccount[1]);//might not work?? open dev tools befor it starts to log in
    console.log("password typed, click for login conformation");
    await page.waitForTimeout(10000);
    //click login in 10 seconds
    await page.goto("https://wzrds.xyz/mint");
    await page.waitForXPath("/html/body/div[2]/div/div[3]/div/button[1]");
    await page.click("button[class='mint-early-connect-button btn btn-primary']");
    console.log("click for metamask connection");
    await page.waitForTimeout(15000);
    await page.waitForXPath("/html/body/div[2]/div/div[2]/div/div/button");
    await page.click("button[class='mint-closed-share-button btn btn-primary']");
    console.log("click to tweet");
    await page.waitForTimeout(15000);
    await browser.close();
    j--;
}

for (let j = 0; j < 5 && i < proxy.length; j++) {
    main();
}
