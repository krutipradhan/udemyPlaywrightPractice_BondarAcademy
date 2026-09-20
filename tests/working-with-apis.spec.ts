import {expect, test} from  '@playwright/test'

test.beforeEach(async ({page}) =>{
    await page.goto('https://conduit.bondaracademy.com/')
})

test('has Title',async ({page}) =>{

    await expect (page.locator('.navbar-brand')).toHaveText('conduit')

})