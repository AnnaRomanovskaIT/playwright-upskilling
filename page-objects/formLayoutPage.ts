import {Locator, Page} from "@playwright/test"

export class FormLayoutPage{
    private readonly page: Page
    readonly usingTheGridForm: Locator
    constructor(page: Page){
        this.page = page
        this.usingTheGridForm = page.locator('nb-card', {hasText:"Using the Grid"})
    }
    async submitUsingTheGridFormWithCredentialsAndSelectOption(email: string, password: string, optionText: string){
        await this.usingTheGridForm.getByRole('textbox', {name:"Email"}).fill(email)
        await this.usingTheGridForm.getByRole('textbox', {name:"Password"}).fill(password)
        await this.usingTheGridForm.getByRole('radio', {name:optionText}).check({force:true})
        await this.usingTheGridForm.getByRole('button').click()
    }
}