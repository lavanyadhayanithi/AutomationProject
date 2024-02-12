class Login
{
    visit()
    {
        cy.visit("/");
    }

    clickMainMenu()
    {
        cy.get('#menu-toggle').click();
    }
    clickLoginWord()
    {
        cy.xpath("//a[normalize-space()='Login']").click();
    }
    verifyLoginPageDisplayed()
    {
        cy.get('h2').should('contain','Login');
    }
setUserName(username)
{
    cy.get('#txt-username').type(username);
}
setPassword(password)
{
    cy.get('#txt-password').type(password);
}
clickLogin()
{
    cy.get('#btn-login').click();
}
verifyMakeAppointment()
{
    cy.get('h2').should('contain','Make Appointment');
}
}
export default Login;