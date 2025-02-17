describe('Register tests', () => {
    it('Validate registering an account by providing all the field', ()=> {
        cy.visit('https://demo.opencart.com/')
        cy.get('a.dropdown-toggle').contains('My Account').click()
        cy.get('a').contains('Register').click()
        cy.get('#input-firstname').type('lopsin')
        cy.get('#input-lastname').type('ajose')
        cy.get('#input-email').type('damolaxxyopysassusaaa67fo@gmail.com')
        cy.get('#input-password').type('damolabamijoko')
        cy.get('input.form-check-input').eq(1).click()
        cy.contains('Continue').click()
        cy.url().should('include', 'account/success&customer_token')
    })

    it('Validate proper notification messages are displayed when user continues with an empty field', ()=> {
        cy.visit('https://demo.opencart.com/')
        cy.get('a.dropdown-toggle').contains('My Account').click()
        cy.get('a').contains('Register').click()
        cy.contains('Continue').click()
        cy.get('#error-firstname')
            .should('be.visible')
            .and('contain.text', 'First Name must be between 1 and 32 characters!')
        cy.get('#error-email')
            .should('be.visible')
            .and('contain.text', 'E-Mail Address does not appear to be valid!')
        cy.get('#error-password')
        .should('be.visible')
        .and('contain.text', 'Password must be between 4 and 20 characters!')
    })

    it('Validate Registering an Account when \'\Yes\' option is selected for Newsletter field', ()=> {
        cy.visit('https://demo.opencart.com/')
        cy.get('a.dropdown-toggle').contains('My Account').click()
        cy.get('a').contains('Register').click()
        cy.get('#input-firstname').type('alele')
        cy.get('#input-lastname').type('ajose')
        cy.get('#input-email').type('damolaycxcscsssmsdw3ilfo@gmail.com')
        cy.get('#input-password').type('damolabamijoko')
        cy.get('input.form-check-input').eq(0).click()
        cy.get('input.form-check-input').eq(1).click()
        cy.contains('Continue').click()
        cy.url().should('include', 'account/success&customer_token')
    })

    it('Validate Registering an Account when \'\No\' option is selected for Newsletter field', ()=> {
        cy.visit('https://demo.opencart.com/')
        cy.get('a.dropdown-toggle').contains('My Account').click()
        cy.get('a').contains('Register').click()
        cy.get('#input-firstname').type('alele')
        cy.get('#input-lastname').type('ajose')
        cy.get('#input-email').type('damolaccddwdxymiyiylfo@gmail.com')
        cy.get('#input-password').type('damolabamijoko')
        cy.get('input.form-check-input').eq(1).click()
        cy.contains('Continue').click()
        cy.url().should('include', 'account/success&customer_token')
    })

    it('Validate different ways of navigating to \'Register Account\' page', ()=> {
        cy.visit('https://demo.opencart.com/')
        cy.get('a.dropdown-toggle').contains('My Account').click()
        cy.get('a').contains('Register').click()
        cy.url().should('include', '/en-gb?route=account/register')
        cy.get('a.dropdown-toggle').contains('My Account').click()
        cy.get('a').contains('Login').click()
        cy.get('a').contains('Continue').click()
        cy.url().should('include', '/en-gb?route=account/register')
    })


    it('Validate Registering an Account by providing the existing account details (i.e. existing email address)', ()=> {
        cy.visit('https://demo.opencart.com/')
        cy.get('a.dropdown-toggle').contains('My Account').click()
        cy.get('a').contains('Register').click()
        cy.get('#input-firstname').type('damola')
        cy.get('#input-lastname').type('bamijoko')
        cy.get('#input-email').type('damolabamijoko@gmail.com')
        cy.get('#input-password').type('damolabamijoko')
        cy.get('input.form-check-input').eq(1).click()
        cy.contains('Continue').click()
        cy.get('div#alert')
            .should('be.visible')
            .and('contain.text', 'Warning: E-Mail Address is already registered!')
    })

    it('Validate Registering an Account by providing an invalid email address into the E-Mail field', ()=> {
           cy.visit('https://demo.opencart.com/')
           cy.get('a.dropdown-toggle').contains('My Account').click()
           cy.get('a').contains('Register').click()
           cy.get('#input-firstname').type('damola')
           cy.get('#input-lastname').type('bamijoko')
           cy.get('#input-email').type('damolabamijoko@g')
           cy.get('#input-password').type('damolabamijoko')
           cy.get('input.form-check-input').eq(1).click()
           cy.contains('Continue').click()
           cy.get('#error-email').should('be.visible')
               .and('contain.text', 'E-Mail Address does not appear to be valid!')
   })

   it('Validate all the fields in the Register Account page have the proper placeholders', () => {
    cy.visit('https://demo.opencart.com/')
    cy.get('a.dropdown-toggle').contains('My Account').click()
    cy.get('a').contains('Register').click()
    cy.get('#input-firstname').should('have.attr', 'placeholder', 'First Name')
    cy.get('#input-lastname').should('have.attr', 'placeholder', 'Last Name')
    cy.get('#input-email').should('have.attr', 'placeholder', 'E-Mail')
    cy.get('#input-password').should('have.attr', 'placeholder', 'Password')
   })

   it('Validate all the mandatory fields in the Register Account page are marked with red color * symbol', () => {
    cy.visit('https://demo.opencart.com/')
    cy.get('a.dropdown-toggle').contains('My Account').click()
    cy.get('a').contains('Register').click()
    cy.contains('Continue').click()
    cy.get('label[for="input-firstname"]').should('be.visible')
    cy.get('label[for="input-lastname"]').should('be.visible')
    cy.get('label[for="input-email"]').should('be.visible')
    cy.get('label[for="input-password"]').should('be.visible')
   })


   it('Validate Registering an Account by providing the existing account details (i.e. existing email address', ()=> {
    cy.visit('https://demo.opencart.com/')
    cy.get('a.dropdown-toggle').contains('My Account').click()
    cy.get('a').contains('Register').click()
    cy.get('#input-firstname').type('damola')
    cy.get('#input-lastname').type('bamijoko')
    cy.get('#input-email').type('damolabamijoktoff@gmail.com')
    cy.get('#input-password').type('12345678')
    cy.get('input.form-check-input').eq(1).click()
    cy.contains('Continue').click()
    cy.contains('Password is too simple, change your password').should('be.visible')

   
})

it('Validate Registering the Account without selecting the \'Privacy Policy\' checkbox option', ()=> {
    cy.visit('https://demo.opencart.com/')
    cy.get('a.dropdown-toggle').contains('My Account').click()
    cy.get('a').contains('Register').click()
    cy.get('#input-firstname').type('damola')
    cy.get('#input-lastname').type('bamijoko')
    cy.get('#input-email').type('damolabamijoktoff@gmail.com')
    cy.get('#input-password').type('12345678')
    cy.contains('Continue').click()
    cy.get('#alert').should('be.visible')
        .and('contain.text', 'Warning: You must agree to the Privacy Policy!')
    
})


it('Validate the Password text entered into the \'Password\' and \'Password Confirm\' field of \'Register Account\' functionality is toggled to hide its visibility', ()=> {
    cy.visit('https://demo.opencart.com/')
    cy.get('a.dropdown-toggle').contains('My Account').click()
    cy.get('a').contains('Register').click()
    cy.get('#input-password').type('12345678')
    cy.get('#input-password').should('have.attr', 'type', 'password')
    
})

it('Validate the Breadcrumb, Page Heading, Page URL, Page Title of \'Register Account\' Page', ()=> {
    cy.visit('https://demo.opencart.com/')
    cy.get('a.dropdown-toggle').contains('My Account').click()
    cy.get('a').contains('Register').click()
    cy.get('li.breadcrumb-item > a').should('be.visible')
        .and('contain.text', 'Account')
    cy.get('li.breadcrumb-item > a').should('be.visible')
        .and('contain.text', 'Register')
    
})




})