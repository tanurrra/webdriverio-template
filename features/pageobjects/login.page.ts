import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get signInEmailInput () { return $('(//*[@name="logonId"])[2]') }
    get signInPasswordInput () { return $('(//div[contains(@class,"login__password")]/input[@name="logonPassword"])[2]') }
    get signInButton () { return $('(//button[contains(@class, "login__submit")])[2]') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username: string, password: string) {
        await (await this.signInEmailInput).setValue(username);
        await (await this.signInPasswordInput).setValue(password);
        await (await this.signInButton).click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

export default new LoginPage();
