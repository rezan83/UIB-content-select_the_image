const puppeteer = require("puppeteer");
const path = require('path');

const browserOptions = {
    headless: true,
    ignoreHTTPSErrors: true,
    defaultViewport: null,
    devtools: false,
}
let browser;
let page;

beforeAll(async () => {
    browser = await puppeteer.launch(browserOptions);
    page = await browser.newPage();
    await page.goto('file://' + path.resolve('./index.html'));
}, 30000);

afterAll((done) => {
    try { 
        this.puppeteer.close(); 
    } catch (e) 
    {} 
    done();
});

describe("UIB image-content", () => {
    it("Index file should contain appropriate meta tags", async () => {
        const metaTags = await page.$$('meta');
        expect(metaTags.length).toBeGreaterThan(1);
    });
    it("Index file Should contain a title tag that is not empty", async () => {
        const title = await page.$eval('title', el => el.innerHTML);
        expect(title).not.toBe('');
    });
    it("All H3 elements should be set to the color blue", async () => {
        const h3 = await page.$eval('h3', el => getComputedStyle(el).color);
        expect(h3).toBe('rgb(0, 0, 255)'); // blue
    });

    it("Task5(this) item Should be assigned an 'Id' and its color should be changed", async () => {
        const task5 = await page.$eval('ul li:nth-child(5)', el => getComputedStyle(el).color);
        expect(task5).not.toBe('rgb(0, 0, 0)'); // black
        const task5Id = await page.$eval('ul li:nth-child(5)', el => el.id);
        expect(task5Id).not.toBe('');
        expect(task5Id).toBeTruthy();

    });
    it("Images should be selected using a 'combinator' and given a border", async () => {
        const imageBorder = await page.$eval('img', el => getComputedStyle(el).border);
        expect(imageBorder).not.toBe('');
    });
    it("The link ending with '.com' should be given a background-color of yellow", async () => {
        const link = await page.$eval('a[href$=".com"]', el => getComputedStyle(el).backgroundColor);
        expect(link).toBe('rgb(255, 255, 0)'); // yellow
    });


});

