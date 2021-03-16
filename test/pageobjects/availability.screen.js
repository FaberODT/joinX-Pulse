const expect = require("chai").expect;
global.tag = process.argv[3];
/**
 * object containing all methods, selectors, and functionality of Availibility screen
 */
class availibilityScreen {

    get availibilitylbl () { return $('//*[contains(@text,"Availability") or contains(@name, "Availability")]')}

    get availibilitylbliOS () { return $('//XCUIElementTypeOther[@name="Availability"]')}

    get repeatAvailabilityTab () { return $('//*[contains(@text,"REPEAT AVAILABILITY") or contains(@name, "REPEAT AVAILABILITY")]')}

    // get repeatAvailabilityTab () { return $('#tab-button-repeat_availability')}

    // get firstLongDayRadioBtn () { return $('//android.view.View[contains(@resource-id, "ion-cb-364-lbl")]')}

    get firstLongDayRadioBtn () { return $('//*[contains(@text, "Long Day") or contains(@name, "Long Day")]')}

    // get secondMorningRadioBtn () { return $('//android.view.View[contains(@resource-id, "ion-cb-369-lbl")]')}

    get secondMorningRadioBtn () { return $('//*[contains(@text, "Morning") or contains(@name, "Morning")]')}

    // get thirdAfternoonRadioBtn () { return $('//android.view.View[contains(@resource-id, "ion-cb-374-lbl")]')}

    get thirdAfternoonRadioBtn () { return $('//*[contains(@text, "Afternoon") or contains(@name, "Afternoon")]')}

    // get fourthNightRadioBtn () { return $('//android.view.View[contains(@resource-id, "ion-cb-379-lbl")]')}

    get fourthNightRadioBtn () { return $('//*[contains(@text, "Night") or contains(@name, "Night")]')}

    get selectNoOfWeeksDrd () { return $('//*[contains(@text, "Select no. of weeks") or contains(@name, "Select no. of weeks")]')}

    get selectNoOfWeeksDrdiOS () { return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeOther[1]/XCUIElementTypeOther')}

    get Week2Option () { return $('//*[contains(@text, "2 weeks") or contains(@name, "2 weeks")]')}

    get submitBtn () { return $('//*[contains(@text, "Submit arrow forward circle outline") or contains(@name, "Submit arrow forward circle outline")]')}

    get warningPopUp () { return $('//*[contains(@text, "Warning!") or contains(@name, "Warning!")]')}

    get warningMsg () { return $('//*[contains(@text, "Repeat availability overwrites") or contains(@name, "Repeat availability overwrites")]')}

    get popUpCancelBtn () { return $('//*[contains(@text, "CANCEL") or contains(@name, "CANCEL")]')}

    get popUpOkayBtn () { return $('//*[contains(@text, "OKAY") or contains(@name, "OKAY")]')}

    get successPopUp () { return $('//*[contains(@text, "Success!") or contains(@name, "Success!")]')}

    get successMsg () { return $('//*[contains(@text, "Repeat availability has been created.") or contains(@name, "Repeat availability has been created.")]')}

    get successPopUpOkayBtn () { return $('//*[contains(@text, "OKAY") or contains(@name, "OKAY")]')}

    assertForAvailibilityScreen() {
        if(tag == "android"){
            this.availibilitylbl.waitForExist({timeout: 60000});
            expect(this.availibilitylbl.getText()).to.equal('Availability');
        }
        else{
            this.availibilitylbliOS.waitForExist({timeout: 60000});
            console.log("The value of availability screen label is: " + this.availibilitylbliOS.getAttribute('name'));
            expect(this.availibilitylbliOS.getAttribute('name')).to.equal('Availability');
        }
    }

    clickOnRepeatAvailabilityTab() {
        this.repeatAvailabilityTab.waitForExist({timeout: 60000});
        this.repeatAvailabilityTab.click();
    }

    clickOnFirstLongDayRadioBtn() {
        this.firstLongDayRadioBtn.waitForExist({timeout: 60000});
        this.firstLongDayRadioBtn.click();
    }

    clickOnSecondMorningRadioBtn() {
        this.secondMorningRadioBtn.waitForExist({timeout: 60000});
        this.secondMorningRadioBtn.click();
    }

    clickOnThirdAfterNoonRadioBtn() {
        this.thirdAfternoonRadioBtn.waitForExist({timeout: 60000});
        this.thirdAfternoonRadioBtn.click();
    }

    clickOnFourthNightRadioBtn() {
        this.fourthNightRadioBtn.waitForExist({timeout: 60000});
        this.fourthNightRadioBtn.click();
    }

    clickOnWeeksDropDown() {
        console.log("I am about to click on Drop down");
        if(tag == "android"){
            this.selectNoOfWeeksDrd.waitForExist({timeout: 60000});
            this.selectNoOfWeeksDrd.click();
        }
        else{
            console.log("I am in else clause");
            browser.pause("2000");
            console.log("I have waited for 2 seconds now...");
            // this.selectNoOfWeeksDrdiOS.waitForExist({timeout: 60000});
            console.log("Drop down is found");
            this.selectNoOfWeeksDrdiOS.click();
            console.log("I have clicked on DD");
        }
    }

    clickOn2WeeksOption() {
        console.log("waiting for drop down to be appear on screen");
        this.Week2Option.waitForExist({timeout: 60000});
        this.Week2Option.click();
    }

    clickOnSubmitBtn() {
        this.submitBtn.waitForExist({timeout: 60000});
        this.submitBtn.click();
    }

    assertForWarningPopUpMessage() {
        this.warningPopUp.waitForExist({timeout: 60000});
        expect(this.warningMsg.getText()).to.equal("Repeat availability overwrites any existing availability, would you like to add the repeat availability?");
    }

    clickOnPopUpCancelBtn() {
        this.popUpCancelBtn.waitForExist({timeout: 60000});
        this.popUpCancelBtn.click();
    }

    clickOnPopUpOkayBtn() {
        this.popUpOkayBtn.waitForExist({timeout: 60000});
        this.popUpOkayBtn.click();
    }

    assertForSuccessPopUpMessage() {
        this.successMsg.waitForExist({timeout: 60000});
        expect(this.successMsg.getText()).to.equal("Repeat availability has been created.");
    }

    clickOnSuccessPopUpOkayBtn() {
        this.successPopUpOkayBtn.waitForExist({timeout: 60000});
        this.successPopUpOkayBtn.click();
    }
}
module.exports = new availibilityScreen();