import {test, expect} from '@playwright/test';

test('check Locators', async ({ page })=>{

    await page.goto('https://demoqa.com/');
    await page.getByText('Elements').click()
    await page.goto("https://playground.qatools.dev/login")
    await page.goto("https://playground.bondaracademy.com/pages/forms/layouts")

    await page.getByRole('link', { name: 'Text Box' }).click();
    
});

test('Extracting Values', async ({ page })=>{
    //extracting Text
    await page.goto("https://playground.bondaracademy.com/pages/forms/layouts")
    const basicFormSection = page.locator('nb-card', { hasText: 'Basic form' })
    const submitButtonText = await basicFormSection.getByRole('button').textContent();
    expect(submitButtonText).toEqual('Submit')

    //Extracting Multiple Text values
    const allRadioButtons= await page.locator('nb-radio').allTextContents();
    console.log(allRadioButtons)
    expect (allRadioButtons).toContain('Option 1')

//Extract input field values
    const emailField = basicFormSection.getByRole('textbox', {name:'Email'})
    await emailField.fill('ksp@gmail.com')
    const emailFieldValue= await emailField.inputValue()
    console.log(emailFieldValue)
    expect(emailFieldValue).toEqual('ksp@gmail.com')

    //Extract Attributes
    const emailPlaceHolder = await emailField.getAttribute('placeholder')
    console.log(emailPlaceHolder)

})

test('LearnAssertions', async ({ page })=>{

    //Assertions - Generic, Locator and Soft Assertions
    const basicFormSectionButton = await page.locator('nb-card',{hasText:'Basic form'}).getByRole('button')
    const submitButtonText= await basicFormSectionButton.textContent()
    await expect(submitButtonText).toEqual('Submit')

    //Locator Assertion
    await expect(basicFormSectionButton).toHaveText('Submit')
    //Soft Assertion
    await expect.soft(basicFormSectionButton).toHaveText('Submit')
    await basicFormSectionButton.click()
    
})
