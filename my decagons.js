await page.goto(galeryUrl);
await page.waitForXPath("/html/body/div/div[1]/main/div/div[6]/div/span[1]/button");
await page.$eval("button[class='grayscale hover:grayscale-0']", elem => elem.click());
console.log("Successfully reacted to galery: " + galeryUrl);
await page.waitForTimeout(delay);



const Web3 = require('web3');
const API_KEYS = require('./apiKeys.json')
const projectid = API_KEYS.INFURA;
const web3 = new Web3('https://mainnet.infura.io/v3/' + projectid);

const account = web3.eth.accounts.create();
privateKey = account.privateKey;