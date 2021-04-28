### Boilerplate WebdriverIO project 


## System requirements
You’ll need Node.js installed.
Install at least v12.16.1 or higher as this is the oldest active LTS version
Only releases that are or will become an LTS release are officially supported
If you don't have Node installed, we recommend installing NVM to assist managing multiple active Node.js versions. If you are using the WDIO Testrunner in sync mode you also need Python v3 or higher installed.

## Install selenium-standalone 
There are two ways of setting up your Selenium environment: as a standalone package or by installing the server and browser driver separately.

Use of existing standalone package
The simplest way to get started is to use one of the NPM selenium standalone packages like: [vvo/selenium-standalone](https://github.com/vvo/selenium-standalone). After installing it (globally) you can run your server by executing:

```bash
# Prepare selenium
NODE_TLS_REJECT_UNAUTHORIZED=0 ./node_modules/.bin/selenium-standalone install --config=./selenium.json

# Start Selenium
npm run selenium-start
```

## Install 

Please reffer to official docs https://webdriver.io/docs/gettingstarted 


### Run Some Sample Tests

To run all tests in `./features/**/*.feature` locally

```bash
npm run test
```

### Licensing
MIT