describe('logout tests', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
    })
    it('should validate that user is able to logout successfully', () => {
        cy.get('#login-button').click()
        cy.get('.bm-burger-button').click()
        cy.get('#logout_sidebar_link').click()
        cy.url().should('include', 'saucedemo.com/')
        cy.get('.login_logo').should('be.visible')
    })
})