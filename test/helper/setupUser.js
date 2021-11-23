require('dotenv').config()
var expect = require('chai').expect,
  supertest = require('supertest'),
  dataServices = require('../../services/dataServices'),
  delete_user = supertest("https://eu-west-1.aws.webhooks.mongodb-stitch.com/api/client/v2.0/app/helper-kyqnd/service/ClearUserData/incoming_webhook/deleteProfile"),
  fab_auth = supertest("https://acaciumgroup-test.eu.auth0.com/oauth/token"),
  joinpulse_auth = supertest("https://e2e-joinpulse-api.joinpulse.co.uk/auth-server/v0/faber-token/from-auth0"),
  import_user = supertest("https://e2e-joinpulse-api.joinpulse.co.uk/profile-management-core/v0/import-profile/8bad8940-6ee2-425d-9f42-e4312cc1c219"),
  joinpulse_fileUpload = supertest("https://e2e-joinpulse-api.joinpulse.co.uk/profile-management-core/v1/my-profile"),
  fabAccessToken = "", joinpulseAccessToken = "", fileUpload_responce = [], fileUpload_responce1 = [], fileUpload_responce_DBS = [], fileUpload_additional_document = [], fileUpload_incorporation_kin = [], fileUpload_business_kin = [],
  fileUpload_RWC1 = [], fileUpload_RWC2 = [], fileUpload_RWC3 = [], fileUpload_RWC4 = [];
  
trainingCertificates = [];
dbsCertificates = [];
additionalDocument = [];
incorporationCertiKin = [];
businessCertiKin = []; 
rightToWorkChecks1 = [];
rightToWorkChecks2 = [];
rightToWorkChecks3 = [];

class apiService {
    deleteUserData() {
        delete_user.post('')
        .set('Accept', 'application/json')
        .send(dataServices.getUserData())
        .expect(200)
        .end ((err, res) => {
        // response should have a true as a string
            expect(res.body).to.be.true;
            if (err) return err;
        });
    }

    getFaberAuthToken() {
        fab_auth.post('/')
        .set('Accept', 'application/json')
        .send(dataServices.getUserInfo())
        .expect(200)
        .end ((err, res) => {
            // response should have a accessToken as a property 
            expect(res.body).to.have.property("access_token");
            expect(res.body.access_token).to.not.equal(null);
            fabAccessToken = res.body.access_token;
            if (err) return err;
        });
    }

