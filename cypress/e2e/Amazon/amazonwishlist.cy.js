describe('Amazon Add to Cart', () => {
    it('Should add a product to the cart', () => {
      cy.visit('https://www.amazon.com');
      cy.get('#twotabsearchtextbox').type('laptop');
      cy.get('#nav-search-submit-button').click();
      cy.get('span.a-button-inner > input.a-button-input').first().click()
      cy.get('#a-autoid-3-announce').click()
      cy.get('#nav-cart-count').should('contain.text', '1');
      cy.contains('Item Added').should('exist');

    });
  });
  