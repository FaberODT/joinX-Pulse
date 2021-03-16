const SplashScreen = require('../pageobjects/splash.screen');
const LoginScreen = require('../pageobjects/login.screen');
const DashBoardScreen = require('../pageobjects/dashBoard.screen');
// const apiScreen = require('../pageobjects/api.screen');
const apiScreen = require('../helper/setupUser');

describe('Quick Nurse Application', () => {
    beforeAll('Splash screen feature execution only once before all test case', () => {
        // for(var i = 0; i <= 8; i++) {
        //     SplashScreen.swipeThrough();
        // }
        // LoginScreen.clickOnBookingBtn();
    });

    afterEach('Logout function after every test', () => {
        // DashBoardScreen.logoutFromApp();
        // LoginScreen.assertLoginScreen();
    });
    
    it('Verify user able to login to the Quick Nurse App with valid TNS credentials 1', () => {
        // LoginScreen.loginIntoApp("D5004", "Th0rn6ury2");
        // DashBoardScreen.assertForDashBoardScreen();
        console.log("Here, it will delete the user data");
        apiScreen.deleteUserData();
    });
    it('Verify user able to login to the Quick Nurse App with valid SNG credentials 2', () => {
        // LoginScreen.clickOnSNGRadioBtn();
        // LoginScreen.loginIntoApp("R1294", "Th0rn6ury2");
        // DashBoardScreen.assertForDashBoardScreen();
        console.log("Here, it will get Faber auth token");
        apiScreen.getFaberAuthToken();
    });
    it('Verify user able to login to the Quick Nurse App with valid SNG credentials 3', () => {
        // LoginScreen.clickOnSNGRadioBtn();
        // LoginScreen.loginIntoApp("R1294", "Th0rn6ury2");
        // DashBoardScreen.assertForDashBoardScreen();
        console.log("Here, it will get Joinpulse auth token");
        apiScreen.getJoinPulseAuthToken();
    });
    it('Verify user able to login to the Quick Nurse App with valid SNG credentials', () => {
        // LoginScreen.clickOnSNGRadioBtn();
        // LoginScreen.loginIntoApp("R1294", "Th0rn6ury2");
        // DashBoardScreen.assertForDashBoardScreen();
        console.log("Here, it will import basic info of User");
        apiScreen.updateUserInformation();
    });
});