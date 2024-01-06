/// <reference types="cypress" />

describe('Header Component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the header with logo', () => {
    cy.get('[data-testid="welcome-link"]')
      .find('[data-testid="header-logo"]')
      .should('have.attr', 'alt', 'To welcome page');
  });

  it('should display the header buttons for authenticated users', () => {
    cy.visit('/signin');
    cy.get('[data-testid="signin-button"]').should('be.disabled');
    cy.get('[name="email"]').type('voprosy262@gmail.com');
    cy.get('[name="password"]').type('voprosy262@gmail.com');
    cy.get('[data-testid="signin-button"]').should('not.be.disabled').click();
    cy.url().should('include', '/main');

    cy.get('[data-testid="signin-button"]').should('not.exist');
    cy.get('[data-testid="signup-button"]').should('not.exist');
    cy.get('[data-testid="sign-out-button"]').should('exist');
  });

  it('should sign out successfully', () => {
    cy.visit('/signin');
    cy.get('[data-testid="signin-button"]').should('be.disabled');
    cy.get('[name="email"]').type('voprosy262@gmail.com');
    cy.get('[name="password"]').type('voprosy262@gmail.com');
    cy.get('[data-testid="signin-button"]').should('not.be.disabled').click();
    cy.url().should('include', '/main');

    cy.get('[data-testid="sign-out-button"]').should('exist').click();
    cy.url().should('include', '/');
  });

  it('should display the header buttons for non-authenticated users', () => {
    cy.get('[data-testid="buttons-container"]').should('be.visible');
    cy.get('[data-testid="signin-button"]').should('be.visible');
    cy.get('[data-testid="signup-button"]').should('be.visible');
    cy.get('[data-testid="sign-out-button"]').should('not.exist');
  });

  it('should navigate to sign-in page when clicking sign-in button', () => {
    cy.get('[data-testid="signin-button"]').click();
    cy.url().should('include', '/signin');
  });

  it('should navigate to sign-up page when clicking sign-up button', () => {
    cy.get('[data-testid="signup-button"]').click();
    cy.url().should('include', '/signup');
  });

  it('should display the sticky header after scrolling', () => {
    cy.get('[data-testid="header-sticky"]').should(
      'have.css',
      'position',
      'relative'
    );
    cy.scrollTo('bottom', {
      ensureScrollable: false,
    });

    cy.get('[data-testid="header-sticky"]').should(
      'have.css',
      'position',
      'sticky'
    );
  });

  it('should hide the sticky header when scrolling back to the top', () => {
    cy.scrollTo('bottom', {
      ensureScrollable: false,
    });

    cy.scrollTo('top', {
      ensureScrollable: false,
    });

    cy.get('[data-testid="header-sticky"]').should(
      'have.css',
      'position',
      'relative'
    );
  });
});
