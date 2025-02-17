describe('employee management test', ()=> {
    beforeEach(()=> {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="password"]').type('admin123');
        cy.get('button.orangehrm-login-button').click();
    })

    it('should be able to add a new employee', ()=> {
        cy.contains('a', 'PIM').click();
        cy.get('a.oxd-topbar-body-nav-tab-item').eq(1).click();
        cy.get('input[name="firstName"]').type('Doe');
        cy.get('input[placeholder="Middle Name"]').type('john');
        cy.get('input[name="lastName"]').type('Smith');
        cy.contains('button', 'Save').click();
        cy.url().should('include', '/viewPersonalDetails');
        
    })
    
    
    it('should be able to delete a new employee', ()=> {
        cy.contains('a', 'PIM').click();
        cy.get('a.oxd-topbar-body-nav-tab-item').eq(0).click();
        cy.get('input[placeholder="Type for hints..."]').eq(0).type('doe')
        cy.contains('button', 'Search').click()
        cy.get('.oxd-table-row > :nth-child(1) > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click()
        cy.get('.orangehrm-horizontal-padding > div > .oxd-button').click()
        


        
    })
    
})