const expect = require("chai").expect;
global.tag = process.argv[3];

class taxAndNextOfKinScreen {

    // get dashboardLbl () { return $('//android.view.View[contains(@text, "Profile overview")]')}
    get pageHeaderLbl () { return $('//h1[@id="pageTitle"]')}

    get paymentRadioBtn () { return $$('//section[@id="PaymentMethod"]/label')}

    get firstNameTxtBox () { return $('//input[@id="NextOfKin-0-NextOfKinFirstName"]')}

    get lastNameTxtBox () { return $('//input[@id="NextOfKin-0-NextOfKinSurName"]')}

    get phoneTxtBox () { return $('//input[@id="NextOfKin-0-NextOfKinPhone"]')}

    get relationshipTxtBox () { return $('//input[@id="NextOfKin-0-NextOfKinRelationship"]')}

    get umbrellaCompanyNameTxtBox () { return $('//input[@id="UmbreallaCompanyName"]')}

    get saveBtn () { return $('//button[@id="saveButton"]')}

    get sectionStatus () { return $('//div[@id="statusMessageHeader"]/span')}

    assertTaxAndNextOfKinPageHeader () {
        this.pageHeaderLbl.waitForExist({timeout: 60000});
        expect(this.pageHeaderLbl.getText()).to.equal("11. Tax and next of kin");
    }

    clickOnPayeRadioBtn () {
        this.paymentRadioBtn[0].waitForExist({timeout: 60000});
        this.paymentRadioBtn[0].click();
    }

    clickOnLimitedCompanyRadioBtn () {
        this.paymentRadioBtn[1].waitForExist({timeout: 60000});
        this.paymentRadioBtn[1].click();
    }

    clickOnUmbrellaRadioBtn () {
        this.paymentRadioBtn[2].waitForExist({timeout: 60000});
        this.paymentRadioBtn[2].click();
    }

    enterFirstName (firstName) {
        this.firstNameTxtBox.waitForExist({timeout: 60000});
        this.firstNameTxtBox.setValue(firstName);
    }

    enterLastName (lastName) {
        this.lastNameTxtBox.waitForExist({timeout: 60000});
        this.lastNameTxtBox.setValue(lastName);
    }

    enterPhone (phoneNumber) {
        this.phoneTxtBox.waitForExist({timeout: 60000});
        this.phoneTxtBox.setValue(phoneNumber);
    }

    enterRelationShip (relation) {
        this.relationshipTxtBox.waitForExist({timeout: 60000});
        this.relationshipTxtBox.setValue(relation);
    }

    enterUmbrellaCompanyName (companyName) {
        this.umbrellaCompanyNameTxtBox.waitForExist({timeout: 60000});
        this.umbrellaCompanyNameTxtBox.setValue(companyName);
    }

    clickOnSaveAndContinueBtn () {
        this.saveBtn.waitForExist({timeout: 60000});
        this.saveBtn.click();
    }

    assertSectionStatus () {
        this.sectionStatus.waitForExist({timeout: 60000});
        expect(this.sectionStatus.getText()).to.equal("Complete");
    }

    fetchPAYEValues () {
        this.firstNameTxtBox.waitForExist({timeout: 60000});
        expect(this.firstNameTxtBox.getValue()).to.equal("Nimesh");
        expect(this.lastNameTxtBox.getValue()).to.equal("Bhatt");
        expect(this.phoneTxtBox.getValue()).to.equal("07912345678");
        expect(this.relationshipTxtBox.getValue()).to.equal("Friend");

    }

    fetchUmbrellaCompanyName () {
        this.umbrellaCompanyNameTxtBox.waitForExist({timeout: 60000});
        expect(this.umbrellaCompanyNameTxtBox.getValue()).to.equal("Umbrella!");
    }
}
module.exports = new taxAndNextOfKinScreen();