const expect = require("chai").expect;
const ComplianceScreen = require('../pageobjects/compliance.screen');
const SplashScreen = require('../pageobjects/splash.screen');
const BookingsScreen = require('../pageobjects/bookings.screen');
const DashboardScreen = require('../pageobjects/dashBoard.screen');
var milesValueOnShiftDetailsScreen = "";
var milesValueOnBookingsScreen = "";
var tepValue = "";
global.tag = process.argv[3];
/**
 * object containing all methods, selectors, and functionality of Find Shift screen
 */
class findShiftsScreen {

    get findShiftlbl () { return $('//*[contains(@text,"Find Shifts") or contains(@name, "Find Shifts")]')}

    get noShiftPopUpMsg1 () { return $('//*[contains(@text, "No shifts found") or contains(@name, "No shifts found")]')}

    get noShiftPopUpMsg2 () {return $('//*[contains(@text, "Unfortunately we ") or contains(@name, "Unfortunately we ")]')}

    get noShiftPopUpOkayBtn () { return $('//*[contains(@text, "OKAY") or contains(@name, "OKAY")]')}

    get nonCompliantPopMsg1 () { return $('//*[contains(@text, "Non Compliant") or contains(@name, "Non Compliant")]')}

    get nonCompliantPopMsg2 () { return $('//*[contains(@text, "Your compliance has lapsed Before you can book a shift, you’ll need to update your compliance.") or contains(@name, "Your compliance has lapsed Before you can book a shift, you’ll need to update your compliance.")]')}

    get nonCompliantPopBtn () { return $('//*[contains(@text, "VIEW COMPLIANCE DETAILS") or contains(@name, "VIEW COMPLIANCE DETAILS")]')}

    // get milesValueOnShiftDetailsScreenLbl () { return $('//*[contains(@text, "124miles (243 minutes)") or contains(@name, "124miles (243 minutes)")]')}

    get milesValueOnShiftDetailsScreenLbl () { return $('//*[contains(@text, "70miles (157 minutes)") or contains(@name, "70miles (157 minutes)")]')}

    get milesValueOnBookingsScreenLbl () { return $('//*[contains(@text, "(140 miles)") or contains(@name, "(140 miles)")]')}

    // get milesValueOnBookingsScreenLbl () { return $('//*[contains(@text, "(248 miles)") or contains(@name, "(248 miles)")]')}

    /**
     * Following are the mobile elements of the shift details screen
     */

    get shiftDetails_screenTitle () { return $('//*[contains(@text, "Shift Details") or contains(@name, "Shift Details")]')} 

    get shiftDetails_backArrow () { return $('//*[contains(@text, "back") or contains(@name, "BACK")]')}

    get shiftDetails_shiftDate () { return $('//*[contains(@text, "Today,") or contains(@name, "Today,")]')}

    get shiftDetails_locationIcon () { return $('//*[contains(@text, "location") or contains(@name, "location")]')}

    get shiftDetails_locationText () { return $('//*contains(@text, "(Switch Location Services on to use the above link)") or contains(@name, "(Switch Location Services on to use the above link)")')}

