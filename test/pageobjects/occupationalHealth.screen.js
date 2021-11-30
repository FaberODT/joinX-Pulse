const expect = require("chai").expect;
global.tag = process.argv[3];

class occupationalHealthScreen {

    get pageHeaderLbl () { return $('//h1[@id="pageTitle"]')}

    get saveBtn () { return $('//button[@id="saveButton"]')}

    get sectionStatus () { return $('//div[@id="statusMessageHeader"]/span')}

    get workHistoryMsg () { return $('//div[@id="statusMessageContent"]')}

    

    assertOccupationalHealthPageHeader () {
        this.pageHeaderLbl.waitForExist({timeout: 60000});
        expect(this.pageHeaderLbl.getText()).to.equal("12. Occupational health");
    }

    clickOnSaveAndContinueBtn () {
        this.saveBtn.waitForExist({timeout: 60000});
        this.saveBtn.click();
    }

    assertSectionStatus () {
        this.sectionStatus.waitForExist({timeout: 60000});
        expect(this.sectionStatus.getText()).to.equal("Complete");
    }
}
module.exports = new occupationalHealthScreen();