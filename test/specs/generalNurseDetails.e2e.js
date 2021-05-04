const { assert, expect } = require('chai');
const apiScreen = require('../helper/setupUser');
const loginScreen = require('../pageobjects/login.screen');
const dashboardScreen = require('../pageobjects/dashBoard.screen');
const sectionScreen = require('../pageobjects/sections.screen');
const generalNurseDetailsScreen = require('../pageobjects/generalNurseDetails.screen');

describe('verify the google browser page', () => {
    // it('to verify the title of google page', () => {
    //     browser.url("https://www.google.com");
    //     expect(browser.getTitle()).to.equal("Google");
    // });

    it('Verify details of Grade and Employer section', () => {
        //following will clear the worker's profile
        apiScreen.deleteUserData();
        browser.pause(2000);
        //following will import worker's profile
        apiScreen.getFaberAuthToken();
        browser.pause(2000);
        apiScreen.getJoinPulseAuthToken();
        browser.pause(2000);
        apiScreen.updateUserInformation();
        browser.pause(2000);
        console.log("Worker's profile imported");

        // //following will open browser and load the url
        browser.url("https://e2e.joinpulse.co.uk");

        // //following will perform login 
        loginScreen.loginIntoSite("fabertester+iqx_e6_midwives_mobileweb_chrome@gmail.com","Password123");

        // //following will assert dashboard screen
        dashboardScreen.assertDashboardLbl();

        sectionScreen.clickOnMenuBtn();
        sectionScreen.clickOnProfileMenuOption();

        //following will click on Peronal Details section 
        sectionScreen.clickOnGeneralNurseDetailsSection();
        browser.pause(5000);

        //following will assert that useris on General Nurse details section
        generalNurseDetailsScreen.assertGeneralNurseDetailsPageLbl();

        //following will assert the statusof the General Nurse Details section
        generalNurseDetailsScreen.assertGeneralNurseDetailsPageStatus();

        //following will assert the General Nurse Details
        generalNurseDetailsScreen.assertGeneralNurseDetails();
        
    });
});