import Page from './page';

/**
 * sub page containing specific selectors and methods for a home page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get rootContainter () { return $('//div[@class="tab-panel__content"]//div[@class="authentication"]/../..') }
    get signInButton () { return $('//button[@data-testid="sign-in-button"]') }

    async openAuthPanel () {
        await new Promise((resolve) => setTimeout(resolve, 5000));
        this.signInButton.waitForDisplayed();
        await (await this.signInButton).click();
    }
}

export default new HomePage();
