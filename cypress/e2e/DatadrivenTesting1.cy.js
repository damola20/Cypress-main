describe('Data Driven Test Suite',()=>{

    let testData;

    before('Run Before All Test',()=>{
        cy.fixture('datadriventesting1.json').then((jsonData)=>{
            testData = jsonData;
        })
    })

    it('Data Driven Test1',()=>{

        cy.visit('https://www.google.com/search?q=javascript+by+testers+talk');

        cy.get('#APjFqb').clear();

        cy.get('#APjFqb').type(testData.skill1);

        cy.get('button[type="submit"]').click();
        cy.wait(3000);
    })

})

