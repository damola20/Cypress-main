describe('Scroll into view functionality', () => {
    it('scroll into view', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm')
      cy.get("div[id='footermainPanel'] li:nth-child(3) a:nth-child(1)").scrollIntoView();
      })
  })