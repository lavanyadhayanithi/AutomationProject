class Logout
{
    clickLogoutWord()
    {
        cy.xpath("//a[normalize-space()='Logout']").click();
    }
    verifyCuraMainPage()
{
    cy.url().should('include','katalon-demo-cura.herokuapp.com');
}
}
export default Logout;