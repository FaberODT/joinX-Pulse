const expect = require("chai").expect;
global.tag = process.argv[3];

class workHistoryScreen {

    get pageHeaderLbl () { return $('//h1[@id="pageTitle"]')}

    get saveBtn () { return $('//button[@id="saveButton"]')}

    get sectionStatus () { return $('//div[@id="statusMessageHeader"]/span')}

    get workHistoryMsg () { return $('//div[@id="statusMessageContent"]')}

    

    assertWorkHistoryPageHeader () {
        this.pageHeaderLbl.waitForExist({timeout: 60000});
        expect(this.pageHeaderLbl.getText()).to.equal("7. Work history");
    }

    clickOnSaveAndContinueBtn () {
        this.saveBtn.waitForExist({timeout: 60000});
        this.saveBtn.click();
    }

    assertSectionStatus () {
        this.sectionStatus.waitForExist({timeout: 60000});
        expect(this.sectionStatus.getText()).to.equal("Pending");
    }

    assertWorkHistoryMsg () {
        this.workHistoryMsg.waitForExist({timeout: 60000});
        expect(this.workHistoryMsg.getText()).to.equal("Thank you for uploading your CV; this section will remain pending until a member of the team has reviewed it. \n\nOnce approved, this section will change to \'Complete\'. In the meantime, you can continue filling in the rest of your profile.");
    }
}
module.exports = new workHistoryScreen();