describe('Scroll to functionality', () => {
    it('scroll to view', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm')
      cy.scrollTo("bottom")
      cy.scrollTo("top")
      })
  })