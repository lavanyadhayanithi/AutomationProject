import Login from "../PageObjects/LoginPage.js";
import MakeAppointment from "../PageObjects/MakeAppointmentPage.js";
import Logout from "../PageObjects/LogoutPage.js";

describe('CuraHealthcareService', () => {
  let ln =new Login();
  let ma=new MakeAppointment();
  let lo = new Logout();
  it('LoginCuraHealthcare', () => {
        cy.fixture('curaloginDetails').then((data)=>{
          
          ln.visit();
          ln.clickMainMenu();
          ln.clickLoginWord();
          ln.verifyLoginPageDisplayed();
          ln.setUserName(data.username);
          ln.setPassword(data.password);
          ln.clickLogin();
          ln.verifyMakeAppointment(); 
          ma.clickDropDown();
    ma.verifyHospitalReadmissionVisible();
    ma.clickCheckBoxHospitalReadmission();
    ma.verifyHealthRadioButtonVisible();
    ma.clickHealthRadioButton();
    ma.clickDatePickerSymbol();
    ma.clickDateFromCalendar();
    ma.clickCommentsTextArea();
    ma.clickBookAppointmentButton();
    ln.clickMainMenu();
    lo.clickLogoutWord();
    lo.verifyCuraMainPage();
        });
      });
  


});