// data driven testing with mocha it.each method

const testUsers = [
    { username: 'user1', password: 'pass123' },
    { username: 'user2', password: 'pass456' },
    { username: 'Admin', password: 'admin123' }
  ];
  
  describe('Login Tests', () => {
    testUsers.forEach(({ username, password }) => {
      it(`should login successfully with ${username}`, () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.get('input[name="username"]').type(username);
        cy.get('input[name="password"]').type(password);
        cy.get('button[type="submit"]').click();
  
        if (username === 'Admin') {
          // Assert successful login for Admin
          cy.url().should('include', '/dashboard');
        } else {
          // Assert failed login for user1 and user2
          cy.get('.oxd-alert-content > .oxd-text').should('exist');
        }
      });
    });
  });
  
  