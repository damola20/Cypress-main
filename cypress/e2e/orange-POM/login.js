class LoginPage {
    navigate() {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
    }
    
    enterUsername(username) {
        cy.get('input[name="username"]').type(username);
    }

    enterPassword(password) {
        cy.get('input[name="password"]').type(password);
    }

    clickLoginButton() {
        cy.get('button.orangehrm-login-button').click();
    }

    verifyLoginSuccess() {
        cy.url().should('include', '/dashboard');
        cy.get('h6').should('contain.text', 'Dashboard');
    }

    login(username, password) {
        this.navigate();  // Navigate to the login page before logging in
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickLoginButton();
        this.verifyLoginSuccess();
    }
}
export default LoginPage