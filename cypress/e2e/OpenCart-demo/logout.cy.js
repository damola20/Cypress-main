describe('Logout tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost/opencart/')
        cy.get('a.dropdown-toggle').contains('My Account').click()
        cy.get('a').contains('Login').click()
        cy.get('#input-email').type('dbamijoko@yahoo.com')
        cy.get('#input-password').type('Sacristy1234')
        cy.contains('button', 'Login').click()
    });

    it('Should successfully logout', () => {
        cy.get('a.dropdown-toggle').contains('My Account').click()
        cy.get('a').contains('Logout').click({ force: true })
        cy.url().should('not.include', '/account/account')
        cy.get('h1').should('contain.text', 'Account Logout')
        cy.get('a.dropdown-toggle').contains('My Account').click()
        cy.get('a').contains('Login').should('be.visible')   

    });

    it('Should successfully logout from right column options', () => {
        cy.contains('a.list-group-item', 'Logout').click()
        cy.url().should('not.include', '/account/account')
        cy.get('h1').should('contain.text', 'Account Logout')
        cy.get('a.dropdown-toggle').contains('My Account').click()
        cy.get('a').contains('Login').should('be.visible')   

    });


    
    it('Should stay logged in after closing the browser', () => {
        // should stay logged in after closing the browser

    });


    it('should validate logging out and browsing back', () => {
        cy.get('a.dropdown-toggle').contains('My Account').click()
        cy.get('a').contains('Logout').click({ force: true })
        cy.go('back')  
    });


    it.only('Validate logout page', () => {
        cy.get('a.dropdown-toggle').contains('My Account').click()
        cy.get('a').contains('Logout').click({ force: true })
        cy.get('li.breadcrumb-item').contains('Account').should('be.visible')
        cy.get('li.breadcrumb-item').contains('Logout').should('be.visible')
    });


})