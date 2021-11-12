require('dotenv').config();
const { assert, expect } = require('chai');
const apiScreen = require('../helper/setupUser');
const loginScreen = require('../pageobjects/login.screen');
const dashboardScreen = require('../pageobjects/dashBoard.screen');
const sectionScreen = require('../pageobjects/sections.screen');
const personalDetailScreen = require('../pageobjects/personalDetails.screen');

describe('verify the google browser page', () => {
    beforeEach('Login functions only', () => {
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
    });

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

    it('Verify auto save after updating Lastname value', () => {
        //following will click on Personal Detail section
        sectionScreen.clickOnPersonalDetailsSection();

        //following will assert the Personal Detail section header
        personalDetailScreen.assertPersonaDetailsPageLbl();

        //following will update the last name value
        personalDetailScreen.enterLastName();

        //following will assert the notification message on screen
        personalDetailScreen.assertChangesSavedNotification();

        //following will click on "Professional Details" section
        sectionScreen.clickOnMenuBtn();

        //following will click on Grade and Employer section
        sectionScreen.clickOnGradeAndEmployerSection();
        browser.pause(3000);

        //following will again go back to Personal Detail section to verify updated value
        sectionScreen.clickOnMenuBtn();
        //following will click on Personal details section
        sectionScreen.clickOnPersonalDetailsSection();

        //following will assert the Last Name value
        personalDetailScreen.assertLastNameValue()
    });

    it('Verify auto save after updating Date value', () => {
        //following will click on Personal Detail section
        sectionScreen.clickOnPersonalDetailsSection();

        //following will assert the Personal Detail section header
        personalDetailScreen.assertPersonaDetailsPageLbl();

        //following will update the Date of birth value
        personalDetailScreen.enterDateOfBirth();

        //following will assert the notification message on screen
        personalDetailScreen.assertChangesSavedNotification();

        //following will click on "Professional Details" section
        sectionScreen.clickOnMenuBtn();

        //following will click on Grade and Employer section
        sectionScreen.clickOnGradeAndEmployerSection();
        browser.pause(3000);

        //following will again go back to Personal Detail section to verify updated value
        sectionScreen.clickOnMenuBtn();
        //following will click on Personal details section
        sectionScreen.clickOnPersonalDetailsSection();

        //following will assert the Date of birth value
        personalDetailScreen.assertDateOfBirthValue();
    });

    it('Verify auto save after updating gender value', () => {
        //following will click on Personal Detail section
        sectionScreen.clickOnPersonalDetailsSection();

        //following will assert the Personal Detail section header
        personalDetailScreen.assertPersonaDetailsPageLbl();

        //following will update the Date of birth value
        personalDetailScreen.switchGender();

        //following will assert the notification message on screen
        personalDetailScreen.assertChangesSavedNotification();

        //following will click on "Professional Details" section
        sectionScreen.clickOnMenuBtn();

        //following will click on Grade and Employer section
        sectionScreen.clickOnGradeAndEmployerSection();
        browser.pause(3000);

        //following will again go back to Personal Detail section to verify updated value
        sectionScreen.clickOnMenuBtn();
        //following will click on Personal details section
        sectionScreen.clickOnPersonalDetailsSection();

        //following will assert the gender value
        personalDetailScreen.assertGenderValue();
    });

    it('Verify auto save after updating Mobile number value', () => {
        //following will click on Personal Detail section
        sectionScreen.clickOnPersonalDetailsSection();

        //following will assert the Personal Detail section header
        personalDetailScreen.assertPersonaDetailsPageLbl();

        //following will update the Mobile number value
        personalDetailScreen.enterMobile();

        //following will assert the notification message on screen
        personalDetailScreen.assertChangesSavedNotification();

        //following will click on "Professional Details" section
        sectionScreen.clickOnMenuBtn();

        //following will click on Grade and Employer section
        sectionScreen.clickOnGradeAndEmployerSection();
        browser.pause(3000);

        //following will again go back to Personal Detail section to verify updated value
        sectionScreen.clickOnMenuBtn();
        //following will click on Personal details section
        sectionScreen.clickOnPersonalDetailsSection();

        //following will assert the Mobile value
        personalDetailScreen.assertMobileValue
    });

    it('Verify auto save after updating Address line 1 value', () => {
        //following will click on Personal Detail section
        sectionScreen.clickOnPersonalDetailsSection();

        //following will assert the Personal Detail section header
        personalDetailScreen.assertPersonaDetailsPageLbl();

        //following will update the Address line 1 value
        personalDetailScreen.enterAddressLine1();

        //following will assert the notification message on screen
        personalDetailScreen.assertChangesSavedNotification();
        
        //following will click on "Professional Details" section
        sectionScreen.clickOnMenuBtn();

        //following will click on Grade and Employer section
        sectionScreen.clickOnGradeAndEmployerSection();
        browser.pause(3000);

        //following will again go back to Personal Detail section to verify updated value
        sectionScreen.clickOnMenuBtn();
        //following will click on Personal details section
        sectionScreen.clickOnPersonalDetailsSection();

        //following will assert the Address line 1 value
        personalDetailScreen.assertAddressLine1Value();
    });
});