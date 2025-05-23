describe('Login tests', () => {
    it('Validate logging into the Application using valid credentials', () => {
        cy.visit('http://localhost/opencart/')
        cy.get('a.dropdown-toggle').contains('My Account').click()
        cy.get('a').contains('Login').click()
        cy.get('#input-email').type('damolabamijoko@gmail.com')
        cy.get('#input-password').type('damolabamijoko')
        cy.contains('button', 'Login').click()
        cy.url().should('include', 'route=account/account&customer_token=')
    })

    it('Validate logging into the Application using invalid credentials (i.e. Invalid email address and Invalid Password', () => {
        cy.visit('http://localhost/opencart/')
        cy.get('a.dropdown-toggle').contains('My Account').click()
        cy.get('a').contains('Login').click()
        cy.get('#input-email').type('damolabamxixiijoko@gmail.com')
        cy.get('#input-password').type('damolabamij')
        cy.contains('button', 'Login').click()
        cy.get('#alert').should('be.visible')
            .and('contain.text', 'Warning: No match for E-Mail Address and/or Password.')
            
        
    })

    it('Validate logging into the Application using invalid email address and valid Password', () => {
        cy.visit('http://localhost/opencart/')
        cy.get('a.dropdown-toggle').contains('My Account').click()
        cy.get('a').contains('Login').click()
        cy.get('#input-email').type('bamijokodamoljjja@gmail.com')
        cy.get('#input-password').type('damolabamijoko')
        cy.contains('button', 'Login').click()
        cy.get('#alert').should('be.visible')
            .and('contain.text', 'Warning: No match for E-Mail Address and/or Password.')    
                   
    })


    it('Validate logging into the Application using valid email address and invalid Password', () => {
        cy.visit('http://localhost/opencart/')
        cy.get('a.dropdown-toggle').contains('My Account').click()
        cy.get('a').contains('Login').click()
        cy.get('#input-email').type('damolabamijoko@gmail.com')
        cy.get('#input-password').type('damolabamijo')
        cy.contains('button', 'Login').click()
        cy.get('#alert').should('be.visible')
            .and('contain.text', 'Warning: No match for E-Mail Address and/or Password.')
                  
    })

    
    it('Validate logging into the Application without providing any credentials', () => {
        cy.visit('http://localhost/opencart/')
        cy.get('a.dropdown-toggle').contains('My Account').click()
        cy.get('a').contains('Login').click()
        cy.contains('button', 'Login').click()
        cy.get('#alert').should('be.visible')
            .and('contain.text', 'Warning: No match for E-Mail Address and/or Password.')
                  
    })



    it('Validate logging into the Application without providing any credentials', () => {
        cy.visit('http://localhost/opencart/')
        cy.get('a.dropdown-toggle').contains('My Account').click()
        cy.get('a').contains('Login').click()
        cy.contains('a', 'Forgotten Password').should('be.visible').click()
        cy.url().should('include', 'en-gb?route=account/forgotten')
        cy.get('h1').should('be.visible')
            .and('contain.text', 'Forgot Your Password?')
                  
    })


    it('Validate E-Mail Address and Password text fields in the Login page have the place holder text ', () => {
        cy.visit('http://localhost/opencart/')
        cy.get('a.dropdown-toggle').contains('My Account').click()
        cy.get('a').contains('Login').click()
        cy.get('#input-email').should('have.attr', 'placeholder', 'E-Mail Address')
        cy.get('#input-password').should('have.attr', 'placeholder', 'Password')
       
    })

    it('Validate Logging into the Application and browsing back using Browser back button, user should maintain login session', () => {
        cy.visit('http://localhost/opencart/')
        cy.get('a.dropdown-toggle').contains('My Account').click()
        cy.get('a').contains('Login').click()
        cy.get('#input-email').type('damolabamijoko@gmail.com')
        cy.get('#input-password').type('damolabamijoko')
        cy.contains('button', 'Login').click()
        cy.url().should('include', 'route=account/account&customer_token=')
        cy.go('back')
        // reassert that user is still on the same page
        cy.url().should('include', 'route=account/account&customer_token=')
    })


    it('Validate Loggingout from the Application and browsing back using Browser back button', () => {
        cy.visit('http://localhost/opencart/')
        cy.get('a.dropdown-toggle').contains('My Account').click()
        cy.get('a').contains('Login').click()
        cy.get('#input-email').type('damolabamijoko@gmail.com')
        cy.get('#input-password').type('damolabamijoko')
        cy.contains('button', 'Login').click()
        cy.url().should('include', 'route=account/account&customer_token=')
        cy.get('a.dropdown-toggle').contains('My Account').click()
        cy.get('a').contains('Logout').click()
        cy.go('back')
        // reassert that user is still on the same page
        cy.url().should('include', 'route=account/account&customer_token=')
    })


    // this test should assert the presence of a placeholder in the password text field
    it('Validate the text into the Password field is toggled to the way it appears', () => {
        cy.visit('http://localhost/opencart/')
        cy.get('a.dropdown-toggle').contains('My Account').click()
        cy.get('a').contains('Login').click()
        cy.get('#input-email').type('damolabamijoko@gmail.com')
        cy.get('#input-password').type('damolabamijoko').should('have.attr', 'type', 'password')
       
    })

    it('Validate the UI of the Login page', () => {
        cy.visit('http://localhost/opencart/')
        cy.get('a.dropdown-toggle').contains('My Account').click()
        cy.get('a').contains('Login').click()
        cy.get('#form-login > h2:first-child').should('be.visible')
            .and('contain.text', 'Returning Customer')
   
       
    })

})