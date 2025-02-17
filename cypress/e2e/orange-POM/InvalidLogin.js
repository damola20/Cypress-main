class invalidLoginPage {
    navigate() {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    }
    typeUsername(username) {
        cy.get('input[name="username"]').type(username)
    }

    typePassword(password) {
        cy.get('input[name="password"]').type(password)
    }

    clickLogin() {
        cy.get('button.orangehrm-login-button').click()
    }

    assertErrorMessage(expectedMessage) {
        cy.get('.oxd-alert-content--error > .oxd-alert-content-icon + .oxd-alert-content-text').should('contain.text', expectedMessage)
    }

    InvalidLogin(username, password,) {
        this.navigate()
        this.typeUsername(username);
        this.typePassword(password);
        this.clickLogin();
        this.assertErrorMessage('Invalid credentials');
    }
}

export default invalidLoginPage;