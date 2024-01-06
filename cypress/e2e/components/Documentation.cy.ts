/// <reference types="cypress" />

describe('Endpoint Component', () => {
  beforeEach(() => {
    cy.visit('/signin');
    cy.get('[name="email"]').type('voprosy262@gmail.com');
    cy.get('[name="password"]').type('voprosy262@gmail.com');
    cy.get('[data-testid="signin-button"]').should('not.be.disabled').click();
    cy.url().should('include', '/main');
  });

  it('Clicking doc button opens documentation tab', () => {
    const docButton = cy.get('[data-testid="doc-button"]');
    docButton.should('exist');
    docButton.click();

    const docTab = cy.get('[data-testid="documentation-tab"]');

    docTab.should('exist');
    docButton.click();
    cy.get('[data-testid="documentation-tab"]').should('not.exist');

    docButton.click();
    cy.get('[data-testid="1"]').click();

    docTab.should('contain.text', 'ID');
  });
});
