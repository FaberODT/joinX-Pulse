const { assert, expect } = require('chai');
const apiScreen = require('../helper/setupUser');
const loginScreen = require('../pageobjects/login.screen');
const dashboardScreen = require('../pageobjects/dashBoard.screen');
const sectionScreen = require('../pageobjects/sections.screen');
const taxAndNextOfKinScreen = require('../pageobjects/taxAndNextOfKin.screen');


describe('verify the google browser page', () => {
    it('to verify the title of google page', () => {
        //following will import worker's profile
        apiScreen.getFaberAuthToken();
        browser.pause(10000);
        apiScreen.getJoinPulseAuthToken();
        browser.pause(10000);
        apiScreen.uploadFileForTrainingSection();
        browser.pause(10000);
        // apiScreen.dataFromDataService();
        // browser.pause(5000);
        // apiScreen.uploadFileForTrainingSection();
        // browser.pause(10000);
        apiScreen.saveAndContinueTrainingSection();
        browser.pause(10000);

        // //following will open browser and load the url
        // browser.url("https://e2e.joinpulse.co.uk");

        // //following will perform login 
        // loginScreen.loginIntoSite("fabertester+nimesh001-e2e@gmail.com","Password123");

        // // //following will assert dashboard screen
        // dashboardScreen.assertDashboardLbl();

        // sectionScreen.clickOnMenuBtn();
        // sectionScreen.clickOnProfileMenuOption();
        // sectionScreen.clickOnTrainingSection();
        // browser.pause(10000);
    });

    // it('Verify Tax and next kin section with PAYE payment option', () => {
    //     //following will open browser and load the url
    //     browser.url("https://e2e.joinpulse.co.uk");

    //     //following will perform login 
    //     loginScreen.loginIntoSite("fabertester+iqx_e6_midwives_mobileweb_chrome@gmail.com","Password123");

    //     // //following will assert dashboard screen
    //     dashboardScreen.assertDashboardLbl();

    //     sectionScreen.clickOnMenuBtn();
    //     sectionScreen.clickOnProfileMenuOption();

    //     //following will click on Tax and next of kin section
    //     sectionScreen.clickOnTaxAndNextOfKinSection();

    //     //following will assert that user is on Tax and next of kin screen
    //     taxAndNextOfKinScreen.assertTaxAndNextOfKinPageHeader();

    //     //following will click on "PAYE" radio button
    //     taxAndNextOfKinScreen.clickOnPayeRadioBtn();

    //     //following will enter First Name
    //     taxAndNextOfKinScreen.enterFirstName("Nimesh");

    //     //following will enter Last Name
    //     taxAndNextOfKinScreen.enterLastName("Bhatt");

    //     //following will enter Phone number
    //     taxAndNextOfKinScreen.enterPhone("07912345678");

    //     //following will enter relation ship
    //     taxAndNextOfKinScreen.enterRelationShip("Friend");

    //     //following will click on Save and Continue button
    //     taxAndNextOfKinScreen.clickOnSaveAndContinueBtn();
    //     browser.pause(8000);

    //     sectionScreen.clickOnMenuBtn();
    //     sectionScreen.clickOnProfileMenuOption();

    //     //following will click on Tax and next of kin section
    //     sectionScreen.clickOnTaxAndNextOfKinSection();
    //     browser.pause(8000);

    //     //following will assert that user is on Tax and next of kin screen
    //     taxAndNextOfKinScreen.assertTaxAndNextOfKinPageHeader();
        
    //     //following will assert the status of the section
    //     taxAndNextOfKinScreen.assertSectionStatus();

    //     //following will assert the section values
    //     taxAndNextOfKinScreen.fetchPAYEValues();
    // });

    // it('Verify Tax and next kin section with UMBRELLA payment option', () => {
    //      //following will open browser and load the url
    //      browser.url("https://e2e.joinpulse.co.uk");

    //      //following will perform login 
    //      loginScreen.loginIntoSite("fabertester+iqx_e6_midwives_mobileweb_chrome@gmail.com","Password123");
 
    //      // //following will assert dashboard screen
    //      dashboardScreen.assertDashboardLbl();
 
    //      sectionScreen.clickOnMenuBtn();
    //      sectionScreen.clickOnProfileMenuOption();
 
    //      //following will click on Tax and next of kin section
    //      sectionScreen.clickOnTaxAndNextOfKinSection();
 
    //      //following will assert that user is on Tax and next of kin screen
    //      taxAndNextOfKinScreen.assertTaxAndNextOfKinPageHeader();
 
    //      //following will click on "UMBRELLA" radio button
    //      taxAndNextOfKinScreen.clickOnUmbrellaRadioBtn();

    //      //following will enter Umbrella Company name 
    //      taxAndNextOfKinScreen.enterUmbrellaCompanyName("Umbrella!");
 
    //      //following will enter First Name
    //      taxAndNextOfKinScreen.enterFirstName("Nimesh");
 
    //      //following will enter Last Name
    //      taxAndNextOfKinScreen.enterLastName("Bhatt");
 
    //      //following will enter Phone number
    //      taxAndNextOfKinScreen.enterPhone("07912345678");
 
    //      //following will enter relation ship
    //      taxAndNextOfKinScreen.enterRelationShip("Friend");
 
    //      //following will click on Save and Continue button
    //      taxAndNextOfKinScreen.clickOnSaveAndContinueBtn();
    //      browser.pause(8000);
 
    //      sectionScreen.clickOnMenuBtn();
    //      sectionScreen.clickOnProfileMenuOption();
 
    //      //following will click on Tax and next of kin section
    //      sectionScreen.clickOnTaxAndNextOfKinSection();
    //      browser.pause(8000);
 
    //      //following will assert that user is on Tax and next of kin screen
    //      taxAndNextOfKinScreen.assertTaxAndNextOfKinPageHeader();
         
    //      //following will assert the status of the section
    //      taxAndNextOfKinScreen.assertSectionStatus();
 
    //      //following will fetch Umbrella company name
    //      taxAndNextOfKinScreen.fetchUmbrellaCompanyName();

    //      //following will assert the section values
    //      taxAndNextOfKinScreen.fetchPAYEValues();
    // });

    // it('Verify Tax and next kin section with LIMITED COMPANY payment option', () => {
    //     //following will open browser and load the url
    //     browser.url("https://e2e.joinpulse.co.uk");

    //     //following will perform login 
    //     loginScreen.loginIntoSite("fabertester+iqx_e6_midwives_mobileweb_chrome@gmail.com","Password123");

    //     // //following will assert dashboard screen
    //     dashboardScreen.assertDashboardLbl();

    //     sectionScreen.clickOnMenuBtn();
    //     sectionScreen.clickOnProfileMenuOption();

    //     //following will click on Tax and next of kin section
    //     sectionScreen.clickOnTaxAndNextOfKinSection();

    //     //following will assert that user is on Tax and next of kin screen
    //     taxAndNextOfKinScreen.assertTaxAndNextOfKinPageHeader();

    //     //following will click on Limited Company radio button
    //     taxAndNextOfKinScreen.clickOnLimitedCompanyRadioBtn();

    //     //following will upload certificate for Incorporation
    //     taxAndNextOfKinScreen.uploadFileForIncorporation();

    //     //following will upload certificate for Business and Bank account
    //     taxAndNextOfKinScreen.uploadFileForAccount();

    //     //following will enter First Name for Next of Kin
    //     taxAndNextOfKinScreen.enterFirstName("Nimesh");

    //     //following will enter Last Name
    //     taxAndNextOfKinScreen.enterLastName("Bhatt");
    
    //     //following will enter Phone number
    //     taxAndNextOfKinScreen.enterPhone("07912345678");

    //     //following will enter relation ship
    //     taxAndNextOfKinScreen.enterRelationShip("Friend");

    //     //following will click on Save and Continue button
    //     taxAndNextOfKinScreen.clickOnSaveAndContinueBtn();
    //     browser.pause(8000);

    //     sectionScreen.clickOnMenuBtn();
    //     sectionScreen.clickOnProfileMenuOption();
 
    //     //following will click on Tax and next of kin section
    //     sectionScreen.clickOnTaxAndNextOfKinSection();
    //     browser.pause(8000);
 
    //     //following will assert that user is on Tax and next of kin screen
    //     taxAndNextOfKinScreen.assertTaxAndNextOfKinPageHeader();
        
    //     //following will assert the status of the section
    //     taxAndNextOfKinScreen.assertSectionStatus();

    //     //following will assert the section values
    //     taxAndNextOfKinScreen.fetchPAYEValues();
    // });
});