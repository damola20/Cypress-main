describe('cart functionality tests', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
    })

    it('should validate that user is able to add items to the cart', () => {
        cy.get('#login-button').click()
        cy.get('.btn_inventory').first().click()
        cy.get('.shopping_cart_badge').should('have.text', '1')
        cy.get('.shopping_cart_link').click()
        cy.get('.cart_item').should('be.visible')
    })

    it('should validate that user is able to remove items from the cart', () => {
        cy.get('#login-button').click()
        cy.get('.btn_inventory').first().click()
        cy.get('.shopping_cart_badge').should('have.text', '1')
        cy.get('.shopping_cart_link').click()  
        cy.get('.cart_item').should('be.visible')
        cy.get('.btn_secondary.cart_button').click()
        cy.get('.cart_item').should('not.exist')
    })
    
})