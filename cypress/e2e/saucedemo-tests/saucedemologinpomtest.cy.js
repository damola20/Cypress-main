import saucedemoLoginPage from "../saucedemo-classes-for-pom/login";

describe('Sauce Demo Login', () => {
    it("should succecssfully loging and take you to the right page", () => {
        const saucedemologinpage = new saucedemoLoginPage();
        saucedemologinpage.login('standard_user', 'secret_sauce')
        cy.url().should('include', '/inventory.html')
    })
 ;
})