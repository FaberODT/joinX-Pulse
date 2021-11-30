const expect = require("chai").expect;
global.tag = process.argv[3];

class sectionScreen {

    get menuBtn () { return $('//div[@id="mobile-nav-button"]')}

    get profileMenuOption () { return $('//h4[@id="nav-item-profile"]')}

    get personalDetailsSection  () { return $('//div[@id="navigation-section-list-item-personal-details"]')}

    get gradeAndEmployerSection () { return $('//div[@id="navigation-section-list-item-grade-and-employer"]')}

    get generalNurseDetailsSection () { return $('//div[@id="navigation-section-list-item-general-nurse-details"]')}

    get nmcSection () { return $('//div[@id="navigation-section-list-item-nmc-check"]')}

    get trainingSection () { return $('//div[@id="navigation-section-list-item-training"]')}

    get taxAndNextOfKinSection () { return $('//div[@id="navigation-section-list-item-tax-and-next-of-kin"]')}

    get dbsDetailsSection () { return $('//div[@id="navigation-section-list-item-dbs-details"]')}

    get referenceSection () { return $('//div[@id="navigation-section-list-item-references"]')}

    get rightToWorkChecksSection () { return $('//div[@id="navigation-section-list-item-right-to-work-checks"]')}

    get additionalDocumentSection () { return $('//div[@id="navigation-section-list-item-additional-documents"]')}

    get workHistorySection () { return $('//div[@id="navigation-section-list-item-work-history"]')}

    get interviewSection () { return $('//div[@id="navigation-section-list-item-interview"]')}

    get occupationalHealthSection () { return $('//div[@id="navigation-section-list-item-occupational-health"]')}

    get logoutBtn () { return $('//button[@id="nav-item-logout"]')}

    get discardChangesBtn () { return $('//button[@id="discard-changes-button"]')}

    clickOnMenuBtn () {
        this.menuBtn.waitForExist({timeout: 60000});
        this.menuBtn.click();
        browser.pause(1000);
    }

    clickOnLogoutBtn () { 
        this.logoutBtn.waitForExist({timeout: 60000});
        this.logoutBtn.click();
    }

    clickOnDiscardChangesBtn () {
        this.discardChangesBtn.waitForExist({timeout: 60000});
        this.discardChangesBtn.click();
    }

    clickOnProfileMenuOption () {
        browser.pause(1000);
        this.profileMenuOption.waitForExist({timeout: 60000});
        this.profileMenuOption.click();
        browser.pause(3000);
    }

    clickOnPersonalDetailsSection () { 
        this.personalDetailsSection.waitForExist({timeout: 60000});
        this.personalDetailsSection.click();
    }

    clickOnGradeAndEmployerSection () { 
        this.gradeAndEmployerSection.waitForExist({timeout: 60000});
        this.gradeAndEmployerSection.click();
    }

    clickOnGeneralNurseDetailsSection () { 
        this.generalNurseDetailsSection.waitForExist({timeout: 60000});
        this.generalNurseDetailsSection.click();
    }

    clickOnNMCSection () {
        this.nmcSection.waitForExist({timeout: 60000});
        this.nmcSection.click();
    }

    clickOnTrainingSection () {
        this.trainingSection.waitForExist({timeout: 60000});
        this.trainingSection.click();
    }

    clickOnTaxAndNextOfKinSection () { 
        // browser.touchAction([
        //     { action: 'press', x: 1000, y: 2000 },
        //     { action: 'moveTo', x: 1000, y: 1000 },
        //     'release'
        // ]);
        this.taxAndNextOfKinSection.scrollIntoView();
        browser.pause(1000);
        this.taxAndNextOfKinSection.waitForExist({timeout: 60000});
        this.taxAndNextOfKinSection.click();
    }

    clickOnAdditionalDocumentSection () {
        this.additionalDocumentSection.scrollIntoView();
        browser.pause(1000);
        this.additionalDocumentSection.waitForExist({timeout: 60000});
        this.additionalDocumentSection.click();
    }

    clickOnDBSDetailsSection () {
        this.dbsDetailsSection.waitForExist({timeout: 60000});
        this.dbsDetailsSection.click();
    }

    clickOnReferenceSection () {
        this.referenceSection.waitForExist({timeout: 60000});
        this.referenceSection.click();
    }

    clickOnRightToWorkChecksSection () {
        this.rightToWorkChecksSection.waitForExist({timeout: 60000});
        this.rightToWorkChecksSection.click();
    }

    clickOnWorkHistorySection () {
        this.workHistorySection.waitForExist({timeout: 60000});
        this.workHistorySection.click();
    }

    clickOnInterviewSection () {
        this.interviewSection.waitForExist({timeout: 60000});
        this.interviewSection.click();
    }

    clickOnOccupationalHealthSection () {
        this.occupationalHealthSection.waitForExist({timeout: 60000});
        this.occupationalHealthSection.scrollIntoView();
        browser.pause(1000);
        this.occupationalHealthSection.click();
    }
}
module.exports = new sectionScreen();