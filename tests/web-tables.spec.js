import{expect,test} from '@playwright/test'

test.beforeEach(async({page})=>{
    await page.goto('https://playground.bondaracademy.com')
})

test('web-tables', async({page})=>{
    await page.getByText('Tables & Data').click()
    await page.getByText('Smart Table').click()

    //how to select row by any visible text

    const tableRowEmail = page.getByRole('row',{name:'twitter@outlook.com'})
    await tableRowEmail.locator('.nb-edit').click()
    await tableRowEmail.getByPlaceholder('Age').fill('69')
    await tableRowEmail.locator('.nb-checkmark').click()
    await expect(tableRowEmail.locator('td').last()).toHaveText('69')

    //Get Row by specific column value
    const tableRowById =page.getByRole('row').filter({has:page.getByRole('cell').nth(1).getByText('10')})
    await tableRowById.locator('.nb-edit').click()
    await page.locator('tbody').getByPlaceholder('E-mail').fill('ksp@gmail.com')
    await page.locator('tbody').locator('.nb-checkmark').click()
    await expect(tableRowById.locator('td').nth(5)).toHaveText('ksp@gmail.com')

    //Loop through table Rows
    const ages =['20','30','40','200']

    for(let age of ages){
        await page.getByPlaceholder('Age').fill(age)

        if(age==200){
            await expect(page.locator('tbody')).toContainText('No data found')
        }
        else {

            await expect(page.locator('tbody tr').first().locator('td').last()).toHaveText(age)
            const allTableRows = await page.locator('tbody tr').all()
            for(let row of allTableRows){
                await expect(row.locator('td').last()).toHaveText(age)
            }
        }

    }


    })