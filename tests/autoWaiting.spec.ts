import {expect, test} from '@playwright/test'

test.beforeEach(async({page})=>{
    await page.goto('http://uitestingplayground.com/ajax')
    await page.getByText("Button Triggering AJAX Request").click()
})

test('locating parent elements', async ({ page }) => {
    const successButton = page.locator('.bg-success')
    //await successButton.click()

    //const text = await successButton.textContent()
    const text = await successButton.allTextContents()
    expect(text).toContain('Data loaded with AJAX get request')
})

test('methods to do waiting', async ({ page }) => {
    const successButton = page.locator('.bg-success')
    //wait for element
    //await page.waitForSelector('.bg-success')

    //wair for particular response
    //await page.waitForResponse('http://uitestingplayground.com/ajaxdata')

    //wait for network calls to be completed (NOT RECOMMENDED)
    await page.waitForLoadState('networkidle')

    //const text = await successButton.textContent()
    const text = await successButton.allTextContents()
    expect(text).toContain('Data loaded with AJAX get request')
})