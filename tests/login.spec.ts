import { test } from '@playwright/test'
import { LoginPage } from '../page-objects/LoginPage'
import { DashboardPage } from '../page-objects/DashboardPage'
import loginData from '../tests/data/login.json'

test.describe('Login flow - An test', () => {
    loginData.forEach(({username, password}) => {       
    test(`'Login with valid credential' "${username}", "${password}"`, async({page}) => { 
        const loginPage = new LoginPage(page);
        const dashboardPage = new DashboardPage(page);
        const BASE_URL = process.env.BASE_URL || '';
        await loginPage.navigateTo(`${BASE_URL}/login`)
        console.log(BASE_URL)
        await loginPage.login(username, password)
        await dashboardPage.expectWelcome('Products')
    })
})
})