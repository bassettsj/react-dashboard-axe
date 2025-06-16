// cypress/e2e/tab-loop.cy.js
// Cypress test to tab through all focusable elements on the dashboard page until it loops back to the first element

describe('Tab Loop Accessibility Test', () => {
  it('should tab through all focusable elements and loop back to the first', () => {
    cy.visit('/');

    // Get all focusable elements
    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
    ].join(',');

    cy.get('body').then(($body) => {
      const focusable = $body[0].querySelectorAll(focusableSelectors);
      expect(focusable.length).to.be.greaterThan(0);
      // Focus the first element
      const first = focusable[0];
      cy.wrap(first).focus();

      let looped = false;
      let count = 0;
      const maxTabs = focusable.length + 2; // +2 for safety

      function tabAndCheck() {
        cy.focused().then(($el) => {
          const current = $el[0];
          count++;
          // Press Tab
          cy.realPress('Tab');
          cy.focused().then(($next) => {
            if ($next[0] === first) {
              looped = true;
            }
            if (!looped && count < maxTabs) {
              tabAndCheck();
            } else {
              expect(looped, 'Tab should loop back to the first focusable element').to.be.true;
            }
          });
        });
      }
      tabAndCheck();
    });
  });
});
