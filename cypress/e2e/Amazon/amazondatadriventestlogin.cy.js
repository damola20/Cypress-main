describe('Amazon Login - data driven test', () =>{
    beforeEach(() =>{
        cy.visit("https://www.amazon.com")
        cy.get('#nav-link-accountList').click();      
    })

    it('should log in successfully using data from the fixture', () =>{
        cy.fixture('Amazonlogindata.json').then((data) =>{
            // enter email 
            cy.get('#ap_email').type(data.email);
            cy.get('#continue').click();

            // enter password
            cy.get('#ap_password').type(data.password);
            cy.get('#signInSubmit').click();

            // Assert the url includes the expected url
            cy.url().should('include', '/?ref_=nav_ya_signin');


        })
    })

})