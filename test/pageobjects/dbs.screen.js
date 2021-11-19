const expect = require("chai").expect;
global.tag = process.argv[3];

class dbsScreen {

    // get dashboardLbl () { return $('//android.view.View[contains(@text, "Profile overview")]')}
    get pageHeaderLbl () { return $('//h1[@id="pageTitle"]')}

    get yesRadioBtn () { return $('//section[@id="DBSUpdateRegistered"]/label[1]/span')}

    get noRadioBtn () { return $('//section[@id="DBSUpdateRegistered"]/label[2]/span')}

    get yesRadioBtn_value () { return $('//input[@id="DBSUpdateRegistered-DBSUpdateYes"]')}

    get noRadioBtn_value () { return $('//input[@id="DBSUpdateRegistered-DBSUpdateNo"]')}

    get certificateTxtBox () { return $('//input[@id="DBSUpdateCertificateNumber"]')}

    get addFileBtn () { return $('//button[@id="add-file-DBSUpdateCertificate"]')}

    get saveAndContinueBtn () { return $('//button[@id="saveButton"]')}

    get sectionStatus () { return $('//div[@id="statusMessageHeader"]/span')}

    get allowOpt () {return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.Button[1]')}
    get fileEle () { return $('//*[contains(@text,"Files")]')}
    get eleDoc () { return $('//*[contains(@text,"file.pdf")]')}

    DBS_flag = false;

    assertDBSPageHeader () {
        this.pageHeaderLbl.waitForExist({timeout: 60000});
        browser.pause(3000);
        expect(this.pageHeaderLbl.getText()).to.equal("5. DBS details");
        // browser.touchAction([
        //     { action: 'press', x: 700, y: 2200 },
        //     { action: 'moveTo', x: 700, y: 600 },
        //     'release'
        // ]);
        // this.certificateTxtBox.scrollIntoView();
    }

    switchDBSValue() {
        this.noRadioBtn_value.waitForExist({timeout: 60000});
        if(this.noRadioBtn_value.isSelected()){
            this.yesRadioBtn_value.scrollIntoView();
            browser.pause(10000);
            this.yesRadioBtn.click();
            this.DBS_flag = true;
        }
        else{
            this.noRadioBtn_value.scrollIntoView();
            browser.pause(10000);
            this.noRadioBtn.click();
        }
    }

    assertDBSValue() {
        if(this.DBS_flag == true){
            expect(this.yesRadioBtn_value.isSelected()).to.equal(true);
        }
        else{
            expect(this.noRadioBtn_value.isSelected()).to.equal(true);
        }
    }

    clickOnYesRadioBtn () {
        this.yesRadioBtn.waitForExist({timeout:60000});
        this.yesRadioBtn.click();
    }

    enterCertificateValue () {
        this.certificateTxtBox.waitForExist({timeout: 60000});
        this.certificateTxtBox.setValue("009999999999");
        driver.hideKeyboard();
        browser.pause(1000);
    }

    uploadFile1 () {
        browser.touchAction([
            { action: 'press', x: 700, y: 2200 },
            { action: 'moveTo', x: 700, y: 600 },
            'release'
        ]);
        this.addFileBtn.waitForExist({timeout: 60000});

        let data1 = new Buffer("Hello World").toString('base64');
        driver.pushFile('/sdcard/download/file.pdf', data1);

        //click on Add File button
        this.addFileBtn.click();
        browser.pause(5000);

        //Swith to NATIVE_APP 
        let contexts = driver.getContexts();
        console.log("Total contexts are: " + contexts);
        console.log(" 0 contexts are: " + contexts[0]);
        console.log(" 1 contexts are: " + contexts[1]);
        driver.switchContext(contexts[0]);

        //click on Allow button from pop-up
        this.allowOpt.click();
        browser.pause(5000);

        //click on File
        this.fileEle.click();
        browser.pause(5000);

        //select file 
        this.eleDoc.click();
        browser.pause(5000);
        driver.switchContext(contexts[1]);
        browser.pause(2000);
    }

    clickOnSaveAndContinueBtn () {
        this.saveAndContinueBtn.waitForExist({timeout:60000});
        this.saveAndContinueBtn.click();
    }

    assertDBSDetailsSectionStatus () {
        this.sectionStatus.waitForExist({timeout: 60000});
        expect(this.sectionStatus.getText()).to.equal("Pending");
    }
}
module.exports = new dbsScreen();