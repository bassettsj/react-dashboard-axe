describe('Dashboard accessibility (axe)', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001');
    cy.injectAxe();
  });

  it('should have no violations for all axe rules', () => {
    cy.checkA11y();
  });

  // Run each axe rule individually
  const axeRules = [
    'color-contrast',
    'image-alt',
    'label',
    'aria-roles',
    'aria-valid-attr',
    'button-name',
    'document-title',
    'duplicate-id',
    'form-field-multiple-labels',
    'frame-title',
    'html-has-lang',
    'html-lang-valid',
    'landmark-one-main',
    'link-name',
    'page-has-heading-one',
    'region',
    'tabindex',
    'valid-lang',
    // Add more rules as needed
  ];

  axeRules.forEach((rule) => {
    it(`should pass axe rule: ${rule}`, () => {
      cy.checkA11y(null, {
        runOnly: { type: 'rule', values: [rule] },
      });
    });
  });
});
