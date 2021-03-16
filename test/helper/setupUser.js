require('dotenv').config()
var expect = require('chai').expect,
  supertest = require('supertest'),
  dataServices = require('../../services/dataServices'),
  delete_user = supertest("https://eu-west-1.aws.webhooks.mongodb-stitch.com/api/client/v2.0/app/helper-kyqnd/service/ClearUserData/incoming_webhook/deleteProfile"),
  fab_auth = supertest("https://faberodt-e2e.eu.auth0.com/oauth/token"),
  joinpulse_auth = supertest("https://e2e-joinpulse-api.joinpulse.co.uk/auth-server/v0/faber-token/from-auth0"),
  import_user = supertest("https://e2e-joinpulse-api.joinpulse.co.uk/profile-management-core/v0/import-profile/8bad8940-6ee2-425d-9f42-e4312cc1c219"),
  fabAccessToken = "", joinpulseAccessToken = "";

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
            // if (err) return done(err);
            // done();
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
            // if (err) return done(err);
            // done();
        });
    }

    getJoinPulseAuthToken() {
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
            // if (err) return done(err);
            // done();
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
            // if(err) return done(err);
            // done();
        });
    }
}
module.exports = new apiService();
// describe('Setup User:', () => {

//   let fabAccessToken, joinpulseAccessToken;

//   it('should delete the user information', (done) => {
//     delete_user.post('')
//         .set('Accept', 'application/json')
//         .send(dataServices.getUserData())
//         .expect(200)
//         .end ((err, res) => {
//           // response should have a true as a string
//           expect(res.body).to.be.true;
//           if (err) return done(err);
//           done();
//       });
//   });

//   it('should get user faber auth token', (done) => {
//     fab_auth.post('/')
//         .set('Accept', 'application/json')
//         .send(dataServices.getUserInfo())
//         .expect(200)
//         .end ((err, res) => {
//             // response should have a accessToken as a property 
//             expect(res.body).to.have.property("access_token");
//             expect(res.body.access_token).to.not.equal(null);
//             fabAccessToken = res.body.access_token;
//             if (err) return done(err);
//             done();
//         });
//   });

//   it('should get joinpulse auth token', (done) => {
//     joinpulse_auth.post('')
//         .set('Accept', 'application/json')
//         .set('Authorization', `Bearer ${fabAccessToken}`)
//         .expect(200)
//         .end((err, res) => {
//             // response should have a accessToken as a property 
//             expect(res.body).to.have.property("access_token");
//             expect(res.body.access_token).to.not.equal(null);
//             joinpulseAccessToken = res.body.access_token;
//             if (err) return done(err);
//             done();
//         });
//   });

//   it('should be able to update the user information', (done) => {
//     import_user.patch('')
//         .set('Accept', 'application/json')
//         .set('Authorization', `Bearer ${joinpulseAccessToken}`)
//         .send(dataServices.getUpdatedUserInfo())
//         .expect(204)
//         .end((err, res) => {
//           if(err) return done(err);
//           done();
//         });
//   });

// });
