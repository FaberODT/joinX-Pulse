const expect = require("chai").expect;
global.tag = process.argv[3];

class sectionScreen {

    get menuBtn () { return $('//div[@id="mobile-nav-button"]')}

    get profileMenuOption () { return $('//h4[@id="nav-item-profile"]')}

    get nmcSection () { return $('//div[@id="navigation-section-list-item-nmc-check"]')}

    clickOnMenuBtn () {
        this.menuBtn.waitForExist({timeout: 60000});
        this.menuBtn.click();
    }

    clickOnProfileMenuOption () {
        this.profileMenuOption.waitForExist({timeout: 60000});
        this.profileMenuOption.click();
        browser.pause(3000);
    }

    clickOnNMCSection () {
        this.nmcSection.waitForExist({timeout: 60000});
        this.nmcSection.click();
    }

}
module.exports = new sectionScreen();