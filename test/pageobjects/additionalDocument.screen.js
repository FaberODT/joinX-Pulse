const expect = require("chai").expect;
global.tag = process.argv[3];

class additionalDocumentScreen {

    get pageHeaderLbl () { return $('//h1[@id="pageTitle"]')}

    get saveAndContinueBtn () { return $('//button[@id="saveButton"]')}

    get sectionStatus () { return $('//div[@id="statusMessageHeader"]/span')}

    get bankLinkTxtBox () { return $('//input[@name="SignBankDetailsLink"]')}

    get clearUploadedFileBtn () { return $('//mat-icon[@title="Clear"]')}

    assertAdditionalDocumentPageHeader () {
        this.pageHeaderLbl.waitForExist({timeout: 60000});
        browser.pause(3000);
        expect(this.pageHeaderLbl.getText()).to.equal("13. Additional documents");
    }

    clickOnSaveAndContinueBtn () {
        this.saveAndContinueBtn.waitForExist({timeout:60000});
        this.saveAndContinueBtn.click();
    }

    assertDBSDetailsSectionStatus () {
        this.sectionStatus.waitForExist({timeout: 60000});
        expect(this.sectionStatus.getText()).to.equal("Pending");
    }

    assertBankLink () { 
        this.bankLinkTxtBox.waitForExist({timeout: 60000});
        this.bankLinkTxtBox.scrollIntoView();
        browser.pause(1000);
        expect(this.bankLinkTxtBox.isDisplayed()).to.equal(true);
    }

    assertUploadedCertificate () {
        this.clearUploadedFileBtn.waitForExist({timeout: 60000});
        expect(this.clearUploadedFileBtn.isDisplayed()).to.equal(true);
    }
}
module.exports = new additionalDocumentScreen();