const expect = require("chai").expect;
global.tag = process.argv[3];
/**
 * object containing all methods, selectors and functionality of Menu options
 */
class menuOptionsScreen {
     
    get menuBtn () { return $('//*[contains(@text, "menu") or contains(@name, "menu")]')}

    get dashboardMenu () { return $('//*[contains(@text, "Dashboard") or contains(@name, "Dashboard")]')}

    get findShiftsMenu () { return $('//*[contains(@text, "search Find Shifts") or contains(@name, "Find Shifts")]')}

    get bookingsMenu () { return $('//*[contains(@text, "Bookings") or contains(@name, "Bookings")]')}

    // get availabilityMenu () { return $('//*[contains(@text, "Availability") or contains(@name, "Availability")]')}

    get availabilityMenu () { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[2]/android.view.View[1]/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View[4]/android.view.View')}

    get availabilityMenuiOS () { return $('(//XCUIElementTypeLink[@name="Availability"])[2]')}

    // get complianceMenu () { return $('//*[contains(@text, "Compliance") or contains(@name, "Compliance")]')}
    // get complianceMenu () { return $('//android.view.View[contains(@text, "Compliance")]')}
    get complianceMenu () { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[2]/android.view.View[1]/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View[5]/android.view.View')}

    get complianceMenuiOS () { return $('(//XCUIElementTypeLink[@name="Compliance"])[2]')}

    get requiredTimeSheetMenu () { return $('//*[contains(@text, "Request Timesheets") or contains(@name, "Request Timesheets")]')}

    get faqsMenu () { return $('//*[contains(@text, "FAQs") or contains(@name, "FAQs")]')}

    get contactUsMenu () { return $('//*[contains(@text, "call Contact Us") or contains(@name, "call Contact Us")]')}

    get followUsMenu () { return $('//*[contains(@text, "Follow Us open outline") or contains(@name, "Follow Us open outline")]')}
    
    clickOnMenuBtn () {
        this.menuBtn.click();
    }

    clickOnDashboardMenu () {
        this.dashboardMenu.waitForExist({timeout: 60000});
        this.dashboardMenu.click();
    }

    redirectToDashboardMenu () {
        this.clickOnMenuBtn();
        this.clickOnDashboardMenu();
    }

    clickOnFindShiftsMenu () {
        this.findShiftsMenu.waitForExist({timeout: 60000});
        this.findShiftsMenu.click();
    }

    redirectToFindShiftScreen() {
        this.clickOnMenuBtn();
        this.clickOnFindShiftsMenu();
    }

    clickOnBookingsMenu () {
        this.bookingsMenu.waitForExist({timeout: 60000});
        this.bookingsMenu.click();
    }

    redirectToBookingsScreen() {
        this.clickOnMenuBtn();
        this.clickOnBookingsMenu();
    }

    clickOnAvailabilityMenu () {
        if(tag == "android"){
            this.availabilityMenu.waitForExist({timeout: 60000});
            this.availabilityMenu.click();
        }
        else{
            this.availabilityMenuiOS.waitForExist({timeout: 60000});
            this.availabilityMenuiOS.click();
        }
    }

    redirectToAvailabilityScreen() {
        this.clickOnMenuBtn();
        console.log("I have clicked menu button");
        this.clickOnAvailabilityMenu();
        console.log("I have clicked availability menu option");
    }

    clickOnComplianceMenu () {
        console.log("I am about to click on compliance menu")
        if(tag == "android"){
            this.complianceMenu.waitForExist({timeout: 60000});
            this.complianceMenu.click();
        }
        else{
            this.complianceMenuiOS.waitForExist({timeout: 60000});
            this.complianceMenuiOS.click();
        }
        browser.pause(10000);
    }

    redirectToComplianceScreen() {
        this.clickOnMenuBtn();
        this.clickOnComplianceMenu();
    }

    clickOnRequiredTimeSheetMenu () {
        this.requiredTimeSheetMenu.waitForExist({timeout: 60000});
        this.requiredTimeSheetMenu.click();
    }

    redirectToRequiredTimeSheetScreen () {
        this.clickOnMenuBtn();
        this.clickOnRequiredTimeSheetMenu();
    }

    clickOnFAQsMenu () {
        this.faqsMenu.waitForExist({timeout: 60000});
        this.faqsMenu.click();
    }

    redirectToFAQsScreen () {
        this.clickOnMenuBtn();
        this.clickOnFAQsMenu();
    }

    clickOnContactUsMenu () {
        this.contactUsMenu.waitForExist({timeout: 60000});
        this.contactUsMenu.click();
    }

    redirectToContactUsScreen() {
        this.clickOnMenuBtn();
        this.clickOnContactUsMenu();
    }

    clickOnFollowUsMenu () {
        this.followUsMenu.waitForExist({timeout: 60000});
        this.followUsMenu.click();
    }

    redirectToFollowUsScreen() {
        this.clickOnMenuBtn();
        this.clickOnFollowUsMenu();
    }
}
module.exports = new menuOptionsScreen();