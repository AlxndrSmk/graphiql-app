describe('Sign in page', () => {
  it('Sign in with valid data', () => {
    cy.visit('/signin');

    cy.get('[name="email"]').type('voprosy262@gmail.com');
    cy.get('[name="password"]').type('voprosy262@gmail.com');
    cy.get('[data-testid="signin-button"]').click();

    cy.url().should('include', '/main');
  });

  it('Sign in with invalid data', () => {
    cy.visit('/signin');

    cy.get('[name="email"]').type('asdasdas@kasd.com');
    cy.get('[name="password"]').type('asdOAsdy8asjk(sA&');

    cy.get('[data-testid="signin-button"]').click();
    cy.get('[data-testid="auth-error"]').should('be.visible');
  });
});

export {};
