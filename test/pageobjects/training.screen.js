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

    // get addFile1 () { return $$('//input[@id="fileInput"]')}

    get addFile1 () { return $('//input[@id="fileInput"]')}

    get addFileBtn () { return $('//button[@id="add-file-TrainingDocument-0-TrainingCertificate"]')}

    get addAnotherBtn () { return $('//button[@id="add-TrainingDocument"]')}

    get certificateType1 () { return $('//mat-select[@id="TrainingDocument-1-TrainingCertificateType"]')}

    get saveBtn () { return $('//button[@id="saveButton"]')}

    get uploadFineBtn () { return $('//button[@id="add-file-TrainingDocument-0-TrainingCertificate"]')}


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
        ])
        this.addFile1.waitForExist({timeout: 60000});
        // const filePath = 'C:/Users/Bhattn/Documents/Projects/Development/ICS_Stuff/Automation/JoinX/joinX-Kings/app/download.jpg';
        // const remoteFilePath = browser.uploadFile(filePath);
        // this.addFile1.addValue(remoteFilePath);
        
        // browser.execute(
        //     // assign style to elem in the browser
        //     (el) => el.style.display = 'block',
        //     // pass in element so we don't need to query it again in the browser
        //     this.addFile1[0]
        // );
        // const path = require('path');
        // const filePath = path.join(__dirname,'..', '..', 'fixtures', 'C:/Users/Bhattn/Documents/Projects/Development/ICS_Stuff/Automation/JoinX/joinX-Kings/app/download.jpg');
        // const remoteFilePath = browser.uploadFile(filePath).then(() => {
        //     console.log("file uploaded");
        // });
        // this.addFile1[0].setValue(filePath);
        // browser.chooseFile(this.addFile1, filePath);
        // browser.addValue(this.addFile1[0], "C:/Users/Bhattn/Documents/Projects/Development/ICS_Stuff/Automation/JoinX/joinX-Kings/app/download.jpg");

        this.addFileBtn.click();
        browser.pause(10000);
        // browser.acceptAlert();
        // browser.pause(2000);
        this.addFile1.addValue('C:/Users/Bhattn/Documents/Projects/Development/ICS_Stuff/Automation/JoinX/joinX-Kings/app/test.png');
        // this.uploadFineBtn.fireEvent("onchange");
        // if ("createEvent" in browser) {
        //     var evt = browser.createEvent("HTMLEvents");
        //     evt.initEvent("change", false, true);
        //     this.addFile1[0].dispatchEvent(evt);
        // }
        // else
        //     this.addFile1[0].dispatchEvent(new Event('change'));
        // this.addFile1[0].on('change', function() {
        //     browser.pause(5000);
        // });
        browser.pause(5000);
    }

    uploadFile2 () {
        this.addFile1[1].waitForExist({timeout: 60000});
        // const filePath = 'C:/Users/Bhattn/Documents/Projects/Development/ICS_Stuff/Automation/JoinX/joinX-Kings/app/download.jpg';
        // const remoteFilePath = browser.uploadFile(filePath);
        // browser.addValue(this.addFile1[1], 'C:/Users/Bhattn/Documents/Projects/Development/ICS_Stuff/Automation/JoinX/joinX-Kings/app/download.jpg')
        // const path = require('path');
        // const filePath = path.join(__dirname, 'C:/Users/Bhattn/Documents/Projects/Development/ICS_Stuff/Automation/JoinX/joinX-Kings/app/download.jpg');
        // const remoteFilePath = browser.uploadFile(filePath);
        // this.addFile1[1].setValue(remoteFilePath);
        // browser.chooseFile(this.addFile1[1], filePath);
        // browser.addValue(this.addFile1[1], "C:/Users/Bhattn/Documents/Projects/Development/ICS_Stuff/Automation/JoinX/joinX-Kings/app/download.jpg");
        
        
        this.addFile1[1].setValue('C:/Users/Bhattn/Documents/Projects/Development/ICS_Stuff/Automation/JoinX/joinX-Kings/app/download.jpg');
        // this.uploadFineBtn.fireEvent("onchange");
        // if ("createEvent" in browser) {
        //     var evt = browser.createEvent("HTMLEvents");
        //     evt.initEvent("change", false, true);
        //     this.addFile1[1].dispatchEvent(evt);
        // }
        // else
        //     this.addFile1[1].dispatchEvent(new Event('change'));
        this.addFile1[1].change(function() {
            browser.pause(5000);
        });
        browser.pause(5000);
    }

    clickOnAddAnotherBtn () {
        browser.pause(10000);
        browser.touchAction([
            { action: 'press', x: 700, y: 2400 },
            { action: 'moveTo', x: 700, y: 600 },
            'release'
        ])
        this.addAnotherBtn.waitForExist({timeout: 60000});
        this.addAnotherBtn.click();
    }

    clickOnCertificateTypeDrd1 () {
        this.certificateType1.waitForExist({timeout: 60000});
        this.certificateType1.click();
    }

    clickOnSaveAndContinueBtn () {
        this.saveBtn.waitForExist({timeout: 60000});
        this.saveBtn.click();
    }

}
module.exports = new trainingScreen();