describe('Custom Login Command Test', () => {
    it('Should login successfully using a custom command', () => {
      cy.login('Admin', 'admin123'); // Call the custom command
    });
  });
  