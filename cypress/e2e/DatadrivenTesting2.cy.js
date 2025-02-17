const jsonData = require('../fixtures/datadriventesting2.json')

describe('Data Driven Test Suite2',()=>{

    jsonData.forEach((testData) => {

        it('Data Driven Test2',()=>{

            cy.visit('https://www.google.com/search?q=javascript+by+testers+talk');
    
            cy.get('#APjFqb').clear();
    
            cy.get('#APjFqb').type(testData.skill1);
    
            cy.get('button[type="submit"]').click();
            cy.wait(3000);
        })
        
    })

})