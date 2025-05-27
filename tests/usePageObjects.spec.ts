import {expect, test} from '@playwright/test'
import { NavigationPage } from '../page-objects/navigationPage'
import { FormLayoutPage } from '../page-objects/formLayoutPage'

test.beforeEach(async({page})=>{
    await page.goto('http://localhost:4200/')
})

test('navigate to form page', async({page})=>{
    const navigateTo = new NavigationPage(page)
    await navigateTo.formLayoutPage()
    await navigateTo.smartTablePage()
    await navigateTo.datepickerPage()
    await navigateTo.toastrPage()
    await navigateTo.tooltipPage()
})

test('parametirized submit', async({page})=>{
    const navigateTo = new NavigationPage(page)
    const formLayoutPage = new FormLayoutPage(page)
    await navigateTo.formLayoutPage()
    await formLayoutPage.submitUsingTheGridFormWithCredentialsAndSelectOption('test@test.com', 'Welcome', 'Option 1')
})