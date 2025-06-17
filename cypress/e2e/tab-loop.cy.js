// cypress/e2e/tab-loop.cy.js
// Cypress test to tab through all focusable elements on the dashboard page until it loops back to the first

describe('Tab Loop Accessibility Test', () => {
  it('should tab through all focusable elements and loop back to the first', () => {
    cy.visit('localhost:3001'); 
    cy.press('Tab');
    cy.get('[role="combobox"]').should('have.focus');
    cy.press('Tab');
    // expect focused element to have text Home
    cy.focused().should('have.text', 'Home');
    cy.press('Tab');
    cy.focused().should('have.text', 'Analytics');
    cy.press('Tab');
    cy.focused().should('have.text', 'Clients');
    cy.press('Tab');
    cy.focused().should('have.text', 'Tasks');
    cy.press('Tab');
    cy.focused().should('have.text', 'Settings');
    cy.press('Tab');
    cy.focused().should('have.text', 'About');
    cy.press('Tab');
    cy.focused().should('have.text', 'Feedback');
    cy.press('Tab');
    cy.focused().should('have.text', 'Get the discount');
    cy.press('Tab');
    // has aria label
    cy.focused().should('have.attr', 'aria-label', 'Open menu');
    cy.press('Tab');
    cy.focused().should('have.attr', 'aria-label', 'search');
    cy.press('Tab');
    cy.focused().should('have.text', 'Apr 17, 2023');
    cy.press('Tab');
    cy.focused().should('have.attr', 'aria-label', 'Open notifications');
    cy.press('Tab');
    cy.focused().should('have.attr', 'aria-label', 'Theme Selector');
    cy.press('Tab');
    cy.focused().should('have.text', 'Get insights');
    cy.press('Tab');
    cy.focused().should('have.attr', 'aria-label', 'Select all rows');
    cy.press('Tab');
    cy.focused().should('have.text', '20');
    cy.press('Tab');
    cy.focused().should('have.attr', 'aria-label', 'Go to next page');
    cy.press('Tab');
    cy.focused().should('have.text', 'Home');
    cy.press('Tab');
    cy.focused().should('have.text', 'Sitemark');
    // Done with tabbing through all elements
  });
});
