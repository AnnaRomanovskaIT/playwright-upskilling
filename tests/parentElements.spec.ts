import {test} from '@playwright/test'

test('locating parent elements', async ({ page }) => {
    page.locator('nb-card', {hasText: "Using the card"}).getByRole('textbox', {name: "Email"})
    page.locator('nb-card', {has: page.locator('#inputEmail').getByRole('textbox', {name: "Email"})})
})

test('ao3 locate parent elements', async ({ page }) => {
    await page.goto('https://archiveofourown.org/tags/Game%20of%20Thrones%20(TV)/works')
    await page.locator('#tos_agree').click()
    await page.locator('#data_processing_agree').click()
    await page.locator('button', {hasText: "I agree/consent to these Terms"}).click()
    await page.locator('.work', {hasText: "Days Not Seen"}).locator('.header.module').locator('a:has-text("Days Not Seen")').click()
})