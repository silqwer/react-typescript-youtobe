
/// <reference types="cypress" />
import '@testing-library/cypress/add-commands'; 

describe('Youtube App', ()=> {
  beforeEach(() => {
    cy.intercept('GET', /(mostPopular)/g, {
      fixture: 'popular.json'
    });

    cy.intercept('GET', /(search)/g, {
      fixture: 'search.json'
    })

    cy.visit('/');
  });

  it('renders the app', () => {
    cy.findByText('Youtube').should('exist');
  });

  it('shows popular videos', () => {
    cy.findByText('Popular Videos').should('exist');
  });

  it('searches by keyword', () => {
    cy.findByPlaceholderText('Search...').type('bts');
    cy.findByRole('button').click();
    cy.findByText('We went to KOREA to meet BTS 💜 Staying at KOREA&#39;S First Robot Hotel').should('exist');
  });

  it('goes to detail page', ()=> {
    cy.findAllByRole('listitem').first().click();
  });
})
