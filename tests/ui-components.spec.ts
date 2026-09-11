import{expect,test} from '@playwright/test'

test.beforeEach(async({page})=>{
    await page.goto('https://playground.bondaracademy.com')

})

test.describe(' Form Layouts Page',()=>{

    test.beforeEach(async({page})=>{
        await page.getByText('Forms').click()
        await page.getByText('Form Layouts').click()

    })

    test('Input Fields', async({page})=>{
        const usingGridEmailInput = page.locator('nb-card',{hasText:'Using the Grid'}).getByRole('textbox',{name:'Email'})
        await usingGridEmailInput.fill('ksp@gmail.com')
        await usingGridEmailInput.clear()
        await usingGridEmailInput.pressSequentially('pradhan@gmail.com',{delay:500})
        
        //Extract The Value
        const inputValue = await usingGridEmailInput.inputValue()

        //Assertions
        await expect(usingGridEmailInput).toHaveValue('pradhan@gmail.com')
        await expect(usingGridEmailInput).toHaveValue(/gmail.com/)

    })

    test('Radio Buttons',async({page})=>{
        const usingTheGridForm = page.locator('nb-card',{hasText:'Using The Grid'})
        await usingTheGridForm.getByLabel('Option 1').check({force:true})
        await usingTheGridForm.getByRole('radio',{name:'Option 2'}).check({force:true})

        const radioStatus = await usingTheGridForm.getByRole('radio',{name:'Option 2'}).isChecked() 
        expect (radioStatus).toBeTruthy()

        await expect (usingTheGridForm.getByRole('radio',{name:'Option 2'})).toBeChecked()
        await expect (usingTheGridForm.getByRole('radio', {name:'Option 1'})).not.toBeChecked()

    })

})

test('CheckBox',async({page})=>{

    await page.getByText('Modal & Overlays').click()
    await page.getByText('Toastr').click()

    await page.getByRole('checkbox',{name:'Hide on click'}).uncheck({force:true})

    const allBoxes = page.getByRole('checkbox')
    for(const box of await allBoxes.all()){
        await box.check({force:true})
        await expect(box).toBeChecked()
    }

})

test('List and Dropdowns', async({page})=>{

    await page.getByText('Modal & Overlays').click()
    await page.getByText('Toastr').click()

    
})

test('ToolTip', async({page})=>{
    await page.getByText('Modal & Overlays').click()
    await page.getByText('Tooltip').click()

    await page.getByRole('button', {name:'Right'}).hover()
    await expect (page.getByRole('tooltip')).toHaveText('This is a tooltip')

})

test('Date Picker', async({page})=>{
    await page.getByText('Forms').click()
    await page.getByText('Datepicker').click()

    const calendarInputField = page.getByPlaceholder('Form Picker')
    await calendarInputField.click()
    await page.locator('.day-cell:not(.bounding-month)').getByText('10',{exact:true}).click() 
    
    await expect(calendarInputField).toHaveValue('Sep 10, 2026')
    console.log (await calendarInputField.inputValue())


})