describe('Login Tests with JSON Data', () => {
    beforeEach(() => {
      cy.visit('https://opensource-demo.orangehrmlive.com/');
    });
  
    it('should login with multiple users from JSON', function () {
      cy.fixture('userss').then((users) => {
        users.forEach((user) => {
          cy.get('input[name="username"]').clear().type(user.username);
          cy.get('input[name="password"]').clear().type(user.password);
          cy.get('button[type="submit"]').click();
  
          // Use user.username instead of username
          if (user.username === 'Admin') {
            // Assert successful login
            cy.url().should('include', '/dashboard');
          } else {
            // Assert failed login for other users
            cy.get('.oxd-alert-content > .oxd-text').should('exist');
          }
  
          // Reload the page before the next iteration to reset the login state
          cy.reload();
        });
      });
    });
  });
  
  