const { assert, expect } = require('chai');
const apiScreen = require('../helper/setupUser');
const loginScreen = require('../pageobjects/login.screen');
const dashboardScreen = require('../pageobjects/dashBoard.screen');
const nmcScreen = require('../pageobjects/nmc.screen');
const sectionScreen = require('../pageobjects/sections.screen');
const trainingScreen = require('../pageobjects/training.screen');

describe('verify the google browser page', () => {
    it('add certificate to training section - using API', () => {
        //following will fetch the acacium Auth Token
        apiScreen.getFaberAuthToken();
        browser.pause(5000);

        //following will fetch the JoinPulse Auth token
        apiScreen.getJoinPulseAuthToken();
        browser.pause(5000);

        //following will upload the certificate for the training section
        apiScreen.uploadFileForTrainingSection();
        browser.pause(5000);

        //following will save and continue the training section with all mandate details
        apiScreen.saveAndContinueTrainingSection();
        browser.pause(10000);

        //following will open browser and load the url
        browser.url("https://e2e.joinpulse.co.uk");

        //following will perform login 
        loginScreen.loginIntoSite("fabertester+nimesh001-e2e@gmail.com","Password123");

        // //following will assert dashboard screen
        dashboardScreen.assertDashboardLbl();

        //following will click on Menu button (Hamburger menu)
        sectionScreen.clickOnMenuBtn();
        sectionScreen.clickOnProfileMenuOption();
        sectionScreen.clickOnTrainingSection();
        
        //following will assert training screen
        trainingScreen.assertTrainingPageHeader();

        //following will assert the Status of the Training Section
        trainingScreen.assertTrainingSectionStatus();
    });

    it('add certificate to training section - traditional automation way', () => {
        
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
        trainingScreen.clickOnCertificateTypeDrd1();
        trainingScreen.clickOnCounterFraudOption();
        trainingScreen.uploadFile2();

        //following will click on Save and Continue button
        trainingScreen.clickOnSaveAndContinueBtn();
    });
});