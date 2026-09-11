import {expect,test} from '@playwright/test'

test('LocatorAssertions', async ({page})=>{
    await page.goto('https://conduit.bondaracademy.com')
    const titleLocator= page.locator('.banner h1')
    
    //Generic Assertions
    const titleText= await titleLocator.textContent()
    expect(titleText).toEqual('conduit')

    //Locator Assertions
    await expect(titleLocator).toHaveText('conduit')

    //List Of Articles
    const articleList = page.locator('app-article-list')

    const articleText= await articleList.textContent()
    expect(articleText).toContain('Bondar Academy')

    //Locator Assertions
    await expect(articleList).toContainText('Bondar Academy')



    })
    