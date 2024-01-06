/// <reference types="cypress" />

describe('404 page', () => {
  beforeEach(() => {
    cy.request({ url: '/404', failOnStatusCode: false })
      .its('status')
      .should('equal', 404);
    cy.visit('/404', { failOnStatusCode: false });
  });

  it("should maintain the originally requested URL in the browser's address bar when showing the 404 page", () => {
    cy.url().should('include', '/404');
  });

  it('should contains clear messaging informing the user that the requested page could not be found', () => {
    cy.get('p').should(
      'contain',
      'The webpage you are trying to access has been transferred to a parallel digital realm.'
    );
  });

  it('should includes a working navigation option for users to return to the welcome page', () => {
    cy.get('a').should('contain', 'Back to welcome page').click();
    cy.url().should('include', '/');
    cy.get('h1').should('contain', 'Welcome');
  });
});
