const { assert, expect } = require('chai');
const apiScreen = require('../helper/setupUser');
const loginScreen = require('../pageobjects/login.screen');
const dashboardScreen = require('../pageobjects/dashBoard.screen');
const sectionScreen = require('../pageobjects/sections.screen');
const dbsScreen = require('../pageobjects/dbs.screen');

describe('verify the google browser page', () => {
    // it('to verify the title of google page', () => {
    //     browser.url("https://www.google.com");
    //     expect(browser.getTitle()).to.equal("Google");
    // });

    it('Update NMC section & check section status', () => {
        // // following will clear the worker's profile
        // apiScreen.deleteUserData();
        // browser.pause(2000);
        // //following will import worker's profile
        // apiScreen.getFaberAuthToken();
        // browser.pause(2000);
        // apiScreen.getJoinPulseAuthToken();
        // browser.pause(2000);
        // apiScreen.updateUserInformation();
        // browser.pause(2000);
        // console.log("Worker's profile imported");

        // //following will open browser and load the url
        browser.url("https://e2e.joinpulse.co.uk");

        // //following will perform login 
        loginScreen.loginIntoSite("fabertester+iqx_e6_midwives_mobileweb_chrome@gmail.com","Password123");

        // //following will assert dashboard screen
        dashboardScreen.assertDashboardLbl();

        sectionScreen.clickOnMenuBtn();
        sectionScreen.clickOnProfileMenuOption();

        //following will click on DBS Details section
        sectionScreen.clickOnDBSDetailsSection();

        //following will assert that user is on DBS details screen
        dbsScreen.assertDBSPageHeader();

        //following will click on Yes radio button
        dbsScreen.clickOnYesRadioBtn();

        //following will enter value into DBS Certificate number text box
        dbsScreen.enterCertificateValue();

        //following will upload certificate 
        dbsScreen.uploadFile1();

        //following will click on Save and Continue button
        dbsScreen.clickOnSaveAndContinueBtn();
        browser.pause(5000);

        sectionScreen.clickOnMenuBtn();
        sectionScreen.clickOnProfileMenuOption();
        
        //following will click on DBS Details section
        sectionScreen.clickOnDBSDetailsSection();

        browser.pause(5000);
        //following will assert that user is on DBS details screen
        dbsScreen.assertDBSPageHeader();

        //following will assert the status of the DBS details section
        dbsScreen.assertDBSDetailsSectionStatus();
    });
});