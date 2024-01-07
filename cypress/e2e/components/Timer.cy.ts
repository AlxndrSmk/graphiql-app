/// <reference types="cypress" />

describe('Timer Component', () => {
  beforeEach(() => {
    cy.visit('/signin');
    cy.get('[name="email"]').type('voprosy262@gmail.com');
    cy.get('[name="password"]').type('voprosy262@gmail.com');
    cy.get('[data-testid="signin-button"]').click();
    cy.url().should('include', '/main');
  });

  it('should update the timer value after a certain time', () => {
    cy.wait(3000);
    cy.get('[data-testid="timer"]').should('not.have.text', '00:00');
  });

  // it('timer ends after one hour', () => {
  //   cy.clock();
  //   cy.get('[data-testid="timer"]').should('not.have.text', '00:00');
  //   // cy.tick(3600000000);
  //   cy.get('[data-testid="timer"]').should('have.text', '00:00');
  // });
});
