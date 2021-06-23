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

    clickOnMenuBtn () {
        this.menuBtn.waitForExist({timeout: 60000});
        this.menuBtn.click();
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
        this.taxAndNextOfKinSection.waitForExist({timeout: 60000});
        this.taxAndNextOfKinSection.click();
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
}
module.exports = new sectionScreen();