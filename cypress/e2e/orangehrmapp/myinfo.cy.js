describe('My Info tests', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="password"]').type('admin123');
        cy.get('button.orangehrm-login-button').click(); 
    })

    it('User should be able to create personal details with the first and last name evident on the right corner of the screen', ()=> {
       cy.contains('a', 'My Info').click()
       cy.url().should('include', 'viewPersonalDetails/empNumber/7')
       cy.get('input[name="firstName"]').clear()
       cy.get('input[name="firstName"]').type('damola')
       cy.get('input[name="middleName"]').clear()
       cy.get('input[name="middleName"]').type('kehinde')
       cy.get('input[name="lastName"]').clear()
       cy.get('input[name="lastName"]').type('B')
       cy.get(':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear()
       cy.get(':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('090')
       cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear()
       cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('236')
       cy.get(':nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear()
       cy.get(':nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('2314')
       cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').clear()
       cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').type('2025-10-10')
       cy.get('body').click()
       cy.get('.oxd-select-text--after i.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').eq(0).click();
       cy.contains('Nigerian').click()
       cy.get('.oxd-select-text--after i.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').eq(1).click();
       cy.contains('Married').click()
       cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').clear()
       cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').type('2007-09-07')
       cy.get('body').click()
       cy.contains('label', 'Male').click()
       cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').eq(0).click()
       cy.get('.oxd-userdropdown-tab p.oxd-userdropdown-name').should('contain', 'damola B')


   


    })

})