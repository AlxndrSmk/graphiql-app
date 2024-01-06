/// <reference types="cypress" />

describe('Endpoint Component', () => {
  beforeEach(() => {
    cy.visit('/signin');
    cy.get('[name="email"]').type('voprosy262@gmail.com');
    cy.get('[name="password"]').type('voprosy262@gmail.com');
    cy.get('[data-testid="signin-button"]').should('not.be.disabled').click();
    cy.url().should('include', '/main');
  });

  it('Clicking endpoind button changes endpoint label visibility', () => {
    const endpointButton = cy
      .get('[data-testid="endpoint-button"]')
      .should('exist');

    endpointButton.click();

    cy.get('[data-testid="endpoint-label"]').should('exist');

    cy.get('[data-testid="endpoint-label"]')
      .find('[data-testid="endpoint-input"]')
      .should('have.value', 'https://rickandmortyapi.com/graphql');
  });

  it('Clicking set endpoind button hides endpoint label', () => {
    const endpointButton = cy
      .get('[data-testid="endpoint-button"]')
      .should('exist');

    endpointButton.click();

    cy.get('[data-testid="set-endpoint-button"]').click();

    cy.get('[data-testid="endpoint-label"]').should('exist');

    cy.get('[data-testid="endpoint-label"]')
      .should('have.css', 'animation')
      .and('match', /closeWnd/);
  });
});
