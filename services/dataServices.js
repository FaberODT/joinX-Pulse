var DataServices = function() {

    let email = "fabertester+iqx_e6_midwives_mobileweb_chrome@gmail.com",
        env = "e2e-joinpulse",
        DELETE_USER = "https://eu-west-1.aws.webhooks.mongodb-stitch.com/api/client/v2.0/app/helper-kyqnd/service/ClearUserData/incoming_webhook/deleteProfile",
        FAB_AUTH = "https://faberodt-e2e.eu.auth0.com/oauth/token",
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
        "client_id" : "GDdfxXmEaK7UUIvjHrMbOBNhojAkiRMB",
        "client_secret" : "ZljDyjg_4tgTOyasYSsY0zKfM0ERKMcfItltGRX0-xefzFbZylNn5yAjsSGMyW6j",
        "audience" : "https://faber.work/api",
        "scope" :"openid",
        "username" :"mobileadmin@mailinator.com",
        "password" :"admin",
        "grant_type" : "password"
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

};

module.exports = new DataServices();