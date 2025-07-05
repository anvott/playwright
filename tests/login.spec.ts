import { test } from '@playwright/test'
import { LoginPage } from '../page-objects/LoginPage'
import { DashboardPage } from '../page-objects/DashboardPage'

test.describe('Login flow', () => {
    test('Login with valid credential', async({page}) => { 
        const loginPage = new LoginPage(page);
        const dashboardPage = new DashboardPage(page);

        await loginPage.navigateTo('https://www.saucedemo.com/')
        await loginPage.login('standard_user', 'secret_sauce')
        await dashboardPage.expectWelcome('Products')

    })
})