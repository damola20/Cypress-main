describe('Register functionality', () => {
    it('Register new user', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm')
      cy.get('#loginPanel > :nth-child(3) > a').click()
      cy.get("input[id='customer.firstName']").type('damola')
      cy.get("input[id='customer.lastName']").type('bamijoko')
      cy.get("input[id='customer.address.street']").type('ogo oluwa ojodu')
      cy.get("input[id='customer.address.city']").type('lagos')
      cy.get("input[id='customer.address.state']").type('lagos')
      cy.get("input[id='customer.address.zipCode']").type('10111')
      cy.get("input[id='customer.phoneNumber']").type("0903710751")
      cy.get("input[id='customer.ssn']").type('090')
      cy.get("input[id='customer.username']").type('damo')
      cy.get("input[id='customer.password']").type('kolade1')
      cy.get("#repeatedPassword").type('kolade1')
      cy.get("input[value='Register']").click()
    
      

      })
  })