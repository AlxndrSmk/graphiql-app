/// <reference types="cypress" />

const generateRandomEmail = () => {
  const timestamp = Date.now();
  return `testuser${timestamp}@example.com`;
};

describe('SignUpController Component', () => {
  beforeEach(() => {
    cy.visit('/signup');
  });

  it('should display the sign-up form and submit successfully', () => {
    cy.get('[data-testid="sign-up-button"]').should('be.disabled');

    const randomEmail = generateRandomEmail();
    const randomPassword = 'RandomPassword123@example.com';

    cy.get('[name="email"]').type(randomEmail);
    cy.get('[name="password"]').type(randomPassword);
    cy.get('[data-testid="sign-up-button"]').should('not.be.disabled').click();

    cy.url().should('include', '/main');
  });

  it('should display an error message for existing user', () => {
    cy.get('[name="email"]').type('voprosy262@gmail.com');
    cy.get('[name="password"]').type('voprosy262@gmail.com');
    cy.get('[data-testid="sign-up-button"]').click();

    cy.get('[data-testid="auth-error"]').should('be.visible');
  });

  it('should toggle password visibility', () => {
    cy.get('[id="password"]').should('have.attr', 'type', 'password');

    cy.get('[alt="eye"]').click();

    cy.get('[id="password"]').should('have.attr', 'type', 'text');
  });

  it('should navigate to sign-in and welcome pages', () => {
    cy.get('[data-testid="sign-in-link"]').click();
    cy.url().should('include', '/signin');

    cy.go('back');

    cy.get('[data-testid="welcome-link"]').click();
    cy.url().should('include', '/');
  });
});
