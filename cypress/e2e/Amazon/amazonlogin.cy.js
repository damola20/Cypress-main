describe('Amazon Login - valid credentials', () => {
    it('should login successfully with valid credentials', () => {
        cy.visit('https://www.amazon.com/')
        cy.get('#nav-link-accountList').click()
        cy.get('#ap_email').type('damolabamijoko@gmail.com')
        cy.get('#continue').click()
        cy.get('#ap_password').type('Sacristy1234.')
        cy.get('#signInSubmit').click()
        cy.url().should('include', '/?ref_=nav_ya_signin')

  })

  it('Amazon login - invalid credentials', () => {
    cy.visit('https://www.amazon.com/')
    cy.get('#nav-link-accountList').click()
    cy.get('#ap_email').type('damolabamijokoko@gmail.com')
    cy.get('#continue').click()
    cy.get('ul.a-unordered-list.a-nostyle.a-vertical.a-spacing-none span.a-list-item').should('contain', 'We cannot find an account with that email address');

  })
 
})
  