    getJoinPulseAuthToken() {
        console.log("Faber token : " + fabAccessToken);
        joinpulse_auth.post('')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${fabAccessToken}`)
        .expect(200)
        .end((err, res) => {
            // response should have a accessToken as a property 
            expect(res.body).to.have.property("access_token");
            expect(res.body.access_token).to.not.equal(null);
            joinpulseAccessToken = res.body.access_token;
            if (err) return err;
        });
    }

    updateUserInformation() {
        import_user.patch('')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${joinpulseAccessToken}`)
        .send(dataServices.getUpdatedUserInfo())
        .expect(204)
        .end((err, res) => {
            if(err) return err;
        });
    }

    /**
     * API will upload the certificate for Incorporation
     */
    uploadCertificateForIncorporationNextOfKin () {
        console.log("Joinpulse Auth token is: " + joinpulseAccessToken);
        joinpulse_fileUpload.post('/files/CertificateOfIncorporation')
        .set('Authorization', `Bearer ${joinpulseAccessToken}`)
        .attach('file', process.cwd() + "/app/test.png")
        .expect(200)
        .end((err, res) => {
            fileUpload_incorporation_kin[0] = res.body.file.fileName;
            fileUpload_incorporation_kin[1] = res.body.file.fileSizeBytes;
            fileUpload_incorporation_kin[2] = res.body.file.dateCreated;
            fileUpload_incorporation_kin[3] = res.body.stagingId;
            incorporationCertiKin.push(fileUpload_incorporation_kin);
            if(err) return err;
        });
    }

    /**
     * API will upload the certificate for Business bank account
     */
    uploadCertificateForBusinessNextOfKin () {
        joinpulse_fileUpload.post('/files/ProofOfBusinessBankAccount' + `?stagingId=${incorporationCertiKin[0][3]}`)
        .set('Authorization', `Bearer ${joinpulseAccessToken}`)
        .attach('file', process.cwd() + "/app/test.png")
        .expect(200)
        .end((err, res) => {
            fileUpload_business_kin[0] = res.body.file.fileName;
            fileUpload_business_kin[1] = res.body.file.fileSizeBytes;
            fileUpload_business_kin[2] = res.body.file.dateCreated;
            fileUpload_business_kin[3] = res.body.stagingId;
            businessCertiKin.push(fileUpload_business_kin);
            if(err) return err;
        });
    }

    /**
     * API will save and continue the Next of Kin section
     */
    saveAndContinueNextOfKinSection () {
        joinpulse_fileUpload.patch(`?stagingId=${businessCertiKin[0][3]}`)
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${joinpulseAccessToken}`)
        .send(dataServices.getNextOfKinSectionInfo())
        .expect(204)
        .end((err, res) => {
            if(err) return err;
        });
    }

    /**
     * API will save and continue the References section
     */
    saveAndContinueReferencesSection () {
        joinpulse_fileUpload.patch('')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${joinpulseAccessToken}`)
        .send(dataServices.getReferencesInfo())
        .expect(204)
        .end((err, res) => {
            if(err) return err;
        })
    }

    /**
     * API will upload the certificate for Training Section
     */
    uploadFileForTrainingSection() {
        console.log("Joinpulse token: " + joinpulseAccessToken);
        joinpulse_fileUpload.post('/files/ALSILS')
        .set('Authorization', `Bearer ${joinpulseAccessToken}`)
        .attach('file', process.cwd() + "/app/test.png")
        .expect(200)
        .end((err, res) => {
            fileUpload_responce[0] = res.body.file.fileName;
            fileUpload_responce[1] = res.body.file.fileSizeBytes;
            fileUpload_responce[2] = res.body.file.dateCreated;
            fileUpload_responce[3] = res.body.stagingId;
            fileUpload_responce[4] = res.body.groupInstanceIds[0];
            trainingCertificates.push(fileUpload_responce);
            console.log("Training certificate after uploading 1 certificate: " + trainingCertificates);
            if(err) return err;
        });
    }

    /**
     * API will upload the certificate for Training Section
     */
    uploadFileForTrainingSection1() {
        console.log("Training certificate after uploading 1 certificate: " + trainingCertificates);
        joinpulse_fileUpload.post('/files/CounterFraud' + `?stagingId=${trainingCertificates[0][3]}`)
        .set('Authorization', `Bearer ${joinpulseAccessToken}`)
        .attach('file', process.cwd() + "/app/test.png")
        .expect(200)
        .end((err, res) => {
            fileUpload_responce1[0] = res.body.file.fileName;
            fileUpload_responce1[1] = res.body.file.fileSizeBytes;
            fileUpload_responce1[2] = res.body.file.dateCreated;
            fileUpload_responce1[3] = res.body.stagingId;
            fileUpload_responce1[4] = res.body.groupInstanceIds[0];
            trainingCertificates.push(fileUpload_responce1);
            console.log("Training certificate after uploading 2 certificate: " + trainingCertificates);
            if(err) return err;
        });
    }


    /**
     * API will save and continue the Training section
     */
    saveAndContinueTrainingSection () {
        console.log("Value of Staging id for save and continue: " + trainingCertificates[1][3]);
        joinpulse_fileUpload.patch(`?stagingId=${trainingCertificates[1][3]}`)
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${joinpulseAccessToken}`)
        .send(dataServices.getTrainingSectionInfo())
        .expect(204)
        .end((err, res) => {
            console.log("Saved now...!!!!!");
            if(err) return err;
        });
    }


    /**
     * API will upload Supporting file 1 for Right to Work Checks section
     */
    uploadFile1ForRightToWorkChecksSection() {
        console.log("Joinpulse Auth token is: " + joinpulseAccessToken);
        joinpulse_fileUpload.post('/files/RightToWorkUKPassport')
        .set('Authorization', `Bearer ${joinpulseAccessToken}`)
        .attach('file', process.cwd() + "/app/test.png")
        .expect(200)
        .end((err, res) => {
            fileUpload_RWC1[0] = res.body.file.fileName;
            fileUpload_RWC1[1] = res.body.file.fileSizeBytes;
            fileUpload_RWC1[2] = res.body.file.dateCreated;
            fileUpload_RWC1[3] = res.body.stagingId;
            rightToWorkChecks1.push(fileUpload_RWC1);
            console.log("righttocheck1 value: " + rightToWorkChecks1);
            if(err) return err;
        });
    }

    /**
     * API will upload Supporting file 2 for Right to Work Checks section
     */
    uploadFile2ForRightToWorkChecksSection() {
        joinpulse_fileUpload.post('/files/ProofOfAddressBankStatement' + `?stagingId=${rightToWorkChecks1[0][3]}`)
        .set('Authorization', `Bearer ${joinpulseAccessToken}`)
        .attach('file', process.cwd() + "/app/test.png")
        .expect(200)
        .end((err, res) => {
            fileUpload_RWC2[0] = res.body.file.fileName;
            fileUpload_RWC2[1] = res.body.file.fileSizeBytes;
            fileUpload_RWC2[2] = res.body.file.dateCreated;
            fileUpload_RWC2[3] = res.body.stagingId;
            rightToWorkChecks2.push(fileUpload_RWC2);
            console.log("rightToWorkCheck2 value: " + rightToWorkChecks1);
            if(err) return err;
        });
    }

    /**
     * API will upload Supporting file 3 for Right to Work Checks section
     */
    uploadFile3ForRightToWorkChecksSection() {
        joinpulse_fileUpload.post('/files/ProofOfAddress2UtilityBill' + `?stagingId=${rightToWorkChecks2[0][3]}`)
        .set('Authorization', `Bearer ${joinpulseAccessToken}`)
        .attach('file', process.cwd() + "/app/test.png")
        .expect(200)
        .end((err, res) => {
            fileUpload_RWC3[0] = res.body.file.fileName;
            fileUpload_RWC3[1] = res.body.file.fileSizeBytes;
            fileUpload_RWC3[2] = res.body.file.dateCreated;
            fileUpload_RWC3[3] = res.body.stagingId;
            rightToWorkChecks3.push(fileUpload_RWC3);
            console.log("rightToWorkChecks3 value: " + rightToWorkChecks3);
            if(err) return err;
        });
    }


    /**
     * API will upload Supporting file 4 for Right to Work Checks section
     */
    // uploadFile4ForRightToWorkChecksSection() {
    //     console.log("rightToWorkChecks while uploaidng 4th file: " + rightToWorkChecks);
    //     joinpulse_fileUpload.post('/files/ProofOfAddress2' + `?stagingId=${rightToWorkChecks[2][3]}`)
    //     .set('Authorization', `Bearer ${joinpulseAccessToken}`)
    //     .attach('file', process.cwd() + "/app/test.png")
    //     .expect(200)
    //     .end((err, res) => {
    //         fileUpload_RWC4[0] = res.body.file.fileName;
    //         fileUpload_RWC4[1] = res.body.file.fileSizeBytes;
    //         fileUpload_RWC4[2] = res.body.file.dateCreated;
    //         fileUpload_RWC4[3] = res.body.stagingId;
    //         rightToWorkChecks.push(fileUpload_RWC4);
    //         if(err) return err;
    //     });
    // }

    /**
     * API will save and continue the RWC section
     */
    saveAndContinueRWCSection () {
        console.log("rightToWorkChecks while saving the section: " + rightToWorkChecks3);
        joinpulse_fileUpload.patch(`?stagingId=${rightToWorkChecks3[0][3]}`)
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${joinpulseAccessToken}`)
        .send(dataServices.getRightToWorkChecksInfo())
        .expect(204)
        .end((err, res) => {
            if(err) return err;
        });
    }

    /**
     * API will upload the certificate for Additional Document section
     */
    uploadCertificateForAdditionalDocument() {
        console.log("Joinpulse bearer token value: " + joinpulseAccessToken);
        joinpulse_fileUpload.post('/files/Photo')
        .set('Authorization', `Bearer ${joinpulseAccessToken}`)
        .attach('file', process.cwd() + "/app/test.png")
        .expect(200)
        .end((err, res) => {
            fileUpload_additional_document[0] = res.body.file.fileName;
            fileUpload_additional_document[1] = res.body.file.fileSizeBytes;
            fileUpload_additional_document[2] = res.body.file.dateCreated;
            fileUpload_additional_document[3] = res.body.stagingId;
            additionalDocument.push(fileUpload_additional_document);
            console.log("Photo badge ID is: " + fileUpload_additional_document);
            console.log("Photo badge ID is: " + additionalDocument);
            if(err) return err;
        });
    }

    /**
     * API will save and continue Additional Document section
     */
    saveAndContinueAdditionalDocumentSection () {
        console.log("Additional Document is: " + additionalDocument);
        joinpulse_fileUpload.patch(`?stagingId=${additionalDocument[0][3]}`)
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${joinpulseAccessToken}`)
        .send(dataServices.getAdditionalDocumentInfo())
        .expect(204)
        .end((err, res) => {
            if(err) return err;
        });
    }


    /**
     * API will upload the certificate for DBS section
     */
    uploadCertificateForDBSSection() {
        console.log("Joinpulse bearer token value: " + joinpulseAccessToken);
        joinpulse_fileUpload.post('/files/DBSUpdateCertificate')
        .set('Authorization', `Bearer ${joinpulseAccessToken}`)
        .attach('file', process.cwd() + "/app/test.png")
        .expect(200)
        .end((err, res) => {
            fileUpload_responce_DBS[0] = res.body.file.fileName;
            fileUpload_responce_DBS[1] = res.body.file.fileSizeBytes;
            fileUpload_responce_DBS[2] = res.body.file.dateCreated;
            fileUpload_responce_DBS[3] = res.body.stagingId;
            dbsCertificates.push(fileUpload_responce_DBS);
            console.log("DBS certificates are: " + fileUpload_responce_DBS);
            console.log("DBS certificates are: " + dbsCertificates);
            if(err) return err;
        });
    }

    /**
     * API will save and continue the DBS section
     */
    saveAndContinueDBSSection () {
        console.log("DBS certificates are: " + dbsCertificates);
        joinpulse_fileUpload.patch(`?stagingId=${dbsCertificates[0][3]}`)
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${joinpulseAccessToken}`)
        .send(dataServices.getDBSSectionInfo())
        .expect(204)
        .end((err, res) => {
            if(err) return err;
        });
    }
}
module.exports = new apiService();
