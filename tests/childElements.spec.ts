import {test} from '@playwright/test'

test('locating child elements', async ({ page }) => {
    //parent element is nb-card
    //child element is nb-radio and have text Option 1
    page.locator('nb-card nb-ratio :text-is("Option 1")')
    //or
    page.locator('nb-card').locator('nb-ratio').locator(':text-is("Option 1")')

    page.locator('nb-card').getByRole('button', {name: "Sign in"})
    
    //get 3'd form
    page.locator("nb-card").nth(3).getByRole('button')
})