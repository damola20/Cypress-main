describe('Search functionality tests', () => {
    beforeEach(() => {
        cy.visit('https://demo.opencart.com/')
        cy.get('a.dropdown-toggle').contains('My Account').click()
        cy.get('a').contains('Login').click()
        cy.get('#input-email').type('dbamijoko@yahoo.com')
        cy.get('#input-password').type('Sacristy1234')
        cy.contains('button', 'Login').click()
    });


    it('it should validate  searching with an existing product name ', () => {
        cy.get('.form-control.form-control-lg').type('Samsung')
        cy.get('#search .btn.btn-light.btn-lg').click()
        cy.get('#input-search').type('Samsung')
        cy.get('#button-search').click()
        cy.contains('Samsung SyncMaster 941BW').should('be.visible')
        cy.contains('Samsung Galaxy Tab 10.1').should('be.visible')

    });
})