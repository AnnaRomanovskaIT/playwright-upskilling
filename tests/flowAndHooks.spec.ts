import {test} from '@playwright/test'

//test.afterEach() run after test
//test.afterAll() run after all tests
//not recommended to use usually
//test.beforeAll() used to run before all of the other test

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