describe('Amazon login - Multiple data driven tests', () => {
    let TestData;
    beforeEach(() => {
        cy.fixture('Amazonlogindata2.json').then((data) => {
            TestData = data;
        })
    })

    it('should log in successfully with valid credentials', ()=>{
       const Validdata = TestData[0]
        cy.visit('https://www.amazon.com')
        cy.get('#nav-link-accountList').click();
        cy.get('#ap_email').type(Validdata.email);
        cy.get('#continue').click();
        cy.get('#ap_password').type(Validdata.password);
        cy.get('#signInSubmit').click();
        cy.url().should('include', '/?ref_=nav_ya_signin')
    })

    it('should not log in with invalid credentials', ()=>{
        const Invaliddata = TestData[1]
        cy.visit('https://www.amazon.com')
        cy.get('#nav-link-accountList').click();
        cy.get('#ap_email').type(Invaliddata.email);
        cy.get('#continue').click();
        cy.get('#ap_password').type(Invaliddata.password);
        cy.get('#signInSubmit').click();
        cy.get('#auth-error-message').should('contain', 'There was a problem')
        
    })


})