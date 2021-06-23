var DataServices = function() {

    let email = "fabertester+nimesh001-e2e@gmail.com",
        env = "e2e-joinpulse",
        DELETE_USER = "https://eu-west-1.aws.webhooks.mongodb-stitch.com/api/client/v2.0/app/helper-kyqnd/service/ClearUserData/incoming_webhook/deleteProfile",
        FAB_AUTH = "https://acaciumgroup-test.eu.auth0.com/oauth/token",
        JOINPULSE_AUTH = "https://e2e-joinpulse-api.joinpulse.co.uk/auth-server/v0/faber-token/from-auth0",
        IMPORT_USER = "https://e2e-joinpulse-api.joinpulse.co.uk/profile-management-core/v0/import-profile/8bad8940-6ee2-425d-9f42-e4312cc1c219"

    let userData = {
        "email" : `${email}`,
        "env" :`${env}`
    };

    this.getUserData = () => {
        return userData;
    };

    let userInfo = {
        "client_id": "ZL2sG9AkStZH0oEr85p9UbhstOZUgk15",
        "client_secret": "CczFV7GbpRrF730t_pDjiw3-sjUmLF0-vYtDFPEPFQhqnTgKGQFB3lY_U4LJc7xb",
        "audience": "joinXAPI",
        "scope":"openid",
        "username":"fabertester+nimesh001-e2e@gmail.com",
        "password":"Password123",
        "grant_type": "password"
    }

    this.getUserInfo = () => {
        return userInfo;
    }

    let updateUserInfo = {
        "values":{
          "LastName": ["Tester"],
              "FirstName" : [ "fabertester+iqx_e6_midwives_mobileweb_chrome@gmail.com"],
              "Gender" : [ "Male"],
              "Mobile" : [ "07567676766"],
              "Address" : [ {"AddressLine3":[],"AddressLine2":[],"AddressLine1":["Birmingham"],"Region":[],"City":["Birmingham"],"PostCode":["WV24PA"]}],
              "NursingBand" : [ "Band6"],
              "GeneralNurseSkills" : [ "Midwives"],
              "StaffID" : [ "1116"],
              "SubstantiveEmployer" : [ "pulse"],
              "StaffSharedInbox" : [ "fabertester+shared@gmail.com"],
              "StaffEmail" : [ "fabertester+shared@gmail.com"],
              "DOB" : [ "1970-01-01T00:00:00.000Z"],
              "IQXID" : [ "1116"]
        }
    }

    this.getUpdatedUserInfo = () => {
        return updateUserInfo;
    }

    this.getTrainingSectionInfo = () => {
        return {"sections": [
            {
                "id": "training",
                "values": {
                    "TrainingCertificatesAvailable": ["Yes"],
                    "TrainingDocument": [
                        {"_groupInstanceId": `${trainingCertificates[0][4]}`,"TrainingCertificateType": ["ALSILS"],
                            "TrainingCertificate": [
                                {"fileName": `${trainingCertificates[0][0]}`, "fileSizeBytes": `${trainingCertificates[0][1]}`, "dateCreated": `${trainingCertificates[0][2]}`}
                            ]
                        }
                    ]
                }
            }
        ]};
    }

    this.getDBSSectionInfo = () => {
        return {"sections": [
            {
                "id": "dbs-details",
                "values": {
                    "DBSUpdateRegistered": ["DBSUpdateYes"],
                    "DBSUpdateCertificateNumber": ["009999999999"],
                    "DBSUpdateCertificate": [
                        {"fileName": `${dbsCertificates[0][0]}`, "fileSizeBytes": `${dbsCertificates[0][1]}`, "dateCreated": `${dbsCertificates[0][2]}`}
                    ]
                }
            }]
        }
    }

    this.getNextOfKinSectionInfo = () => {
        return {"sections": [
                {
                    "id": "tax-and-next-of-kin",
                    "values": {
                        "TaxCollectionText": [""],
                        "PaymentMethod": ["LTD"],
                        "TextTaxAndNOK2": [""],
                        "NextOfKin": [
                            {
                                "NextOfKinFirstName": ["Nimesh"],
                                "NextOfKinSurName": ["Bhatt"],
                                "NextOfKinRelationship": ["friend"],
                                "NextOfKinPhone": ["+44123456789"]
                            }
                        ],
                        "CertificateOfIncorporation": [
                            {"fileName": `${incorporationCertiKin[0][0]}`, "fileSizeBytes": `${incorporationCertiKin[0][1]}`, "dateCreated": `${incorporationCertiKin[0][2]}`}
                        ],
                        "ProofOfBusinessBankAccount": [
                            {"fileName": `${businessCertiKin[0][0]}`, "fileSizeBytes": `${businessCertiKin[0][1]}`, "dateCreated": `${businessCertiKin[0][2]}`}
                        ]
                    }
                }
            ]
        }
    }

    this.getRightToWorkChecksInfo = () => {
        return {"sections": [
                {
                    "id": "right-to-work-checks",
                    "values": {
                        "TextPreEmploymentChecks": [
                            ""
                        ],
                        "RightToWork": [
                            {"fileName": `${rightToWorkChecks[0][0]}`, "fileSizeBytes": `${rightToWorkChecks[0][1]}`, "dateCreated": `${rightToWorkChecks[0][2]}`}
                        ],
                        "RightToWork2": [
                            {"fileName": `${rightToWorkChecks[1][0]}`, "fileSizeBytes": `${rightToWorkChecks[1][1]}`, "dateCreated": `${rightToWorkChecks[1][2]}`}
                        ],
                        "TextProofOfAddress": [
                            ""
                        ],
                        "ProofOfAddress": [
                            {"fileName": `${rightToWorkChecks[2][0]}`, "fileSizeBytes": `${rightToWorkChecks[2][1]}`, "dateCreated": `${rightToWorkChecks[2][2]}`}
                        ],
                        "ProofOfAddress2": [
                            {"fileName": `${rightToWorkChecks[3][0]}`, "fileSizeBytes": `${rightToWorkChecks[3][1]}`, "dateCreated": `${rightToWorkChecks[3][2]}`}
                        ],
                        "TextProofOfNameChange": [
                            ""
                        ],
                        "NameChangeDocument": [
                            ""
                        ],
                        "RightToWorkConsent": [
                            true
                        ],
                        "TextSignDeclaration": [
                            ""
                        ]
                    }
                }
            ]
        }
    }
};

module.exports = new DataServices();