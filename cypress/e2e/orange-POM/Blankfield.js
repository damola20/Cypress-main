class blankfieldPage {
    navigate () {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    }
    typeUsername(username) {
        cy.get('input[name="username"]').type(username)
    }

    clickLoginButton() {
        cy.get('button.orangehrm-login-button').click()

    }

    VerifyErrorMessage(existingErrorMessage) {
        cy.get('span.oxd-input-field-error-message').should('contain.text', existingErrorMessage);
    }
    blankfieldLogin (username) {
        this.navigate()
        this.typeUsername(username)
        this.clickLoginButton()
        this.VerifyErrorMessage('Required')
    }
}
export default blankfieldPage