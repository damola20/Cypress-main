
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

 
  /* ==== Test Created with Cypress Studio ==== */
  it('validating loggin in with an invalid email format', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('www.europarcs.com');
    cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click();
    cy.get('.z-10.lg\\:hidden > .z-10 > .w-6 > svg').click();
    cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > form > [vid="email"] > .flex > #loginEmail').clear('d');
    cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > form > [vid="email"] > .flex > #loginEmail').type('damolabamijoko.com');
    cy.get('div.transition > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > form').click();
    cy.get('small').should('have.text', 'Not a valid email address');
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('Validate empty field submission ', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('www.europarcs.com');
    cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click();
    cy.get('.z-10.lg\\:hidden > .z-10 > .w-6 > svg').click();
    cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > form > .font-bold > .flex').click();
    cy.get('small').should('have.text', 'This field is mandatory');
    /* ==== End Cypress Studio ==== */
  });


  /* ==== Test Created with Cypress Studio ==== */
  it('Validate login with a valid email address ', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('www.europarcs.com');
    cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click();
    cy.get('.z-10.lg\\:hidden > .z-10 > .w-6 > svg').click();
    cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > form > [vid="email"] > .flex > #loginEmail').clear('d');
    cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > form > [vid="email"] > .flex > #loginEmail').type('damolabamijoko@gmail.com');
    cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > form > .font-bold > .flex').click();
    cy.get('p.text-ep-green-060').should('be.visible');
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('Validating login with an email that has not been registered ', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('www.europarcs.com');
    cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click();
    cy.get('.z-10.lg\\:hidden > .z-10 > .w-6 > svg').click();
    cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > form > [vid="email"] > .flex > #loginEmail').clear('o');
    cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > form > [vid="email"] > .flex > #loginEmail').type('ojupopoletdamos@gmail.com');
    cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > form > .font-bold > .flex').click();
    cy.contains('have.text', 'Email not registered')
    /* ==== End Cypress Studio ==== */
  });
})