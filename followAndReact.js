const puppeteer = require('puppeteer-extra');

// Add stealth plugin and use defaults (all tricks to hide puppeteer usage)
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

console.time();

const accounts = [
];
/**/

console.log(accounts.length);

const delay = 3040;

const seedphrase = [];
const proxy = "ultra.marsproxies.com:44443:mr11758QNsR:MoCjmfmoZg_country-am,bh,bo,cr,cy,kh,ba,by,bd,ci,br,fr,fi,id,gt,dk,cn,bw,hn,mk,ly_session-g6ywsxme";
const privatekey = "";
let p = proxy.split(":");
async function main() {
    const browser = await puppeteer.launch({
        executablePath: "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe", args: ['--no-sandbox', '--disable-extensions-except=C:\\Users\\domin\\AppData\\Local\\Google\\Chrome\\User Data\\Profile 1\\Extensions\\nkbihfbeogaeaoehlefnkodbefgpgknn\\10.15.1_0,C:\\Users\\domin\\AppData\\Local\\Google\\Chrome\\User Data\\Profile 1\\Extensions\\ealjoeebhfijfimofmecjcjcigmadcai\\1.0.1_0',
            '--load-extension=C:\\Users\\domin\\AppData\\Local\\Google\\Chrome\\User Data\\Profile 1\\Extensions\\nkbihfbeogaeaoehlefnkodbefgpgknn\\10.15.1_0,C:\\Users\\domin\\AppData\\Local\\Google\\Chrome\\User Data\\Profile 1\\Extensions\\ealjoeebhfijfimofmecjcjcigmadcai\\1.0.1_0', '--enable-remote-extensions',
            ` --proxy-server=${p[0]}:${p[1]}`

        ], headless: false
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
    await page.type("input[id='private-key-box']", privatekey);
    await page.click("button[class='button btn--rounded btn-primary btn--large new-account-create-form__button']");


    await page.goto('https://deca.art/app');
    await page.waitForTimeout(delay);
    await page.waitForXPath("/html/body/div/div[1]/main/div[1]/div[2]/div[1]/div[2]/div[2]/div/button");

    for (let i = 0; i < accounts.length; i++) {
        console.log("Following account: " + accounts[i] + " " + i);
        await page.goto(accounts[i]);
        await page.waitForXPath("/html/body/div/div[1]/main/div[1]/div[2]/div[1]/div[2]/div[2]/div/button");
        await page.$eval("button[class='inline-flex items-center font-medium border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 px-4 py-2 text-sm rounded-md shadow-sm border-transparent text-white bg-indigo-600 hover:bg-indigo-700']", elem => elem.click());
        console.log("Successfully followed account: " + accounts[i] + " " + i);
        await page.waitForTimeout(delay);
    }

    for (let i = 1; i < 77; i++) {
        await page.goto("https://deca.art/Dominikk/gallery" + i);
        await page.waitForXPath("/html/body/div/div[1]/main/div/div[6]/div/span[1]/button");
        await page.$eval("button[class='grayscale hover:grayscale-0']", elem => elem.click());
        console.log("Successfully reacted to galery: " + "https://deca.art/abcdefg/gallery" + i);
        await page.waitForTimeout(delay);
    }

}
main();



