/// <reference types="cypress" />

describe('SignInController Component', () => {
  beforeEach(() => {
    cy.visit('/signin');
  });

  it('should display the sign-in form and submit successfully', () => {
    cy.get('[data-testid="signin-button"]').should('be.disabled');
    cy.get('[name="email"]').type('voprosy262@gmail.com');
    cy.get('[name="password"]').type('voprosy262@gmail.com');
    cy.get('[data-testid="signin-button"]').should('not.be.disabled').click();

    cy.url().should('include', '/main');
  });

  it('should display an error message for incorrect credentials', () => {
    cy.get('[name="email"]').type('asdasdas@kasd.com');
    cy.get('[name="password"]').type('asdOAsdy8asjk(sA&');
    cy.get('[data-testid="signin-button"]').click();

    cy.get('[data-testid="auth-error"]').should('be.visible');
  });

  it('should toggle password visibility', () => {
    cy.get('[id="password"]').should('have.attr', 'type', 'password');

    cy.get('[alt="eye"]').click();

    cy.get('[id="password"]').should('have.attr', 'type', 'text');
  });

  it('should navigate to sign-up and welcome pages', () => {
    cy.get('[data-testid="sign-up-link"]').click();
    cy.url().should('include', '/signup');

    cy.go('back');

    cy.get('[data-testid="welcome-link"]').click();
    cy.url().should('include', '/');
  });
});
