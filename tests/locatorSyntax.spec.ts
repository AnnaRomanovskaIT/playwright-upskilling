import {test} from '@playwright/test'

test('locator syntax rules', async({page}) => {
    //by tag name
    page.locator('input') //can add first() to trigger first element
    //by ID
    page.locator('#inputEmail')
    //by class value
    page.locator('.shape-rectangle')
    //by attribute
    page.locator('[placeholder="Email"]')
    //by class value (all)
    page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition]')
    //combine
    page.locator('input[placeholder="Email"][nbinput]')
    //by XPpath (not recommended)
    page.locator('//*[@id="inputEmail"]')
    //by partial text match
    page.locator(':text("Using")')
    //by exact text match
    page.locator(':text("Using the Grid")')
})