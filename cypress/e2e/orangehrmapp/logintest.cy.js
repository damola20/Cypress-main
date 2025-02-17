describe('OrangeHRM Login', () => {
    beforeEach(() => {
      // Navigate to the login page before each test
      cy.visit('https://opensource-demo.orangehrmlive.com/');
    });
    
      // login with valid username and password
    it('Should log in with valid credentials', () => {
      cy.get('input[name="username"]').type('Admin');
      cy.get('input[name="password"]').type('admin123');
      cy.get('button.orangehrm-login-button').click();
  
      // Assert user is redirected to the dashboard
      cy.url().should('include', '/dashboard');
      cy.get('h6').should('contain.text', 'Dashboard');
    });


    //login with invalid credentials
    it('Should display error message when logged in with invalid credentials', () => {
        // Enter valid username and password
        cy.get('input[name="username"]').type('sfff');
        cy.get('input[name="password"]').type('okl2355');
        cy.get('button.orangehrm-login-button').click();
    
        // Assert error message
        cy.get('.oxd-alert-content--error > .oxd-alert-content-icon + .oxd-alert-content-text').should('contain.text', 'Invalid credentials');
      });


      // login with valid username and leave password field empty
      it('Should display a text when u dont enter password', () => {
        // Enter a valid username  and leave password field empty
        cy.get('input[name="username"]').type('sfff');
        cy.get('button.orangehrm-login-button').click();
    
        // Assert error message
        cy.get('span.oxd-input-field-error-message').should('contain.text', 'Required');
      });
  });
  