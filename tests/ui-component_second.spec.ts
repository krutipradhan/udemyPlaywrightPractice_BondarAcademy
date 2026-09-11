import {expect,test } from '@playwright/test'

test.beforeEach(async({page})=>{
    await page.goto('https://playground.bondaracademy.com')
})

test('Dialog Boxes', async({page})=>{

    await page.getByText('Tables & Data').click()
    await page.getByText('Smart Table').click()

    page.on('dialog',dialog =>{
        expect(dialog.message()).toEqual('Are you sure you want to delete?')
        dialog.accept()
    })

    await page.locator('tr',{hasText:'mdo@gmail.com'}).locator('.nb-trash').click()
    await expect(page.locator('tr',{hasText:'mdo@gmail.com'}).locator('.nb-trash')).not.toBeVisible()

})