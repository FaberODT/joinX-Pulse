const { assert, expect } = require('chai');
const apiScreen = require('../helper/setupUser');
const loginScreen = require('../pageobjects/login.screen');
const dashboardScreen = require('../pageobjects/dashBoard.screen');
const sectionScreen = require('../pageobjects/sections.screen');
const taxAndNextOfKinScreen = require('../pageobjects/taxAndNextOfKin.screen');


describe('verify the google browser page', () => {
    // it('to verify the title of google page', () => {
    //     browser.url("https://www.google.com");
    //     expect(browser.getTitle()).to.equal("Google");
    // });

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

    it('Verify Tax and next kinsection with UMBRELLA payment option', () => {
         //following will open browser and load the url
         browser.url("https://e2e.joinpulse.co.uk");

         //following will perform login 
         loginScreen.loginIntoSite("fabertester+iqx_e6_midwives_mobileweb_chrome@gmail.com","Password123");
 
         // //following will assert dashboard screen
         dashboardScreen.assertDashboardLbl();
 
         sectionScreen.clickOnMenuBtn();
         sectionScreen.clickOnProfileMenuOption();
 
         //following will click on Tax and next of kin section
         sectionScreen.clickOnTaxAndNextOfKinSection();
 
         //following will assert that user is on Tax and next of kin screen
         taxAndNextOfKinScreen.assertTaxAndNextOfKinPageHeader();
 
         //following will click on "UMBRELLA" radio button
         taxAndNextOfKinScreen.clickOnUmbrellaRadioBtn();

         //following will enter Umbrella Company name 
         taxAndNextOfKinScreen.enterUmbrellaCompanyName("Umbrella!");
 
         //following will enter First Name
         taxAndNextOfKinScreen.enterFirstName("Nimesh");
 
         //following will enter Last Name
         taxAndNextOfKinScreen.enterLastName("Bhatt");
 
         //following will enter Phone number
         taxAndNextOfKinScreen.enterPhone("07912345678");
 
         //following will enter relation ship
         taxAndNextOfKinScreen.enterRelationShip("Friend");
 
         //following will click on Save and Continue button
         taxAndNextOfKinScreen.clickOnSaveAndContinueBtn();
         browser.pause(8000);
 
         sectionScreen.clickOnMenuBtn();
         sectionScreen.clickOnProfileMenuOption();
 
         //following will click on Tax and next of kin section
         sectionScreen.clickOnTaxAndNextOfKinSection();
         browser.pause(8000);
 
         //following will assert that user is on Tax and next of kin screen
         taxAndNextOfKinScreen.assertTaxAndNextOfKinPageHeader();
         
         //following will assert the status of the section
         taxAndNextOfKinScreen.assertSectionStatus();
 
         //following will fetch Umbrella company name
         taxAndNextOfKinScreen.fetchUmbrellaCompanyName();

         //following will assert the section values
         taxAndNextOfKinScreen.fetchPAYEValues();
    });
});