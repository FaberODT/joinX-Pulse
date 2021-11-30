require('dotenv').config();
const { assert, expect } = require('chai');
const apiScreen = require('../helper/setupUser');
const loginScreen = require('../pageobjects/login.screen');
const dashboardScreen = require('../pageobjects/dashBoard.screen');
const sectionScreen = require('../pageobjects/sections.screen');
const personalDetailScreen = require('../pageobjects/personalDetails.screen');
const gradeAndEmployerScreen = require('../pageobjects/gradeAndEmployer.screen');
const generalNurseDetailsScreen = require('../pageobjects/generalNurseDetails.screen');
const nmcCheckScreen = require('../pageobjects/nmc.screen');
const dbsScreen = require('../pageobjects/dbs.screen');
const rightToWorkChecksScreen = require('../pageobjects/rightToWorkChecks.screen');
const workHistoryScreen = require('../pageobjects/workHistory.screen');
const referenceScreen = require('../pageobjects/reference.screen');
const interviewScreen = require('../pageobjects/interview.screen');
const trainingScreen = require('../pageobjects/training.screen');
const taxAndNextOfKinScreen = require('../pageobjects/taxAndNextOfKin.screen');
const occupationalHealthScreen = require('../pageobjects/occupationalHealth.screen');

describe('verify the google browser page', () => {
    beforeEach('Login functions only', () => {
        //following will open browser and load the url
        browser.url(process.env.E2EPORTAL);

        //following will perform login 
        loginScreen.loginIntoSite(process.env.STATUS_USER, process.env.PASSWORD);

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

    it('Verify status of section Personal Details', () => {
        //following will click on Personal Details section
        sectionScreen.clickOnPersonalDetailsSection();

        //following will verify Personal Details screen
        personalDetailScreen.assertPersonaDetailsPageLbl();

        //following will verify the status of the Personal detail section
        personalDetailScreen.assertPersonaDetailsPageStatus();
    });

    it('Verify status of section Grade and Employer', () => {
        //following will click on Grade and Employer section
        sectionScreen.clickOnGradeAndEmployerSection();

        //following will verify Gradeand Employer screen
        gradeAndEmployerScreen.assertGradeAndEmployerPageLbl();
        
        //following will verify the status of the Grade and Employer section
        gradeAndEmployerScreen.assertGradeAndEmployerPageStatus();
    });

    it('Verify status of section General nurse details', () => {
        //following will click on General Nurse Details section
        sectionScreen.clickOnGeneralNurseDetailsSection();

        //following will verify General Nurse details screen
        generalNurseDetailsScreen.assertGeneralNurseDetailsPageLbl();

        //following will verify the status of the General Nurse details section
        generalNurseDetailsScreen.assertGeneralNurseDetailsPageStatus();
    });

    it('Verify status of section NMC check', () => {
        //following will click on NMC Check section
        sectionScreen.clickOnNMCSection();

        //following will verify NMC Check screen
        nmcCheckScreen.assertNMCCheckPageHeader();

        //following will verify the status of the NMC Check section
        nmcCheckScreen.assertNMCSectionStatus();

        //following will verify the content message on NMC screen
        nmcCheckScreen.assertNMCMessage();
    });

    it('Verify status of section DBS details', () => {
        //following will click on DBS details section
        sectionScreen.clickOnDBSDetailsSection();

        //following will verify DBS screen
        dbsScreen.assertDBSPageHeader();

        //following will verify the status of the DBS details section
        dbsScreen.assertDBSDetailsSectionStatus();

        //following will verify the content message on DBS screen
        dbsScreen.assertDBSMsg();
    });

    it('Verify status of the section Right to Work Check', () => {
        //following will click on Right to Work check section
        sectionScreen.clickOnRightToWorkChecksSection();

        //following will verify Right to Workcheck screen
        rightToWorkChecksScreen.assertRightToWorkChecksPageHeader();

        //following will verify the status of the Right to Work check section
        rightToWorkChecksScreen.assertSectionStatus();
    });

    it('Verify status of the section Work History', () => {
        //following will click on Work History section
        sectionScreen.clickOnWorkHistorySection();

        //following will verify Work History section
        workHistoryScreen.assertWorkHistoryPageHeader();

        //following will verify the status of the Work History section
        workHistoryScreen.assertSectionStatus();

        //following will verify the content message on Work History screen
        workHistoryScreen.assertWorkHistoryMsg();
    });

    it('Verify status of the section References', () => {
        //following will click on References section
        sectionScreen.clickOnReferenceSection();

        //following will verify References section
        referenceScreen.assertReferencePageHeader();

        //following will verify the status of the Reference section
        referenceScreen.assertSectionStatus();

        //following will verify the content message on Reference screen
        referenceScreen.assertReferenceMsg();
    });

    it('Verify status of the section Interview', () => {
        //following will click on Interview section
        sectionScreen.clickOnInterviewSection();

        //following will verify Interview section
        interviewScreen.assertInterviewPageHeader();

        //following will verify the status of the Interview section
        interviewScreen.assertSectionStatus();
    });

    it('Verify status of the section Training', () => {
        //following will click on Training section
        sectionScreen.clickOnTrainingSection();

        //following will verify Training section
        trainingScreen.assertTrainingPageHeader();

        //following will verify the status of the Training section
        trainingScreen.assertTrainingSectionStatus();
    });

    it('Verify status of the section Tax and Next of Kin', () => {
        //following will click on Tax and Next of Kin section
        sectionScreen.clickOnTaxAndNextOfKinSection();

        //following will verify Tax and Next of Kin section
        taxAndNextOfKinScreen.assertTaxAndNextOfKinPageHeader();

        //following will verify the status of the Tax and Next of Kin section
        taxAndNextOfKinScreen.assertSectionStatus();
    });

    it('Verify status of the section Occupational Health', () => {
        //following will click on Occupational health section
        sectionScreen.clickOnOccupationalHealthSection();

        //following will verify Occupational health section
        occupationalHealthScreen.assertOccupationalHealthPageHeader();

        //following will verify the status of the Occupational Health section
        occupationalHealthScreen.assertSectionStatus();
    });
});