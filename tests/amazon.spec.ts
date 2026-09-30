import{test, expect} from '@playwright/test'

test('basic test',async({page})=>{

    await page.goto('/');
    const amazonPayMenu = await page.getByText('Amazon Pay').first().textContent()
    console.log(amazonPayMenu)
    
    // click on Amazon cart
    await page.locator('#nav-cart').click();
    //captre the text cart is empty
    const emptyCartMessage = page.getByText('Your Amazon Cart is empty')
    await expect(emptyCartMessage).toBeVisible()
    await expect(emptyCartMessage).toContainText('Your Amazon Cart is empty')
    console.log(emptyCartMessage)
    
    const searchAmazon = page.locator('#twotabsearchtextbox')
    await searchAmazon.fill("cold press juicer")
   // const allOptions = page.locator('#sac-autocomplete-results-container [role="row"]')
    const allOptionsList = page.locator('.two-pane-results-container');
    await allOptionsList.first().waitFor({state:'visible'})
    const allOptions = allOptionsList.locator('div[role="row"]');
    console.log(await allOptions.count())
    
    const allOptionArr= await allOptions.allTextContents()
    //console.log(allOptionArr)
    for(const eachOption of allOptionArr){
        console.log(eachOption)
    }

    //await page.getByRole('textbox',{name:'Search Amazon.in'}).fill("Gaming Monitor") - not working
    //await page.getByPlaceholder('Search Amazon.in').fill('iphone 18 pro')
    await page.locator('#nav-search-submit-button').click()
    //await page.locator('.a-link-normal.s-line-clamp-3.s-link-style.a-text-normal').first().click()
    await page.getByLabel('Kuvings B1700 Dark Silver Cold Press').click()
    await expect(searchAmazon).toHaveValue("cold press juicer")
    const timestamp = Date.now()
    await page.screenshot({path:`screenshots/search-${timestamp}.png`,fullPage :true})
  
});
test('capture allLnks' ,async({page})=>{
    await page.goto('https://www.amazon.com')
    const allLinks = await page.locator('a').all()
    for(const link of allLinks){
        const linkText = await link.textContent()
        console.log(linkText)
    }
})