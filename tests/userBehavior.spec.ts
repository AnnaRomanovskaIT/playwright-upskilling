import {test} from '@playwright/test'

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