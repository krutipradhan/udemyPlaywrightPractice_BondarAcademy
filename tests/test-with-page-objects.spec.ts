import{expect, test}  from '@playwright/test'
import { NavigationPage} from '../page-objects/navigation-page'
import { FormLayoutsPage} from '../page-objects/form-layouts-page'

test.beforeEach(async ({page})=>{
    await page.goto('https://playground.bondaracademy.com/')
})

test('Navigate to Form Layout Page', async ({page})=>{

    const navigateTo = new NavigationPage(page)
    await navigateTo.formLayoutsPage()
    await navigateTo.datePickerPage()
    await navigateTo.toasterPage()

})

test('Parameterised page object methods',async({page})=>{
    const navigateTo =new NavigationPage(page)
    const formLayoutPage = new FormLayoutsPage(page)

    await navigateTo.formLayoutsPage()
    await formLayoutPage.submitUsingTheGridForm ('ksp@gmail.com', 'WELCOME', 'Option 2')
    await formLayoutPage.submitInlineForm("Kruti Pradhan","kp@blr.com",true)


})