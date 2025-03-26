describe('Login test', () => {
    it('Should allow a user to login', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="password"]').type('admin123', { log: false }); // the log key value pair hides sensitive information i.e - it doesnt display your password 
        cy.get('button.orangehrm-login-button').click();
        cy.url().should('include', '/dashboard'); 
        cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text', 'Dashboard')
  })
})