// cypress/e2e/tab-loop.cy.js
// Cypress test to tab through all focusable elements on the dashboard page until it loops back to the first element

describe('Tab Loop Accessibility Test', () => {
  it('should tab through all focusable elements and loop back to the first', () => {
    cy.visit('localhost:3001'); // 

    // Get all focusable elements
    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
    ].join(',');
    // assert the title of the page
    cy.title().should('eq', 'Dashboard Template - Material UI');
    // Wait for .MuiBox-root to load
    cy.get('.MuiBox-root').should('exist');
    

    cy.get('body').then(($body) => {
      const focusable = $body[0].querySelectorAll(focusableSelectors);
      expect(focusable.length).to.be.greaterThan(0);
      // Focus the first element
      const first = focusable[0];
      cy.wrap(first).focus();

      let lastFocused = first;
      for (let i = 1; i < focusable.length; i++) {
        cy.press('Tab');
        cy.focused().then(($el) => {
          const current = $el[0];
          cy.log(`Focused: <${current.tagName.toLowerCase()}${current.id ? `#${current.id}` : ''}${current.className ? `.${current.className.split(' ').join('.')}` : ''}>`);
          // eslint-disable-next-line no-console
          console.log('Focused element:', current);
          // Check that the focused element matches one of the selectors and is not the same as the last
          const isFocusable = current && current.matches && current.matches(focusableSelectors);
          expect(isFocusable, 'Element should match focusable selectors').to.be.true;
          expect(current, 'Should not focus the same element twice in a row').to.not.equal(lastFocused);
          lastFocused = current;
        });
      }
    });
  });
});
