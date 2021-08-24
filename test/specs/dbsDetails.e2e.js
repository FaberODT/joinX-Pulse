const { assert, expect } = require('chai');
const apiScreen = require('../helper/setupUser');
const loginScreen = require('../pageobjects/login.screen');
const dashboardScreen = require('../pageobjects/dashBoard.screen');
const sectionScreen = require('../pageobjects/sections.screen');
const dbsScreen = require('../pageobjects/dbs.screen');

describe('verify the DBS section', () => {
    it('to verify the title of the DBS section screen after saving it', () => {
        //following will fetch the acacium Auth Token
        apiScreen.getFaberAuthToken();
        browser.pause(5000);

        //following will fetch the JoinPulse Auth token
        apiScreen.getJoinPulseAuthToken();
        browser.pause(5000);

        //following will upload the certificate for the training section
        apiScreen.uploadCertificateForDBSSection();
        browser.pause(15000);

        //following will save and continue the training section with all mandate details
        apiScreen.saveAndContinueDBSSection();
        browser.pause(5000);

        //following will open browser and load the url
        browser.url("https://e2e.joinpulse.co.uk");

        //following will perform login 
        loginScreen.loginIntoSite("fabertester+nimesh001-e2e@gmail.com","Password123");

        // //following will assert dashboard screen
        dashboardScreen.assertDashboardLbl();

        //following will click on Menu button (Hamburger menu)
        sectionScreen.clickOnMenuBtn();

        //following will click on Profile menu option 
        sectionScreen.clickOnProfileMenuOption();

        //following will click on DBS Details section
        sectionScreen.clickOnDBSDetailsSection();

        //following will assert that user is on DBS details screen
        dbsScreen.assertDBSPageHeader();

        //following will assert the status of the DBS details section
        dbsScreen.assertDBSDetailsSectionStatus();
        
        //following will perform logout operation
        sectionScreen.clickOnMenuBtn();
        sectionScreen.clickOnLogoutBtn();

        //following will assert login screen
        loginScreen.assertLoginScreen();
    });

    // it('Update NMC section & check section status', () => {
    //     // //following will open browser and load the url
    //     browser.url("https://e2e.joinpulse.co.uk");

    //     // //following will perform login 
    //     loginScreen.loginIntoSite("fabertester+iqx_e6_midwives_mobileweb_chrome@gmail.com","Password123");

    //     // //following will assert dashboard screen
    //     dashboardScreen.assertDashboardLbl();

    //     sectionScreen.clickOnMenuBtn();
    //     sectionScreen.clickOnProfileMenuOption();

    //     //following will click on DBS Details section
    //     sectionScreen.clickOnDBSDetailsSection();

    //     //following will assert that user is on DBS details screen
    //     dbsScreen.assertDBSPageHeader();

    //     //following will click on Yes radio button
    //     dbsScreen.clickOnYesRadioBtn();

    //     //following will enter value into DBS Certificate number text box
    //     dbsScreen.enterCertificateValue();

    //     //following will upload certificate 
    //     dbsScreen.uploadFile1();

    //     //following will click on Save and Continue button
    //     dbsScreen.clickOnSaveAndContinueBtn();
    //     browser.pause(5000);

    //     sectionScreen.clickOnMenuBtn();
    //     sectionScreen.clickOnProfileMenuOption();
        
    //     //following will click on DBS Details section
    //     sectionScreen.clickOnDBSDetailsSection();

    //     browser.pause(5000);
    //     //following will assert that user is on DBS details screen
    //     dbsScreen.assertDBSPageHeader();

    //     //following will assert the status of the DBS details section
    //     dbsScreen.assertDBSDetailsSectionStatus();
    // });
});