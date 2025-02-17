class EmployeePage {
    // go to website
    navigate() {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
    }

    // Login to website 
    Login(username, password) {
        cy.get('input[name="username"]').type(username)
        cy.get('input[name="password"]').type(password)
        cy.get('button.orangehrm-login-button').click()
    }
        // Add new employee
    AddNewEmployee(firstname, middlename, lastname) {
        cy.contains('a', 'PIM').click();
        cy.get('a.oxd-topbar-body-nav-tab-item').eq(1).click();
        cy.get('input[name="firstName"]').type(firstname);
        cy.get('input[placeholder="Middle Name"]').type(middlename);
        cy.get('input[name="lastName"]').type(lastname);
        cy.contains('button', 'Save').click();
        cy.url().should('include', '/viewPersonalDetails');
    }
    // delete website fully
    deleteNewEmployee (employeename) {
        cy.contains('a', 'PIM').click();
        cy.get('a.oxd-topbar-body-nav-tab-item').eq(0).click();
        cy.get('input[placeholder="Type for hints..."]').eq(0).type(employeename)
        cy.contains('button', 'Search').click()
        cy.get('.oxd-table-row > :nth-child(1) > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click()
        cy.get('.orangehrm-horizontal-padding > div > .oxd-button').click()
        cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').should('be.visible')
    }

    employeeTests() {
    this.navigate()
    this.Login('Admin', 'admin123')
    this.AddNewEmployee('John', 'Doe', 'Smith')
    this.deleteNewEmployee('John')
}
}
export default EmployeePage