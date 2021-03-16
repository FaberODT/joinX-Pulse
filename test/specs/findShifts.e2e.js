const SplashScreen = require('../pageobjects/splash.screen');
const LoginScreen = require('../pageobjects/login.screen');
const DashBoardScreen = require('../pageobjects/dashBoard.screen');
const MenuOptionsScreen = require('../pageobjects/menuOptions.screen');
const FindShiftsScreen = require('../pageobjects/findShifts.screen');
const ComplianceScreen = require('../pageobjects/compliance.screen');
const BookingsScreen = require('../pageobjects/bookings.screen');


describe('Quick Nurse Application', () => {
    beforeAll('Splash screen feature execution only once before all test case', () => {
        for(var i = 0; i <= 6; i++) {
            SplashScreen.swipeThrough();
        }
        LoginScreen.clickOnBookingBtn();
    });
    beforeEach('Login functions only', () => {
        LoginScreen.loginIntoApp("T3963", "Th0rn6ury2");
        DashBoardScreen.assertForDashBoardScreen();     
    });

    afterEach('Logout functions only', () => {
        DashBoardScreen.logoutFromApp();
        LoginScreen.assertLoginScreen();
    });


    it('Verify the details on the Shift Details page', () => {
        //following lines will redirect user on Find Shifts screen
        MenuOptionsScreen.redirectToFindShiftScreen();
        FindShiftsScreen.assertForFindShiftsScreen();

        //following will click on View Details button of very first shift from the list
        FindShiftsScreen.clickOnShiftViewDetailsBtn();

        //following will verify the title of the screen
        FindShiftsScreen.assertForScreenTitleOfShiftDetail();

        //following will assert back arrow button on shift details screen
        FindShiftsScreen.assertForScreenBackArrowOfShiftDetail();

        //following will assert shift date on shift details screen
        FindShiftsScreen.assertForScreenDateOfShiftDetail();

        //following will assert location icon on shift details screen
        FindShiftsScreen.assertForScreenLocationIconOfShiftDetail();

        //following will assert location text on shift detalis screen
        FindShiftsScreen.assertForScreenLocationTextOnShiftDetail();

        //following will assert ward type on shift details screen
        FindShiftsScreen.assertForScreenWardOnShiftDetails();

        //following will assert Arrival time drop down
        FindShiftsScreen.assertArrivalTimeDrd();

        //following will assert Shift distance and time on shift details screen
        FindShiftsScreen.assertForScreenTimeMilesOnShiftDetail();

        //following will assert check box on shift details screen
        FindShiftsScreen.assertForScreenCheckBoxesOnShiftDetail();

        //following will assert book now button on Shift details screen
        FindShiftsScreen.assertForScreenBookNowOnShiftDetail();
    });

    it('Verify the functionality when rates are available for the Shifts', () => {

    });

    it('Verify a successful booking', () => {
        LoginScreen.loginIntoApp("D5004", "Th0rn6ury2");
        DashBoardScreen.assertForDashBoardScreen();     

        MenuOptionsScreen.redirectToFindShiftScreen();
        FindShiftsScreen.assertForFindShiftsScreen();

        FindShiftsScreen.clickOnShiftViewDetailsBtn();
        FindShiftsScreen.assertArrivalTimeDrd();
        FindShiftsScreen.clickOnArrivalTimeDrd();
        FindShiftsScreen.clickOnConfirmationCheckBoxes();
        FindShiftsScreen.clickOnBookNowBtn();
        FindShiftsScreen.assertSuccessFullBooking();
        FindShiftsScreen.clickOnBookingsBtnOfSuccessScreen();
        FindShiftsScreen.assertMilesValueOnBookingsScreen();
    });

    it('Verify a failed booking', () => {
        LoginScreen.loginIntoApp("D5004", "Th0rn6ury2");
        DashBoardScreen.assertForDashBoardScreen();     

        MenuOptionsScreen.redirectToFindShiftScreen();
        FindShiftsScreen.assertForFindShiftsScreen();

        FindShiftsScreen.clickOnShiftViewDetailsBtn();
        FindShiftsScreen.assertArrivalTimeDrd();
        FindShiftsScreen.clickOnArrivalTimeDrd();
        FindShiftsScreen.clickOnConfirmationCheckBoxes();
        FindShiftsScreen.clickOnBookNowBtn();
        FindShiftsScreen.assertPossibleShiftIssueScreen();
        FindShiftsScreen.clickOnFloatShiftSearchBtn();
        console.log("I am done with all the steps");
    });
});