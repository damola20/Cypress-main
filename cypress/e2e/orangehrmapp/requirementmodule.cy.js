describe('requirement module tests', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="password"]').type('admin123');
        cy.get('button.orangehrm-login-button').click(); 
    })

    it('should be able to add a new requirement', ()=> {
        cy.contains('a', 'Recruitment').click()
        cy.contains('button.oxd-button', 'Add').click()
        cy.get('input[name="firstName"]').type('damola')
        cy.get('input[name="middleName"]').type('kehinde')
        cy.get('input[name="lastName"]').type('bamijoko')
        cy.get('i.bi-caret-down-fill').eq(1).click()
        cy.contains('Software Engineer').click()
        cy.get('input[placeholder="Type here"]').first().type('damolabamijoko@gmail.com')
        cy.get('input[placeholder="Type here"]').eq(1).type('0903717521')
        cy.get('input[placeholder="Enter comma seperated words..."]').type('QA')
        cy.get('textarea[placeholder="Type here"]').type('Hiring')
        cy.get('button[type="submit"]').contains('Save').click()
        cy.url().should('include', 'addCandidate')
    })

    it('assert error message when adding a new requirement with empty fields', ()=> {
        cy.contains('a', 'Recruitment').click()
        cy.contains('button.oxd-button', 'Add').click()
        cy.get('button[type="submit"]').contains('Save').click()
        cy.get('.oxd-input-group.oxd-input-field-bottom-space').contains('span', 'Required').should('be.visible')
    })
})