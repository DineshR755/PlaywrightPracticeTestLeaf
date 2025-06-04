import test, { chromium, firefox } from "@playwright/test";

//To launch redbus in edge and get the title 
test('To launch redbus in edge', async () =>{
    const browserLaunch = await chromium.launch({ channel: 'msedge' });
    const context = await browserLaunch.newContext();
    const page = await context.newPage();
    await page.goto("https://www.redbus.in/");
    let actualUrl = page.url();
    console.log(actualUrl);
    let titleOfThePageLaunched = await page.title();
    console.log(titleOfThePageLaunched);
    
})

//to launch flipkart in firefox and verify title
test('To launch flipkart in firefox', async () =>{
    const browserLaunch = await firefox.launch();
    const newContextForChrome = await browserLaunch.newContext();
    const page = await newContextForChrome.newPage();
    await page.goto("https://www.flipkart.com");
    let actualUrl = page.url();
    console.log(actualUrl);
    let titleOfThePageLaunched = await page.title();
    console.log(titleOfThePageLaunched);
    
})