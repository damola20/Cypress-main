class NegativeTestsPage {
    navigate () {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    }

    login (username, password) {
        cy.get('input[name="username"]').type(username)
        cy.get('input[name="password"]').type(password)
        cy.get('button.orangehrm-login-button').click()
    }

    blankfieldTextassertion () {
        cy.contains('a', 'Recruitment').click()
        cy.contains('button.oxd-button', 'Add').click()
        cy.get('button[type="submit"]').contains('Save').click()
        cy.get('.oxd-input-group.oxd-input-field-bottom-space > span:last-child').should('be.visible')

    }
    nonExistinguserAssertion () {
        cy.contains('a', 'PIM').click();
        cy.get('a.oxd-topbar-body-nav-tab-item').eq(0).click();
        cy.get('input[placeholder="Type for hints..."]').eq(0).type('dolapo')
        cy.contains('button', 'Search').click()
        cy.contains('span', 'No Records Found').should('be.visible');
    }

    negativetestpage (username, password) {
        this.navigate()
        this.login(username, password)
        this.blankfieldTextassertion()
        this.nonExistinguserAssertion()

    }
}

export default NegativeTestsPage;