import { test, expect } from '@playwright/test';
test('basic test',async({page})=>{

    await page.goto('https://amazon.in');
    const amazonPayMenu = await page.getByText('Amazon Pay').first().textContent()
    console.log(amazonPayMenu)
    
    // click on Amazon cart
    await page.locator('#nav-cart').click();
    //captre the text cart is empty
    const cartMessage = await page.getByText('Your Amazon Cart is empty').textContent()
    console.log(cartMessage)
    
    const searchAmazon = page.locator('#twotabsearchtextbox')
    await searchAmazon.fill("cold press juicer")
   // const allOptions = page.locator('#sac-autocomplete-results-container [role="row"]')
    const allOptionsList = page.locator('.two-pane-results-container');
    await allOptionsList.first().waitFor({state:'visible'})
    const allOptions = allOptionsList.locator('div[role="row"]');
    console.log(await allOptions.count())
    
    const allOptionArr= await allOptions.allTextContents()
    console.log(allOptionArr)
    for(const eachOption of allOptionArr){
        console.log(eachOption)
    }

    //await page.getByRole('textbox',{name:'Search Amazon.in'}).fill("Gaming Monitor") - not working
    //await page.getByPlaceholder('Search Amazon.in').fill('iphone 18 pro')
    await page.locator('#nav-search-submit-button').click()
    await expect(searchAmazon).toHaveValue("cold press juicer")
  
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