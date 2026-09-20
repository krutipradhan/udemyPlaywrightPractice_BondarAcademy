import { test, expect } from '@playwright/test';
test('basic test',async({page})=>{

    await page.goto('https://amazon.in');
    // click on Amazon cart
    await page.locator('#nav-cart').click();
    //captre the text cart is empty
    let cartMessage = await page.locator(':text-is("Your Amazon Cart is empty")').textContent()
    
    // await page.getByText('Update location').click
    //await page.getByLabel('Search Amazon.in').fill("Logitech Wireless Mouse")
    await page.locator('#twotabsearchtextbox').fill("cold press juicer")
    //await page.getByRole('textbox',{name:'Search Amazon.in'}).fill("Gaming Monitor") - not working
    //await page.getByPlaceholder('Search Amazon.in').fill('iphone 18 pro')
    await page.locator('#nav-search-submit-button').click()
  
});

test('start code',async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://shiftsync.tricentis.com/p/aiinqaorg_1'); 

});

test('Ui Controls',async({page})=>{
    await page.goto('https://demoqa.com/elements');
   
    await page.getByRole('link', { name: 'Text Box' }).click();
    await page.locator('#userName').fill('krutip007');
    
    await page.getByRole('textbox', { name: 'Current Address' }).fill ('Bangalore, Kadugodi');

});