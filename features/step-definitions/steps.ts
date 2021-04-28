import { Given, When, Then } from '@cucumber/cucumber';

import LoginPage from '../pageobjects/login.page';
import HomePage from '../pageobjects/home.page';

const pages = {
    login: LoginPage
}

Given(/^I am on locale (\w+) home page with forced accepted cookies$/, async (locale) => {
    await pages[locale].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});
