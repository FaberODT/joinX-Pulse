const expect = require("chai").expect;
global.tag = process.argv[3];
/**
 * object containing all methods, selectors, and functionality of Boikings screen
 */
class bookingsScreen {

    get bookingslbl () { return $('//*[contains(@text,"Bookings") or contains(@name, "Bookings")]')}

    assertForBookingsScreen() {
        this.bookingslbl.waitForExist({timeout: 60000});
        if(tag == "android"){
            expect(this.bookingslbl.getText()).to.equal('Bookings');
        }
        else{
            expect(this.bookingslbl.getAttribute('name')).to.equal('Bookings');
        }
    }
}
module.exports = new bookingsScreen();