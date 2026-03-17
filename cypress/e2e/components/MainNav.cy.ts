/// <reference types="cypress" />

describe('MainNav Component', () => {
  beforeEach(() => {
    cy.visit('/signin');
    cy.get('[data-testid="email"]').type('voprosy262@gmail.com');
    cy.get('[data-testid="password"]').type('voprosy262@gmail.com');
    cy.get('[data-testid="signin-button"]').click();
    cy.url().should('include', '/main');
  });

  it('should display two buttons with icons', () => {
    cy.get('[data-testid="main_nav"]').find('button').should('have.length', 2);

    cy.get('[data-testid="doc-button"]').should('contain', 'Documentation');
    cy.get('[data-testid="endpoint-button"]').should(
      'contain',
      'Change endpoint'
    );

    cy.get('[data-testid="doc-button"]')
      .find('img')
      .should('have.attr', 'alt', 'documentation');
    cy.get('[data-testid="endpoint-button"]')
      .find('img')
      .should('have.attr', 'alt', 'change endpoint');
  });

  it('should show tooltips on mouseover', () => {
    cy.get('[data-testid="doc-button"]').trigger('mouseover');
    cy.contains('Documentation').should('be.visible');

    cy.get('[data-testid="endpoint-button"]').trigger('mouseover');
    cy.contains('Change endpoint').should('be.visible');
  });
});
