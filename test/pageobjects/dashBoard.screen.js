const expect = require("chai").expect;
global.tag = process.argv[3];

class dashBoardScreen {

    // get dashboardLbl () { return $('//android.view.View[contains(@text, "Profile overview")]')}
    get pageHeaderLbl () { return $('//h1[@id="pageTitle"]')}

    get nmcCheckSection () { return $('//section[@id="nmc-check"]')}


    assertDashboardLbl () {
        this.pageHeaderLbl.waitForExist({timeout: 60000});
        expect(this.pageHeaderLbl.getText()).to.equal("Profile overview");
    }

    clickOnNMCCheckSection () {
        this.nmcCheckSection.waitForExist({timeout: 60000});
        this.nmcCheckSection.click();
    }

}
module.exports = new dashBoardScreen();