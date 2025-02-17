describe(' forgot Password tests', () => {
beforeEach(() => {
    cy.visit('https://demo.opencart.com/')
})

    it('should validate that user is able to reset password', () => {
        cy.get('a.dropdown-toggle').contains('My Account').click()
        cy.get('a').contains('Login').click()
        cy.contains('Forgotten Password').click()
        cy.url().should('include', 'route=account/forgotten')
        cy.get('h1').should('contain.text', 'Forgot Your Password?')
        cy.get('#input-email').type('damolabamijoko@gmail.com')
        cy.contains('Continue').click()
        cy.contains('An email with a confirmation link has been sent to your email').should('be.visible')
    })



    it('should validate resetting the password for a non registered account, a message should displaying that account isnt registered', () => {
        cy.get('a.dropdown-toggle').contains('My Account').click()
        cy.get('a').contains('Login').click()
        cy.contains('Forgotten Password').click()
        cy.url().should('include', 'route=account/forgotten')
        cy.get('h1').should('contain.text', 'Forgot Your Password?')
        cy.get('#input-email').type('nwewisisd@gmail.com')
        cy.contains('Continue').click()
        cy.get('#alert').should('contain.text', ' Warning: The E-Mail Address was not found in our records!')
    })


    it.only('should validate breadcrumb of the forgotten password', () => {
        cy.get('a.dropdown-toggle').contains('My Account').click()
        cy.get('a').contains('Login').click()
        cy.contains('Forgotten Password').click()
        cy.contains('Forgotten Password').should('be.visible')

    })

})