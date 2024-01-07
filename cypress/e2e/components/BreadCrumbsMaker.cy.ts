/// <reference types="cypress" />

describe('BreadCrumbsMaker Component', () => {
  beforeEach(() => {
    cy.visit('/signin');
    cy.get('[name="email"]').type('voprosy262@gmail.com');
    cy.get('[name="password"]').type('voprosy262@gmail.com');
    cy.get('[data-testid="signin-button"]').should('not.be.disabled').click();
    cy.url().should('include', '/main');
  });

  it('should display breadcrumbs', () => {
    const docButton = cy.get('[data-testid="doc-button"]');
    docButton.should('exist');
    docButton.click();
    cy.get('[data-testid="breadcrumbs"]').should('be.visible');
    cy.get('[data-testid="breadcrumbs"] button').should(
      'have.length.greaterThan',
      0
    );
    cy.get('[data-testid="breadcrumbs"] button').first().click();
    cy.get('[data-testid="docs__query"]').first().click();
    cy.get('[data-testid="breadcrumbs"] button').first().click();
    cy.get('[data-testid="docs__query"]').should('be.visible');
  });
});
