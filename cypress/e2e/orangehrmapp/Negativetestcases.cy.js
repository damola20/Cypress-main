describe('Negative test cases', () =>{
    beforeEach(() =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="password"]').type('admin123');
        cy.get('button.orangehrm-login-button').click();  
    })

    it('should require that blank field has some text', () =>{
        cy.contains('a', 'Recruitment').click()
        cy.contains('button.oxd-button', 'Add').click()
        cy.get('button[type="submit"]').contains('Save').click()
        cy.get('.oxd-input-group.oxd-input-field-bottom-space > span:last-child').should('be.visible')

    })

    it('should search for a non existing user', () =>{
        cy.contains('a', 'PIM').click();
        cy.get('a.oxd-topbar-body-nav-tab-item').eq(0).click();
        cy.get('input[placeholder="Type for hints..."]').eq(0).type('dolapo')
        cy.contains('button', 'Search').click()
        cy.contains('span', 'No Records Found').should('be.visible');
    })
})