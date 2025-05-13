describe('Product listing page', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
    });
    // test case to view products
    it('View products', () => {
        cy.get('.product_sort_container').select('za')
        cy.get('.product_sort_container').should('have.value', 'za')
        cy.get('.product_sort_container').select('lohi')
        cy.get('.product_sort_container').should('have.value', 'lohi')
    })
    // Test case validating adding item to cart
    it('Add product to cart', () => {
        cy.get('.btn_inventory').first().click()
        cy.get('.shopping_cart_badge').should('have.text', '1')
        cy.get('.shopping_cart_link').click()
        cy.get('.cart_item').should('be.visible')
    })

    // Test case validating removing item from cart
    it('Remove product from cart', () => {
        cy.get('.btn_inventory').first().click()
        cy.get('.shopping_cart_badge').should('have.text', '1')
        cy.get('.shopping_cart_link').click()
        cy.get('.cart_item').should('be.visible')
        cy.get('.btn_secondary.cart_button').click()
        cy.get('.cart_item').should('not.exist')
    })
})