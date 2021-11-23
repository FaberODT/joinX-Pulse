const { assert, expect } = require('chai');
require('dotenv').config();
const apiScreen = require('../helper/setupUser');
const loginScreen = require('../pageobjects/login.screen');
const dashboardScreen = require('../pageobjects/dashBoard.screen');
const sectionScreen = require('../pageobjects/sections.screen');
const additionalDocumentScreen = require('../pageobjects/additionalDocument.screen');

describe('verify the Additional Document section', () => {
    
    afterEach('Logout functions only', () => {
        //following will perform logout operation
        sectionScreen.clickOnMenuBtn();
        //following will click on Profile menu option
        sectionScreen.clickOnProfileMenuOption();

        //following will click on Logout button
        sectionScreen.clickOnLogoutBtn();

        //following will assert login screen
        loginScreen.assertLoginScreen();
    });

    it('Verify bank details link', () => {
        //following will open browser and load the url
        browser.url(process.env.E2EPORTAL);

        //following will perform login 
        loginScreen.loginIntoSite(process.env.USER, process.env.PASSWORD);

        //following will assert dashboard screen
        dashboardScreen.assertDashboardLbl();

        //following will click on Menu button (Hamburger menu icon)
        sectionScreen.clickOnMenuBtn();

        //following will click on Profile menu option
        sectionScreen.clickOnProfileMenuOption();

        //following will click on Additional Document section
        sectionScreen.clickOnAdditionalDocumentSection();

        //following will assert Additional Document screen
        additionalDocumentScreen.assertAdditionalDocumentPageHeader();

        //following will assert the Bank Details panel
        additionalDocumentScreen.assertBankLink();
    });

    it('Verify added ID Photo badge', () => {
        //following will fetch the acacium Auth Token
        apiScreen.getFaberAuthToken();
        browser.pause(5000);

        //following will fetch the JoinPulse Auth token
        apiScreen.getJoinPulseAuthToken();
        browser.pause(5000);

        //following will upload the certificate for the Photo ID Badge
        apiScreen.uploadCertificateForAdditionalDocument();
        browser.pause(15000);

        //following will save and continue the Additional Document section with all mandate details
        apiScreen.saveAndContinueAdditionalDocumentSection();
        browser.pause(15000);

        //following will open browser and load the url
        browser.url(process.env.E2EPORTAL);

        //following will perform login 
        loginScreen.loginIntoSite(process.env.USER, process.env.PASSWORD);

        //following will assert dashboard screen
        dashboardScreen.assertDashboardLbl();

        //following will click on Menu button (Hamburger menu icon)
        sectionScreen.clickOnMenuBtn();

        //following will click on Profile menu option
        sectionScreen.clickOnProfileMenuOption();

        //following will click on Additional Document section
        sectionScreen.clickOnAdditionalDocumentSection();

        //following will assert Additional Document screen
        additionalDocumentScreen.assertAdditionalDocumentPageHeader();

        //following will assert uploaded photo ID badge
        additionalDocumentScreen.assertUploadedCertificate();
    });
});