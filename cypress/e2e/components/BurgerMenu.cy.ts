/// <reference types="cypress" />

describe('BurgerMenu Component', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.viewport(600, 800);
  });

  it('should open and close the menu', () => {
    cy.get('[data-testid="burger-nav"]').should('not.be.visible');
    cy.get('[data-testid="burger-button"]').click();
    cy.get('[data-testid="burger-nav"]').should('be.visible');
    cy.get('[data-testid="burger-button"]').click();
    cy.get('[data-testid="burger-nav"]').should('not.be.visible');
  });

  it('should navigate to main page after clicking the link for authenticated users', () => {
    cy.visit('/signin');
    cy.get('[name="email"]').type('voprosy262@gmail.com');
    cy.get('[name="password"]').type('voprosy262@gmail.com');
    cy.get('[data-testid="signin-button"]').click();
    cy.url().should('include', '/main');

    cy.get('[data-testid="burger-button"]').click();
    cy.contains('[data-testid="burger-nav"] a', 'To main page').click();
    cy.url().should('include', '/main');

    cy.contains('[data-testid="burger-nav"] a', 'Sign Out').click();
    cy.url().should('include', '/signin');
  });

  it('should navigate to sign-in page after clicking the link for non-authenticated users', () => {
    cy.get('[data-testid="burger-button"]').click();
    cy.contains('[data-testid="burger-nav"] a', 'Sign In').click();
    cy.url().should('include', '/signin');
  });

  it('should navigate to sign-up page after clicking the link for non-authenticated users', () => {
    cy.get('[data-testid="burger-button"]').click();
    cy.contains('[data-testid="burger-nav"] a', 'Sign Up').click();
    cy.url().should('include', '/signup');
  });
});
