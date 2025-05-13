describe('checkout tests', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
    })
    it('should validate that user is able to checkout successfully', () => {
        cy.get('#login-button').click()
        cy.get('.btn_inventory').first().click()
        cy.get('.shopping_cart_link').click()
        cy.get('.btn_action.checkout_button').click()
        cy.get('#first-name').type('John')
        cy.get('#last-name').type('Doe')
        cy.get('#postal-code').type('12345')
        cy.get('.btn_primary.cart_button').click()
        cy.get('[data-test="finish"]').click()
        cy.get('[data-test="complete-header"]').should('have.text', 'Thank you for your order!')
    })

    it('should validate that user is unable to checkout with empty fields', () => {
        cy.get('#login-button').click()
        cy.get('.btn_inventory').first().click()
        cy.get('.shopping_cart_link').click()
        cy.get('.btn_action.checkout_button').click()
        cy.get('.btn_primary.cart_button').click()
        cy.get('[data-test="error"]').should('have.text', 'Error: First Name is required')
    })

    it('should validate that user is unable to checkout with invalid postal code', () => {
        cy.get('#login-button').click()
        cy.get('.btn_inventory').first().click()
        cy.get('.shopping_cart_link').click()
        cy.get('.btn_action.checkout_button').click()
        cy.get('#first-name').type('John')
        cy.get('#last-name').type('Doe')
        cy.get('#postal-code').type('abcde')
        cy.get('.btn_primary.cart_button').click()
        cy.get('[data-test="finish"]').click()
        cy.get('[data-test="error"]').should('have.text', 'Error: Postal Code is required')
    })

})