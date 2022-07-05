/// <reference types="cypress" />

describe('drag and drop features', () => {
  it('drags and drops a box', () => {
    cy.visit('/');

    const dataTransfer = new DataTransfer();

    cy.get('#item')
      .trigger('dragstart', { dataTransfer });

    cy.get('.boxx')
      .last()
      .trigger('drop', {  dataTransfer });
  });
});