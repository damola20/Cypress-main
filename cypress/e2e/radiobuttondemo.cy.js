describe('Login functionality', () => {
    it('login user', () => {
      cy.visit('https://example.cypress.io/commands/actions')
      cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]').check("checkbox3")
                                
  
      
      })
  })