/// <reference types="cypress" />

describe('Tabs Component', () => {
  beforeEach(() => {
    cy.visit('/signin');
    cy.get('[name="email"]').type('voprosy262@gmail.com');
    cy.get('[name="password"]').type('voprosy262@gmail.com');
    cy.get('[data-testid="signin-button"]').should('not.be.disabled').click();
    cy.url().should('include', '/main');
  });

  it('should switch between Variables and Headers tabs', () => {
    cy.get('[data-testid="tab__btns_btn"]').eq(1).click();
    cy.get('[data-testid="tabs__content_input"]').should('have.text', '');

    cy.get('[data-testid="tab__btns_btn"]').first().click();
    cy.get('[data-testid="tabs__content_input"]').should('have.text', '');
  });

  it('should open and close the content', () => {
    cy.get('[data-testid="btn__tab_btn_open"]').click();
    cy.get('[data-testid="tabs__content_open"]').should('be.visible');

    cy.get('[data-testid="btn__tab_btn_open"]').click();
    cy.get('[data-testid="tabs__content_open"]').should('not.be.visible');
  });

  it('should update content when typing in the textarea', () => {
    const variablesText = 'Updated Variables Content';
    const headersText = 'Updated Headers Content';
    cy.get('[data-testid="btn__tab_btn_open"]').click();

    cy.get('[data-testid="tabs__content_input"]')
      .type(variablesText)
      .should('have.value', variablesText);

    cy.get('[data-testid="tab__btns_btn"]').eq(1).click();

    cy.get('[data-testid="tabs__content_input"]')
      .type(headersText)
      .should('have.value', headersText);
  });
});
