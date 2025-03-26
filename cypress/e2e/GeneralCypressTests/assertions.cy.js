describe('Assertions in cypress', () => {
    it('Should verify different UI elements', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.url().should('include', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('.oxd-sheet.oxd-sheet--rounded.oxd-sheet--gutters.oxd-sheet--gray-lighten-2.orangehrm-demo-credentials').should('exist')
        cy.get('.oxd-sheet > :nth-child(1)').should('have.text', 'Username : Admin')
        cy.get('.oxd-sheet > :nth-child(2)').should('have.text', 'Password : admin123')
        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="password"]').type('admin123', { log: false }); // the log key value pair hides sensitive information i.e - it doesnt display your password 
        cy.get('button.orangehrm-login-button').click();
        cy.url().should('include', '/dashboard'); 
        cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text', 'Dashboard')
        cy.get('.oxd-text').then(($items) => {
            expect($items.length).to.be.greaterThan(3);
          });
  })
})