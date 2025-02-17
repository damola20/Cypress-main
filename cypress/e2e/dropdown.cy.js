describe('dropdown functionality', () => {
  it('dropdown', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.get("input[name='username']").type("damo")
    cy.get("input[name='password']").type("kolade1")
    cy.get("input[value='Log In']").click()
    cy.get("a[href='activity.htm?id=14121']").click()
    cy.get("#month").select("January")                                   

    
    })
})