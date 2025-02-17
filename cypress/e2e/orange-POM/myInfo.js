class InfoPage {
    Login (username, password) {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.get('input[name="username"]').type(username)
        cy.get('input[name="password"]').type(password)
        cy.get('button.orangehrm-login-button').click()
    }

    addPersonaldetails (firstname, middlename, lastname, employeeid, otherid, driverslicense, led, dob) {
        cy.contains('a', 'My Info').click()
        cy.url().should('include', 'viewPersonalDetails/empNumber/7')
        cy.get('input[name="firstName"]').clear()
        cy.get('input[name="firstName"]').type(firstname)
        cy.get('input[name="middleName"]').clear()
        cy.get('input[name="middleName"]').type(middlename)
        cy.get('input[name="lastName"]').clear()
        cy.get('input[name="lastName"]').type(lastname)
        cy.get(':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear()
        cy.get(':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type(employeeid)
        cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear()
        cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(otherid)
        cy.get(':nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear()
        cy.get(':nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type(driverslicense)
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').clear()
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').type(led)
        cy.get('body').click()
        cy.get('.oxd-select-text--after i.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').eq(0).click();
        cy.contains('Nigerian').click()
        cy.get('.oxd-select-text--after i.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').eq(1).click();
        cy.contains('Married').click()
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').clear()
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').type(dob)
        cy.get('body').click()
        cy.contains('label', 'Male').click()
        cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').eq(0).click()
        cy.get('.oxd-userdropdown-tab p.oxd-userdropdown-name').should('contain', 'damola b')
 
    }
    infotests() {
        this.Login('admin', 'admin123')
        this.addPersonaldetails('damola', 'kehinde', 'b', '090', '236', '2314', '2025-10-10', '2007-09-07')
    }

    }
    export default InfoPage;