    get shiftDetails_wardType () { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View/android.view.View[5]/android.view.View[4]')}



    /**
     * following are the mobile elements of the success screen after successfully booking shift
     */

    get bookingSuccessMsg1 () { return $('//*[contains(@text, "Yay. Success!") or contains(@name, "Yay. Success!")]')}

    get bookingSuccessMsg2 () { return $('//*[contains(@text, "Well done, your shift has been booked.") or contains(@name, "Well done, your shift has been booked.")]')}

    get bookingSuccessAddToCalBtn () { return $('//*[contains(@text, "ADD THIS TO MY CALENDAR") or contains(@name, "ADD THIS TO MY CALENDAR")]')}

    get bookingSuccessBookingsBtn () { return $('//*[contains(@text, "Bookings") or contains(@name, "Bookings")]')}


    /**
     * following are the mobile elemets of possible shift issue screen for booking overlapped shift
     */

    get possibleShiftIssueLbl () { return $('//*[contains(@text, "Possible Shift Issue") or contains(@name, "Possible Shift Issue")]')}

    get shiftIssueMsg () { return $('//*[contains(@text, "Click the button below to see if it\'s possible to match you into this shift") or contains(@name, "Click the button below to see if it\'s possible to match you into this shift")]')}

    get callToBookBtn () { return $('//*[contains(@text, "Call To Book") or contains(@name, "Call To Book")]')}

    get shiftIssueSearchShiftFloatBtn () { return $('//*[contains(@text, "close search outline") or contains(@name, "close search outline")]')}


    /**
     * following are the mobile elements of the shift which starts soon that is shift will get start in next 2 hours
     * Such shift's details screen should display Arrival time drop down
     */
    get viewBtnOfSoonShift () { return $('//*[contains(@text, "View Details arrow forward circle outline") or contains(@name, "View Details arrow forward circle outline")]')}

    get arrivalTimeDrd () { return $('//*[contains(@text, "Arrival Time") or contains(@name, "Arrival Time")]')}

    get arrivalTimePopUpCancelBtn () { return $('//*[contains(@text, "CANCEL") or contains(@name, "CANCEL")]')}

    get arrivalTimePopUpOkBtn () { return $('//*[contains(@text, "OK") or contains(@name, "OK")]')}

    get checkBox1 () { return $('//*[contains(@text, "I have read the client notes and I confirm that I am qualified and competent to practice in this shift.") or contains(@name, "I have read the client notes and I confirm that I am qualified and competent to practice in this shift.")]')}

    get checkBox2 () { return $('//*[contains(@text, "In relation to Covid-19 (Coronavirus), ") or contains(@name, "In relation to Covid-19 (Coronavirus), ")]')}

    get bookNowBtn () { return $('//*[contains(@text, "Book Now arrow forward circle outline") or contains(@name, "Book Now arrow forward circle outline")]')}

    get arrivalTimeSlotRadioBtns () { return $('//android.widget.RadioButton')}


    /**
     * Following are the mobile elements of the Next booked Shift details on Dashboard
     */
    get nextShiftLbl () { return $('//*[contains(@text, "Next Shift") or contains(@name, "Next Shift")]')}

    get shiftDetailsBtn () { return $('//*[contains(@text, "Shift Details") or contains(@name, "Shift Details")]')}

    get addToCalBtn () { return $('//*[contains(@text, "Add To Calendar") or contains(@name, "Add To Calendar")]')}

    get clientNotesBtn () { return $('//*[contains(@text, "Client Notes") or contains(@name, "Client Notes")]')}


    /**
     * Following are the mobile elements of the Client Notes screen
     */
    get shiftNotesLbl () { return $('//*[contains(@text, "Shift Notes") or contains(@name, "Shift Notes")]')}

    get clientName () { return $('//*[contains(@text, "BRISTOL ROYAL NHS INFIRMARY - Client Notes") or contains(@name, "BRISTOL ROYAL NHS INFIRMARY - Client Notes")]')}
    

    assertForScreenTitleOfShiftDetail() {
        this.shiftDetails_screenTitle.waitForExist({timeout: 60000});
        if(tag == "android"){
            expect(this.shiftDetails_screenTitle.getText()).to.equal('Shift Details');
        }
        else{
            expect(this.shiftDetails_screenTitle.getAttribute('name')).to.equal('Shift Details');
        }
    }

    assertForScreenBackArrowOfShiftDetail(){
        this.shiftDetails_backArrow.waitForExist({timeout: 60000});
        expect(this.shiftDetails_backArrow.isDisplayed()).to.equal(true);
    }

    assertForScreenDateOfShiftDetail() {
        this.shiftDetails_shiftDate.waitForExist({timeout: 60000});
        if(tag == "android"){
            expect(this.shiftDetails_shiftDate.getText()).to.contains('Today,');
        }
        else{
            expect(this.shiftDetails_shiftDate.getAttribute('name')).to.contains('Today,');
        }
    }

    assertForScreenLocationIconOfShiftDetail() {
        this.shiftDetails_locationIcon.waitForExist({timeout: 60000});
        expect(this.shiftDetails_locationIcon.isDisplayed()).to.equal(true);
    }

    assertForScreenLocationTextOnShiftDetail() {
        this.shiftDetails_locationText.waitForExist({timeout: 60000});
        if(tag == "android"){
            expect(this.shiftDetails_locationText.getText()).to.equal('(Switch Location Services on to use the above link)');
        }
        else{
            expect(this.shiftDetails_locationText.getAttribute('name')).to.equal('(Switch Location Services on to use the above link)');
        }
    }

    assertForScreenWardOnShiftDetails() {
        this.shiftDetails_wardType.waitForExist({timeout: 60000});
        expect(this.shiftDetails_wardType.isDisplayed()).to.equal(true);
    }

    assertForScreenTimeMilesOnShiftDetail() {
        this.milesValueOnShiftDetailsScreenLbl.waitForExist({timeout: 60000});
        expect(this.milesValueOnShiftDetailsScreenLbl.isDisplayed()).to.equal(true);
    }

    assertForScreenCheckBoxesOnShiftDetail() {
        this.checkBox1.waitForExist({timeout: 60000});
        expect(this.checkBox1.isDisplayed()).to.equal(true);

        this.checkBox2.waitForExist({timeout: 60000});
        expect(this.checkBox2.isDisplayed()).to.equal(true);
    }

    assertForScreenBookNowOnShiftDetail() {
        this.bookNowBtn.waitForExist({timeout: 60000});
        expect(this.bookNowBtn.isDisplayed()).to.equal(true);
    }

    assertForFindShiftsScreen() {
        this.findShiftlbl.waitForExist({timeout: 60000});
        if(tag == "android"){
            expect(this.findShiftlbl.getText()).to.equal('Find Shifts');
            console.log("I have asserted successfully the find shift screen");
        }
        else{
            expect(this.findShiftlbl.getAttribute('name')).to.equal("Find Shifts");
        }
    }

    assertNoShiftPopUpMsg() {
        this.noShiftPopUpMsg1.waitForExist({timeout: 60000});
        if(tag == "android"){
            expect(this.noShiftPopUpMsg1.getText()).to.equal("No shifts found");
            expect(this.noShiftPopUpMsg2.getText()).to.equal("Unfortunately we can\'t find any shifts at the moment.\nWhy not look for something on another day?");
        }
        else{
            expect(this.noShiftPopUpMsg1.getAttribute('name')).to.equal("No shifts found");
            expect(this.noShiftPopUpMsg2.getAttribute('name')).to.equal("Unfortunately we can\'t find any shifts at the moment.");
        }
    }

    clickOnNoShiftPopUp() {
        this.noShiftPopUpOkayBtn.waitForExist({timeout: 60000});
        this.noShiftPopUpOkayBtn.click();
    }

    assertNonCompliantUserOnFindShiftScreen () {
        this.nonCompliantPopMsg1.waitForExist({timeout: 60000});
        if(tag == "android"){
            expect(this.nonCompliantPopMsg1.getText()).to.equal("Non Compliant");
            // this.nonCompliantPopMsg2.waitForExist({timeout: 60000});
            // expect(this.nonCompliantPopMsg2.getText()).to.equal("Your compliance has lapsed Before you can book a shift, you’ll need to update your compliance.");
        }
        else{
            expect(this.nonCompliantPopMsg1.getAttribute('name')).to.equal("Non Compliant");
            // this.nonCompliantPopMsg2.waitForExist({timeout: 60000});
            // expect(this.nonCompliantPopMsg2.getAttribute('name')).to.equal("Your compliance has lapsed Before you can book a shift, you’ll need to update your compliance.");
        }
    }

    clickOnViewComplianceDetailsLinkBtn () {
        this.nonCompliantPopBtn.waitForExist({timeout: 60000});
        this.nonCompliantPopBtn.click();
        ComplianceScreen.assertForComplianceScreen();
    }

    clickOnShiftViewDetailsBtn () {
        this.viewBtnOfSoonShift.waitForExist({timeout: 60000});
        this.viewBtnOfSoonShift.click();
    }

    assertArrivalTimeDrd () {
        this.arrivalTimeDrd.waitForExist({timeout: 60000});
        if(tag == "android"){
            expect(this.arrivalTimeDrd.getText()).to.equal("Arrival Time");
        }
        else{
            expect(this.arrivalTimeDrd.getAttribute('name')).to.equal("Arrival Time");
        }
    }

    clickOnArrivalTimeDrd () {
        this.arrivalTimeDrd.waitForExist({timeout: 60000});
        this.arrivalTimeDrd.click();
        this.arrivalTimeSlotRadioBtns.click()
        this.arrivalTimePopUpOkBtn.waitForExist({timeout: 60000});
        this.arrivalTimePopUpOkBtn.click();
        if(tag == "android"){
            tepValue = this.milesValueOnShiftDetailsScreenLbl.getText();
            console.log("temp value : " + tepValue);
        }
        else{
            tepValue = this.milesValueOnShiftDetailsScreenLbl.getAttribute('name');
            console.log("temp value : " + tepValue);
        }
    }

    clickOnConfirmationCheckBoxes () {
        browser.pause(2000);
        SplashScreen.swipeDown();
        browser.pause(1000);
        this.checkBox1.waitForExist({timeout: 60000});
        this.checkBox1.click();
        this.checkBox2.waitForExist({timeout: 60000});
        this.checkBox2.click();
        if(tag == "android"){
            milesValueOnShiftDetailsScreen = this.milesValueOnShiftDetailsScreenLbl.getText();
        }
        else{
            milesValueOnShiftDetailsScreen = this.milesValueOnShiftDetailsScreenLbl.getAttribute('name');
        }
    }

    clickOnBookNowBtn () {
        this.bookNowBtn.waitForExist({timeout: 60000});
        this.bookNowBtn.click();
    }

    assertSuccessFullBooking () {
        this.bookingSuccessMsg1.waitForExist({timeout: 60000});
        if(tag == "android"){
            expect(this.bookingSuccessMsg1.getText()).to.equal("Yay. Success!");
        }
        else{
            expect(this.bookingSuccessMsg1.getAttribute('name')).to.equal("Yay. Success!");
        }
        console.log("asserted the yay message");


        // this.bookingSuccessMsg2.waitForExist({timeout: 60000});
        // expect(this.bookingSuccessMsg2.getText()).to.equal("Well done, your shift has been booked.");
        // console.log("asserted the wel done message");

        this.bookingSuccessAddToCalBtn.waitForExist({timeout: 60000});
        if(tag == "android"){
            expect(this.bookingSuccessAddToCalBtn.getText()).to.equal("ADD THIS TO MY CALENDAR");
        }
        else{
            expect(this.bookingSuccessAddToCalBtn.getAttribute('name')).to.equal("ADD THIS TO MY CALENDAR");
        }
        console.log("asserted the calendar link button");

        this.bookingSuccessBookingsBtn.waitForExist({timeout: 60000});
        if(tag == "android"){
            expect(this.bookingSuccessBookingsBtn.getText()).to.equal("Bookings");
        }
        else{
            expect(this.bookingSuccessBookingsBtn.getAttribute('name')).to.equal("Bookings");
        }
        console.log("asserted the bookings button");
    }

    clickOnBookingsBtnOfSuccessScreen () {
        this.bookingSuccessBookingsBtn.click();
        console.log("asserted that click has happened on bookings button");
        BookingsScreen.assertForBookingsScreen();
        console.log("assrted that I am on bookings screen now...");
        browser.pause(15000);
    }

    assertMilesValueOnBookingsScreen () {
        if(tag == "android"){
            milesValueOnBookingsScreen = this.milesValueOnBookingsScreenLbl.getText();
        }
        else{
            milesValueOnBookingsScreen = this.milesValueOnBookingsScreenLbl.getAttribute('name');
        }
        expect(milesValueOnShiftDetailsScreen).to.contains(milesValueOnBookingsScreen);
        console.log("I have asserted the miles on bookings screen");
    }

    assertPossibleShiftIssueScreen () {
        this.possibleShiftIssueLbl.waitForExist({timeout: 60000});
        if(tag == "android"){
            expect(this.possibleShiftIssueLbl.getText()).to.equal("Possible Shift Issue");
            console.log("I have asserted possible shift issue label");
        }
        else{
            expect(this.possibleShiftIssueLbl.getAttribute('name')).to.equal("Possible Shift Issue");
        }

        this.shiftIssueMsg.waitForExist({timeout: 60000});
        if(tag == "android"){
            expect(this.shiftIssueMsg.getText()).to.equal("Click the button below to see if it\'s possible to match you into this shift");
            console.log("I have assreted the shift issue message");
        }
        else{
            expect(this.shiftIssueMsg.getAttribute('name')).to.equal("Click the button below to see if it\'s possible to match you into this shift");
        }

        this.callToBookBtn.waitForExist({timeout: 60000});
        if(tag == "android"){
            expect(this.callToBookBtn.getText()).to.equal("Call To Book");
            console.log("I have asserted the Call to Book button");
        }
        else{
            expect(this.callToBookBtn.getAttribute('name')).to.equal("Call To Book");
        }
    }

    clickOnFloatShiftSearchBtn () {
        this.shiftIssueSearchShiftFloatBtn.waitForExist({timeout:60000});
        this.shiftIssueSearchShiftFloatBtn.click();
        console.log("I have clicked on search shift floating button and now I'll wait for some time");
        browser.pause(35000);
        this.assertForFindShiftsScreen();
        console.log("I have asserted the find shift screen now.");
        // browser.pause(25000);
    }

    assertBookedShiftOnDashboard () { 
        this.nextShiftLbl.waitForExist({timeout: 60000});
        if(tag == "android"){
            expect(this.nextShiftLbl.getText()).to.equal("Next Shift");
        }
        else{
            expect(this.nextShiftLbl.getAttribute('name')).to.equal("Next Shift");
        }

        this.shiftDetailsBtn.waitForExist({timeout: 60000});
        if(tag == "android"){
            expect(this.shiftDetailsBtn.getText()).to.equal("Shift Details");
        }
        else{
            expect(this.shiftDetailsBtn.getAttribute('name')).to.equal("Shift Details");
        }

        this.addToCalBtn.waitForExist({timeout: 60000});
        if(tag == "android"){
            expect(this.addToCalBtn.getText()).to.equal("Add To Calendar");
        }
        else{
            expect(this.addToCalBtn.getAttribute('name')).to.equal("Add To Calendar");
        }

        this.clientNotesBtn.waitForExist({timeout: 60000});
        if(tag == "android"){
            expect(this.clientNotesBtn.getText()).to.equal("Client Notes");
        }
        else{
            expect(this.clientNotesBtn.getAttribute('name')).to.equal("Client Notes");
        }
    }

    clickOnClientNotesBtnFromDashboard () {
        this.clientNotesBtn.waitForExist({timeout: 60000});
        this.clientNotesBtn.click();
    }

    assertForClientNotesScreen () {
        this.shiftNotesLbl.waitForExist({timeout: 60000});
        if(tag == "android"){
            expect(this.shiftNotesLbl.getText()).to.contains("Shift Notes");
        }
        else{
            expect(this.shiftNotesLbl.getAttribute('name')).to.contains("Shift Notes");
        }

        this.clientName.waitForExist({timeout: 60000});
        if(tag == "android"){
            expect(this.clientName.getText()).to.equal("BRISTOL ROYAL NHS INFIRMARY - Client Notes");
        }
        else{
            expect(this.clientName.getAttribute('name')).to.equal("BRISTOL ROYAL NHS INFIRMARY - Client Notes");
        }
        browser.back();

        DashboardScreen.assertForDashBoardScreen();
    }
}
module.exports = new findShiftsScreen();