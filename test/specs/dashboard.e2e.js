const SplashScreen = require('../pageobjects/splash.screen');
const LoginScreen = require('../pageobjects/login.screen');
const DashBoardScreen = require('../pageobjects/dashBoard.screen');
const FindShiftScreen = require('../pageobjects/findShifts.screen');
const AvailabilityScreen = require('../pageobjects/availability.screen');
const BookingsScreen = require('../pageobjects/bookings.screen');
const MenuOptionsScreen = require('../pageobjects/menuOptions.screen');


const SecurePage = require('../pageobjects/secure.page');
const temp = require('../pageobjects/temp');

describe('Quick Nurse Application', () => {
    beforeAll('Splash screen feature execution only once before all test case', () => {
        for(var i = 0; i <= 8; i++) {
            SplashScreen.swipeThrough();
        }
        LoginScreen.clickOnBookingBtn();
    });
    beforeEach('Login functions only', () => {
        LoginScreen.clickOnSNGRadioBtn();
        LoginScreen.loginIntoApp("R1294", "Th0rn6ury2");
        DashBoardScreen.assertForDashBoardScreen();
    });

    afterEach('Logout functions only', () => {
        DashBoardScreen.logoutFromApp();
        LoginScreen.assertLoginScreen();
    });

    it('Verify the details on the My Dashboard page', () => {
        /**
         * Need to make sure that there is no shift booked for the login user
         */
        //assert no shift message on dashboard
        DashBoardScreen.assertForNoShiftMSg();

        //assert Availabiity quick link from dashboard
        DashBoardScreen.clickOnAvailabilityTile();
        AvailabilityScreen.assertForAvailibilityScreen();
        MenuOptionsScreen.clickOnDashboardMenu();
        DashBoardScreen.assertForDashBoardScreen();

        //assert Bookings quick link from dashboard
        DashBoardScreen.clickOnBookingsTile();
        BookingsScreen.assertForBookingsScreen();
        MenuOptionsScreen.clickOnDashboardMenu();
        DashBoardScreen.assertForDashBoardScreen();

        /**
         * Need to make sure that there is shift available for the day when we are running the test
         */
        //assert floating button link from dashboard
        DashBoardScreen.clickOnFindShiftFloatingBtn();
        FindShiftScreen.assertForFindShiftsScreen();
        MenuOptionsScreen.clickOnDashboardMenu();
        DashBoardScreen.assertForDashBoardScreen();
    });
});