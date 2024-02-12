describe('CuraHealthcareService', () => {
    it('LoginCuraHealthcare', () => {
      cy.visit('https://katalon-demo-cura.herokuapp.com/');
      //clicking the three dots on right corner
     cy.get('#menu-toggle').click();
      //clicking login
      cy.xpath("//a[normalize-space()='Login']").click();
      //Assertion to check if Login page is Loaded
      cy.get('h2').should('contain','Login');
     cy.fixture('curaloginDetails').then((data)=>{
      
        //Entering username

      cy.get('#txt-username').type(data.username);
      //Entering password
      cy.get('#txt-password').type(data.password);
      //clicking on login button
      cy.get('#btn-login').click();
      //Assertion to check if make appointment page is loaded
      cy.get('h2').should('contain','Make Appointment');
      
    });
      //Handling Dropdowns
      cy.get('#combo_facility').select('Hongkong CURA Healthcare Center');
      //Visibility of the element
      cy.get('#chk_hospotal_readmission').should('be.visible');
      //selecting checkbox and checking through assertion if it is checked
      cy.get('#chk_hospotal_readmission').check().should('be.checked');
      //visibility of Radio button
      cy.xpath("//input[@id='radio_program_medicaid']").should('be.visible');
      //selecting radio button
      cy.xpath("//input[@id='radio_program_medicaid']").check().should('be.checked');
      //clicking on date picker
      cy.xpath("//span[@class='glyphicon glyphicon-calendar']").click();
      //clicking on a date
      cy.xpath("//td[@class='day'][normalize-space()='5']").click();
      cy.get('#txt_comment').click({ force: true });
      //clicking on comments textarea
      cy.xpath("//textarea[@id='txt_comment']").click().type("Need appointment in the morning hours");
     //clicking on book appointment button
      cy.get('#btn-book-appointment').click();
      //assertion to check appointment confirmation page loaded
      cy.get('h2').should('contain','Appointment Confirmation');
      cy.get('#menu-toggle').click();
      cy.xpath("//a[normalize-space()='Logout']").click();
      cy.url().should('include','katalon-demo-cura.herokuapp.com');
  
    });
  });