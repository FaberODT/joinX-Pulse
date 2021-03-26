const { assert, expect } = require('chai');
const apiScreen = require('../helper/setupUser');
const loginScreen = require('../pageobjects/login.screen');
const dashboardScreen = require('../pageobjects/dashBoard.screen');
const nmcScreen = require('../pageobjects/nmc.screen');
const sectionScreen = require('../pageobjects/sections.screen');
const trainingScreen = require('../pageobjects/training.screen');

describe('verify the google browser page', () => {
    // it('to verify the title of google page', () => {
    //     browser.url("https://www.google.com");
    //     expect(browser.getTitle()).to.equal("Google");
    // });

    // it('Update NMC section & check section status', () => {
    //     //following will clear the worker's profile
    //     apiScreen.deleteUserData();
    //     browser.pause(2000);
    //     //following will import worker's profile
    //     apiScreen.getFaberAuthToken();
    //     browser.pause(2000);
    //     apiScreen.getJoinPulseAuthToken();
    //     browser.pause(2000);
    //     apiScreen.updateUserInformation();
    //     browser.pause(2000);
    //     console.log("Worker's profile imported");

    //     // //following will open browser and load the url
    //     browser.url("https://e2e.joinpulse.co.uk");

    //     // //following will perform login 
    //     loginScreen.loginIntoSite("fabertester+iqx_e6_midwives_mobileweb_chrome@gmail.com","Password123");

    //     // //following will assert dashboard screen
    //     dashboardScreen.assertDashboardLbl();

    //     //following will click on NMC Section 
    //     dashboardScreen.clickOnNMCCheckSection();

    //     //following will assert that user is on NMC Checking page
    //     nmcScreen.assertNMCCheckPageHeader();

    //     //following will enter value into NMC Pin text box
    //     nmcScreen.enterNMCPinValue();

    //     //following will click on Save and Continue button
    //     nmcScreen.clickOnSaveAndContinueBtn();
    //     browser.pause(5000);

    //     sectionScreen.clickOnMenuBtn();
    //     sectionScreen.clickOnProfileMenuOption();

    //     //following will change the Section back to NMC Checking
    //     sectionScreen.clickOnNMCSection();

    //     browser.pause(5000);
    //     //following will assert that user is back on NMC Checking page
    //     nmcScreen.assertNMCCheckPageHeader();

    //     //following will assert status of the NMC Checking page
    //     nmcScreen.assertNMCSectionStatus();
    // });

    it('add certificate to training section', () => {
        //following will open browser and load the url
        browser.url("https://e2e.joinpulse.co.uk");

        //following will perform login 
        loginScreen.loginIntoSite("fabertester+iqx_e6_midwives_mobileweb_chrome@gmail.com","Password123");

        // //following will assert dashboard screen
        dashboardScreen.assertDashboardLbl();


        sectionScreen.clickOnMenuBtn();
        sectionScreen.clickOnProfileMenuOption();

        //following will click on Training section
        sectionScreen.clickOnTrainingSection();

        //following will assert training screen
        trainingScreen.assertTrainingPageHeader();

        //following will click on Yes radio button
        trainingScreen.clickOnYesRadioBtn();

        //following will set up certificate
        trainingScreen.clickOnCertificateTypeDrd();
        trainingScreen.clickOnALSILSOption();
        trainingScreen.uploadFile1();


        //following will set up another certificate 
        trainingScreen.clickOnAddAnotherBtn();
        // browser.pause(50000);
        trainingScreen.clickOnCertificateTypeDrd1();
        trainingScreen.clickOnCounterFraudOption();
        // trainingScreen.uploadFile2();

        browser.pause(5000);

        //following will click on Save and Continue button
        trainingScreen.clickOnSaveAndContinueBtn();
    });
});