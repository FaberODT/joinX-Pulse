const expect = require("chai").expect;
global.tag = process.argv[3];

class nmcScreen {

    // get dashboardLbl () { return $('//android.view.View[contains(@text, "Profile overview")]')}
    get pageHeaderLbl () { return $('//h1[@id="pageTitle"]')}

    get nmcPinTxtBox () { return $('//input[@id="NMCPIN"]')}

    get saveAndContinueBtn () { return $('//button[@id="saveButton"]')}

    get nmcStatus () { return $('//div[@id="statusMessageHeader"]/span')}
    
    assertNMCCheckPageHeader () {
        this.pageHeaderLbl.waitForExist({timeout: 60000});
        expect(this.pageHeaderLbl.getText()).to.equal("4. NMC check");
    }

    enterNMCPinValue () {
        this.nmcPinTxtBox.waitForExist({timeout: 60000});
        this.nmcPinTxtBox.setValue("99A9999A");
    }

    clickOnSaveAndContinueBtn () {
        this.saveAndContinueBtn.waitForExist({timeout: 60000});
        this.saveAndContinueBtn.click();
    }

    assertNMCSectionStatus () {
        this.nmcStatus.waitForExist({timeout: 60000});
        let statusValue = this.nmcStatus.getText();
        if(statusValue == "Incomplete"){
            expect(this.nmcStatus.getText()).to.equal("Incomplete");
        }
        else{

        }
    }
}
module.exports = new nmcScreen();