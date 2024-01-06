/// <reference types="cypress" />

describe('BurgerButton Component', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.viewport(600, 800);
  });

  it('should render with default closed state', () => {
    cy.get('[data-testid="burger-button"]').should('exist');
    cy.get('[data-testid="burger-nav"]').should('have.css', 'display', 'none');
  });

  it('should open the menu on click', () => {
    cy.get('[data-testid="burger-nav"]').should('have.css', 'display', 'none');

    cy.get('[data-testid="burger-button"]').click();

    cy.get('[data-testid="burger-nav"]').should('have.css', 'display', 'flex');
    cy.get('[data-testid="burger-button"]').click();
    cy.get('[data-testid="burger-nav"]').should('have.css', 'display', 'none');
  });

  it('should display three lines when closed', () => {
    cy.get('[data-testid="burger-button"] div').should('have.length', 3);
  });
});
