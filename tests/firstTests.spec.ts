import {test} from '@playwright/test'

test.describe('first', () =>{
    /*
    //typical view
    test('the first test', () => {

    })

    //suite (can have different set-up)
    test.describe('test suite 1', () => {
        test('the first test', () => {

        })
        test('the first test', () => {

        })
        test('the first test', () => {

        })
    })
    */
    //in order to run test we need to provide page
    test('the first test', async ({page}) => {
        //page.goto('url') - to open web page
        //await need to be used because response promised
        await page.goto('https://en.wikipedia.org/wiki/Wroc%C5%82aw')
        await page.click('a.vector-toc-link:has-text("History")');
        await page.click('a.vector-toc-link:has-text("Middle Ages")');
    })

    test('user facing locators', async({page}) => {
    //idea is that we testing imitating the user behaviour
    //so not by elements that user can't see
    //but it still happens
    page.getByRole('textbox', {name: "Email"})
    page.getByRole('button', {name: "Sign in"})
    page.getByLabel("Email")
    page.getByPlaceholder('Jane Doe')
    page.getByText('Using the grid')
    page.getByTitle('IoT Dashboard')
    //we adding test-id into element on web page
    page.getByTestId('Sign in');
})
})

test.describe('syntax locator', () => {
    test.beforeEach(async({page})=>{
        await page.goto('http://localhost:4200/')
        await page.getByText("Forms").click()
        await page.getByText("Form Layouts").click()
    })

    test('locator syntax rules', async({page}) => {
        //by tag name
        //await page.locator('input').click() //can add first() to trigger first element
        //by ID
        await page.locator('#inputEmail').click()
        //by class value
        //await page.locator('.shape-rectangle').click()
        //by attribute
        //await page.locator('[placeholder="Email"]').click()
        //by class value (all)
        //await page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]').click()
        //combine
        //await page.locator('input[placeholder="Email"][nbinput]').click()
        //by XPpath (not recommended)
        //await page.locator('//*[@id="inputEmail"]').click()
        //by partial text match
        await page.locator(':text("Using")').click()
        //by exact text match
        await page.locator(':text("Using the Grid")').click()
    })

    test('locating child elements', async ({ page }) => {
    //parent element is nb-card
    //child element is nb-radio and have text Option 1
    await page.locator('nb-card nb-ratio :text-is("Option 1")').click()
    //or
    await page.locator('nb-card').locator('nb-ratio').locator(':text-is("Option 1")').click()

    await page.locator('nb-card').getByRole('button', {name: "Sign in"}).click()
    
    //get 3'd form
    await page.locator("nb-card").nth(3).getByRole('button').click()
})
})

test.describe('hook and flow', () => { 
test.beforeEach(async ({page}) => {
    await page.goto('https://en.wikipedia.org/wiki/Wroc%C5%82aw')
})

test.describe('History section Suit', () => { 
    test.beforeEach(async({page})=>{
        await page.click('a.vector-toc-link:has-text("History")');
    })

    test('middle ages', async ({page}) => {
        await page.click('a.vector-toc-link:has-text("Middle Ages")');
    })

    test('second world war', async ({page}) => {
        await page.click('a.vector-toc-link:has-text("Second World War")');
    })
})

test.describe('Georgraphy section Suit', () => { 
    test.beforeEach(async({page})=>{
        await page.click('a.vector-toc-link:has-text("Geography")');
    })

    test('flora and fauna', async ({page}) => {
        await page.click('a.vector-toc-link:has-text("Flora and fauna")');
    })

    test('climate', async ({page}) => {
        await page.click('a.vector-toc-link:has-text("Climate")');
    })
})

test.beforeEach(async({page})=>{
    await page.goto('http://localhost:4200/')
    await page.getByText("Forms").click()
    await page.getByText("Form Layouts").click()
})
})