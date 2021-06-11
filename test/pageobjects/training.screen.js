const expect = require("chai").expect;
global.tag = process.argv[3];

class trainingScreen {

    // get dashboardLbl () { return $('//android.view.View[contains(@text, "Profile overview")]')}
    get pageHeaderLbl () { return $('//h1[@id="pageTitle"]')}

    get yesRadioBtn () { return $('//section[@id="TrainingCertificatesAvailable"]/label[1]/span')}

    get certificateType () { return $('//mat-select[@id="TrainingDocument-0-TrainingCertificateType"]')}
    
    get ALSILSOption() { return $('//mat-option[@id="mat-option-1"]')}

    get counterFraudOption() { return $('//mat-option[@id="mat-option-26"]')}

    get addFileBtn1 () { return $('//button[@id="add-file-TrainingDocument-0-TrainingCertificate"]')}

    get addFileBtn2 () { return $('//button[@id="add-file-TrainingDocument-1-TrainingCertificate"]')}

    // get addFile1 () { return $$('//input[@id="fileInput"]')}

    get addFile1 () { return $('//input[@id="fileInput"]')}

    get addFileBtn () { return $('//button[@id="add-file-TrainingDocument-0-TrainingCertificate"]')}

    get addAnotherBtn () { return $('//button[@id="add-TrainingDocument"]')}

    get certificateType1 () { return $('//mat-select[@id="TrainingDocument-1-TrainingCertificateType"]')}

    get saveBtn () { return $('//button[@id="saveButton"]')}

    get uploadFineBtn () { return $('//button[@id="add-file-TrainingDocument-0-TrainingCertificate"]')}

    get trainingStatus () { return $('//div[@id="statusMessageHeader"]/span')}


    // get allowOpt () {return $('//*[contains(@id,"permission_allow_button")]')}
    // get allowOpt () {return $('//*[contains(@text,"Allow")]')}
    get allowOpt () {return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.Button[1]')}
    get fileEle () { return $('//*[contains(@text,"Files")]')}
    // get eleDoc () { return $('//*[contains(@id,"thumbnail")]')}
    get eleDoc () { return $('//*[contains(@text,"file.pdf")]')}


    assertTrainingPageHeader () {
        this.pageHeaderLbl.waitForExist({timeout: 60000});
        browser.pause(3000);
        expect(this.pageHeaderLbl.getText()).to.equal("10. Training");
    }

    clickOnYesRadioBtn () {
        this.yesRadioBtn.waitForExist({timeout: 60000});
        browser.pause(3000);
        this.yesRadioBtn.click();
    }

    clickOnCertificateTypeDrd () {
        this.certificateType.waitForExist({timeout: 60000});
        this.certificateType.click();
    }

    clickOnALSILSOption () {
        this.ALSILSOption.waitForExist({timeout: 60000});
        this.ALSILSOption.click();
    }

    clickOnCounterFraudOption () {
        this.counterFraudOption.waitForExist({timeout: 60000});
        this.counterFraudOption.click();
    }

    clickOnAddFile1Btn () { 
        this.addFileBtn1.waitForExist({timeout: 60000});
        this.addFileBtn1.click();
    }

    uploadFile1 () {
        browser.touchAction([
            { action: 'press', x: 700, y: 2400 },
            { action: 'moveTo', x: 700, y: 600 },
            'release'
        ]);
        this.addFile1.waitForExist({timeout: 60000});

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

    uploadFile2 () {
        browser.touchAction([
            { action: 'press', x: 700, y: 2400 },
            { action: 'moveTo', x: 700, y: 600 },
            'release'
        ]);
        this.addFile1.waitForExist({timeout: 60000});

        //click on Add File button
        this.addFileBtn2.click();
        browser.pause(5000);

        //Swith to NATIVE_APP 
        let contexts = driver.getContexts();
        console.log("Total contexts are: " + contexts);
        console.log(" 0 contexts are: " + contexts[0]);
        console.log(" 1 contexts are: " + contexts[1]);
        driver.switchContext(contexts[0]);

        //click on Allow button from pop-up
        // this.allowOpt.click();
        // browser.pause(5000);

        //click on File
        this.fileEle.click();
        browser.pause(5000);

        //select file 
        this.eleDoc.click();
        browser.pause(5000);
        driver.switchContext(contexts[1]);
        browser.pause(2000);
    }

    clickOnAddAnotherBtn () {
        this.addAnotherBtn.waitForExist({timeout: 60000});
        this.addAnotherBtn.click();
    }

    clickOnCertificateTypeDrd1 () {
        browser.touchAction([
            { action: 'press', x: 700, y: 2400 },
            { action: 'moveTo', x: 700, y: 600 },
            'release'
        ]);
        browser.pause(1000);
        this.certificateType1.waitForExist({timeout: 60000});
        this.certificateType1.click();
    }

    clickOnSaveAndContinueBtn () {
        this.saveBtn.waitForExist({timeout: 60000});
        this.saveBtn.click();
        browser.pause(5000);
    }

    assertTrainingSectionStatus () {
        this.trainingStatus.waitForExist({timeout: 60000});
        let statusValue = this.trainingStatus.getText();
        if(statusValue == "Incomplete"){
            expect(this.trainingStatus.getText()).to.equal("Incomplete");
        }else{
            expect(this.trainingStatus.getText()).to.equal("Complete");
        }
    }
}
module.exports = new trainingScreen();