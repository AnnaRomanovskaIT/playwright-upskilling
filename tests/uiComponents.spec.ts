import {expect, test} from '@playwright/test'

test.beforeEach(async({page})=>{
    await page.goto('http://localhost:4200/')
    })

test.describe('Suit Layout', ()=>{
    
    test.beforeEach(async({page})=>{
    await page.getByText("Forms").click()
    await page.getByText("Form Layouts").click()
    })

    test('input fields', async({page}) => {
        const usingTheGridEmailInput = page.locator('nb-card', {hasText:"Using the Grid"}).getByRole('textbox', {name:"Email"})
        await usingTheGridEmailInput.fill('test@test.com')
        await usingTheGridEmailInput.clear()
        await usingTheGridEmailInput.pressSequentially('test2@test.com', {delay: 100})

        //generic assertion
        const inputValue = await usingTheGridEmailInput.inputValue()
        expect(inputValue).toEqual("test2@test.com")

        //locator assertion
        await expect(usingTheGridEmailInput).toHaveValue('test2@test.com')
    })

    test('radio buttons', async({page})=>{
        const usingTheGridForm = page.locator('nb-card', {hasText:"Using the Grid"});

        //await usingTheGridForm.getByLabel('Option 1').check({force:true})
        //const radioStatus = await usingTheGridForm.getByRole('radio', {name:"Option 1"}).isChecked()
        //expect(radioStatus).toBeTruthy()
        //await expect(usingTheGridForm.getByRole('radio', {name:"Option 1"})).toBeChecked()

        await usingTheGridForm.getByRole('radio', {name:"Option 2"}).check({force:true})
        expect(await usingTheGridForm.getByRole('radio', {name:"Option 1"}).isChecked()).toBeFalsy()
        expect(await usingTheGridForm.getByRole('radio', {name:"Option 2"}).isChecked()).toBeTruthy()
    })
})

test('checkboxes', async({page})=>{
    await page.getByText('Modal & Overlays').click()
    await page.getByText('Toastr').click()
    //check will not unchecked the box, uncheck will
    const checkboxHideObClick = page.getByRole('checkbox', {name: "Hide on click"})
    const checkboxPrevent = page.getByRole('checkbox', {name: "Prevent arising of duplicate toast"})
    //await checkboxHideObClick.click({force: true})
    await checkboxHideObClick.uncheck({force: true})
    await checkboxPrevent.check({force:true})
    const allBoxes = page.getByRole('checkbox')
    for(const box of await allBoxes.all()){
        await box.uncheck({force:true})
        expect(await box.isChecked()).toBeFalsy()
    }
})

test('lists and dropdowns', async({page})=>{
    const dropDownMenu = page.locator('ngx-header nb-select')
    await dropDownMenu.click()

    page.getByRole('list') //Ul tag
    page.getByRole('listitem') //LI tag

    //const optionList = page.getByRole('list').locator('nb-option')
    const optionList = page.locator('nb-option-list nb-option')
    await expect(optionList).toHaveText(['Light', 'Dark', 'Cosmic', 'Corporate'])
    await optionList.filter({hasText: "Cosmic"}).click()

    const header = page.locator('nb-layout-header')
    await expect(header).toHaveCSS('background-color', 'rgb(50, 50, 89)')

    const colors = {
        "Light": "rgb(255, 255, 255)",
        "Dark": "rgb(34, 43, 69)",
        "Cosmic": "rgb(50, 50, 89)",
        "Corporate": "rgb(255, 255, 255)"
    }

    await dropDownMenu.click()
    for(const color in colors){
        await optionList.filter({hasText: color}).click()
        await expect(header).toHaveCSS('background-color', colors[color])
        if(color != "Corporate")
            await dropDownMenu.click()
    }
})

test('tooltips', async({page})=>{
    await page.getByText('Modal & Overlays').click()
    await page.getByText('Tooltip').click()

    const toolTipCard = page.locator('nb-card', {hasText: "Tooltip Placements"})
    await toolTipCard.getByRole('button', {name:"Top"}).hover()

    page.getByRole('tooltip') //only if a role tooltip created
    const tooltip = await page.locator('nb-tooltip').textContent()
    expect(tooltip).toEqual('This is a tooltip')
})