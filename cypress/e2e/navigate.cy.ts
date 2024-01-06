describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Navigate to sigin page', () => {
    cy.get('[data-testid="signin-button"]').click();
    cy.url().should('include', '/signin');
  });

  it('Navigate to sigup page', () => {
    cy.get('[data-testid="signup-button"]').click();
    cy.url().should('include', '/signup');
  });
});

export {};
