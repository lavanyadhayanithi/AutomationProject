class MakeAppointment
{
    visit()
    {
        cy.visit("/#appointment");
    }
    clickDropDown()
    {
        cy.get('#combo_facility').select('Hongkong CURA Healthcare Center');
    }
    verifyHospitalReadmissionVisible()
    {
        cy.get('#chk_hospotal_readmission').should('be.visible');
    }
    clickCheckBoxHospitalReadmission()
    {
        cy.get('#chk_hospotal_readmission').check().should('be.checked');
    }
    verifyHealthRadioButtonVisible()
    {
        cy.xpath("//input[@id='radio_program_medicaid']").should('be.visible');
    }

    clickHealthRadioButton()
    {
        cy.xpath("//input[@id='radio_program_medicaid']").check().should('be.checked');
    }
    clickDatePickerSymbol()
    {
        cy.xpath("//span[@class='glyphicon glyphicon-calendar']").click();
    }
    clickDateFromCalendar()
    {
        cy.xpath("//td[@class='day'][normalize-space()='5']").click();
        cy.get('#txt_comment').click({ force: true });
    }
    clickCommentsTextArea()
    {
        cy.xpath("//textarea[@id='txt_comment']").click().type("Need appointment in the morning hours");
    }
    clickBookAppointmentButton()
    {
        cy.get('#btn-book-appointment').click();
    }
    verifyAppointmentConfirmation()
    {
        cy.get('h2').should('contain','Appointment Confirmation');
    }

}
export default MakeAppointment;