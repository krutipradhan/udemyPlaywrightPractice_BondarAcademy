import { test, expect } from '@playwright/test';
test('basic test',async({page})=>{

    await page.goto('https://amazon.in');
  
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