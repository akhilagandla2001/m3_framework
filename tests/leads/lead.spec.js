import {test} from '@playwright/test'
import logindata from '../../testData/login.json'
import leaddata from '../../testData/lead.json'
import { dropdown } from '../../utils/dropdown'

test('lead module',async ({page}) => {
    test.slow()
    //! login to the application
    await page.goto('http://localhost:8888/')
    await page.locator('//input[@name="user_name"]').fill('admin')
    await page.locator('//input[@name="user_password"]').fill('admin')
    await page.click('//input[@id="submitButton"]')
    //! creating the lead
    await page.getByRole('link',{name:'Leads'}).click()
    await page.getByRole('img',{name:'Create Lead...'}).click()
    await page.locator('//select[@name="salutationtype"]').selectOption({value:'Ms.'})
    await page.locator('//input[@name="firstname"]').fill('Akhila')
    await page.locator('//input[@name="lastname"]').fill('Gandla')
    let name = await page.locator('//input[@name="lastname"]').inputValue()
    await page.locator('//input[@name="company"]').fill('testyanta')
    await page.locator('(//input[@title="Save [Alt+S]"])[1]').click()
    let lastname =  await page.locator('//span[@class="dvHeaderText"]').textContent('Gandla')
    console.log(lastname);
    //! validating the lead
    if (lastname?.includes('Gandla Akhila')) {
    console.log('lead is created');
    } else {
    console.log('lead is not created');
    }
    //! logout
    await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
    await page.locator('//a[text()="Sign Out"]').click()

})

test('test data',async ({page}) => {
    test.slow()
    //! login to the application
    await page.goto('http://localhost:8888/')
    await page.locator('//input[@name="user_name"]').fill(logindata.username)
    await page.locator('//input[@name="user_password"]').fill(logindata.password)
    await page.click('//input[@id="submitButton"]')
    //! creating the lead
    await page.getByRole('link',{name:'Leads'}).click()
    await page.getByRole('img',{name:'Create Lead...'}).click()
    await page.locator('//select[@name="salutationtype"]').selectOption({value:'Ms.'})
    await page.locator('//input[@name="firstname"]').fill(leaddata.firstname)
    await page.locator('//input[@name="lastname"]').fill(leaddata.lastname)
    let name = await page.locator('//input[@name="lastname"]').inputValue()
    await page.locator('//input[@name="company"]').fill(leaddata.company)
    await page.locator('(//input[@title="Save [Alt+S]"])[1]').click()
    let lastname =  await page.locator('//span[@class="dvHeaderText"]').textContent()
    console.log(lastname);
    //! validating the lead
    if (lastname?.includes(leaddata.firstname)) {
    console.log('lead is created');
    } else {
    console.log('lead is not created');
    }
    //! logout
    await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
    await page.locator('//a[text()="Sign Out"]').click()

})


test.only('test data through utils',async ({page}) => {
    test.slow()
    //! login to the application
    await page.goto('http://localhost:8888/')
    await page.locator('//input[@name="user_name"]').fill(logindata.username)
    await page.locator('//input[@name="user_password"]').fill(logindata.password)
    await page.click('//input[@id="submitButton"]')
    //! creating the lead
    await page.getByRole('link',{name:'Leads'}).click()
    await page.getByRole('img',{name:'Create Lead...'}).click()
    await dropdown(page.locator('//select[@name="salutationtype"]'),{value:'Ms.'})
    await page.locator('//input[@name="firstname"]').fill(leaddata.firstname)
    await page.locator('//input[@name="lastname"]').fill(leaddata.lastname)
    let name = await page.locator('//input[@name="lastname"]').inputValue()
    await page.locator('//input[@name="company"]').fill(leaddata.company)
    await page.locator('(//input[@title="Save [Alt+S]"])[1]').click()
    let lastname =  await page.locator('//span[@class="dvHeaderText"]').textContent()
    console.log(lastname);
    //! validating the lead
    if (lastname?.includes(leaddata.firstname)) {
    console.log('lead is created');
    } else {
    console.log('lead is not created');
    }
    //! logout
    await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
    await page.locator('//a[text()="Sign Out"]').click()
})