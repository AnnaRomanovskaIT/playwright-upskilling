import {test} from '@playwright/test'
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