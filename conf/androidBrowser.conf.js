const {config} = require('./mobileBrowserWDIO.conf');
const androidInfo = require('./android.info');

// appium capabilities
config.capabilities = [
    {
        platformName: 'Android',
        browserName: 'chrome',
        // appPackage: 'com.android.chrome',
        // automationName: 'uiautomator2',
        // maxInstances: 1,
        deviceName: 'any',
        platformVersion: '10.0',
        autoGrantPermissions: true,
        noReset: false,
        chromedriverExecutable: 'C:/Users/Bhattn/Documents/Projects/Development/ICS_Stuff/Automation/JoinX/joinX-Kings/chromedrivers/chromedriver.exe'
    }
];

config.specs = [
    './test/specs/**/taxAndNextOfKin.e2e.js'
];

exports.config = config;