class saucedemoLoginPage {
    constructor() {
        this.usernameInput = "#user-name"
        this.passwordInput = "#password"
        this.loginbutton = "#login-button"
    }

    visit () {
        cy.visit('https://www.saucedemo.com/')
    }

    EnterUsername (username) {
        cy.get(this.usernameInput).type(username)
    }

    EnterPassword (password) {
        cy.get(this.passwordInput).type(password)
    }

    ClickLoginButton () {
        cy.get(this.loginbutton).click()
    }


    login(username, password) {
        this.visit()
        this.EnterUsername(username)
        this.EnterPassword(password)
        this.ClickLoginButton()
    }
}

export default saucedemoLoginPage;
