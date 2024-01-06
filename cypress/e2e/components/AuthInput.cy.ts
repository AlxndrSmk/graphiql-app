/// <reference types="cypress" />

describe('SignInController Component', () => {
  beforeEach(() => {
    cy.visit('/signin');
  });

  it('should display the sign-in form and submit successfully', () => {
    cy.get('[data-testid="signin-button"]').should('be.disabled');
    cy.get('[data-testid="email"]').type('voprosy262@gmail.com');
    cy.get('[data-testid="password"]').type('voprosy262@gmail.com');
    cy.get('[data-testid="signin-button"]').should('not.be.disabled').click();

    cy.url().should('include', '/main');
  });
});
