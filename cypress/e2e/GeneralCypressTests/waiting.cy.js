describe('waiting for elements in cypress', () => {
    it('waits for elements dynamically', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get("input[placeholder='Username']").should('be.visible').type('Admin')
        cy.get("input[placeholder='Password']").should('be.visible').type('admin123')
        cy.get("button[type='submit']").should('not.be.disabled').click()
    })
})