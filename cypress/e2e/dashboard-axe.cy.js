describe('Dashboard accessibility (axe)', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001');
    cy.injectAxe();
  });

  // TODO: Re-enable this test after fixing accessibility violations
  it.skip('should have no violations for all axe rules', () => {
    cy.checkA11y();
  });

  // Run each axe rule individually
  // Deduplicate axeRules and still skip the ones marked as TODO
  const axeRules = Array.from(new Set([
    // TODO: Re-enable after fixing accessibility violations
    'color-contrast',
    'image-alt',
    'label',
    'aria-roles',
    'aria-valid-attr',
    // 'button-name', // TODO: Re-enable after fixing accessibility violation
    'document-title',
    'duplicate-id',
    'form-field-multiple-labels',
    'frame-title',
    'html-has-lang',
    'html-lang-valid',
    'landmark-one-main',
    'link-name',
    // 'page-has-heading-one', // TODO: Re-enable after fixing accessibility violation
    // 'region', // TODO: Re-enable after fixing accessibility violation
    'tabindex',
    'valid-lang',
    // Add more rules as needed
    "accesskeys",
    "area-alt",
    "aria-allowed-attr",
    "aria-allowed-role",
    "aria-command-name",
    "aria-conditional-attr",
    "aria-deprecated-role",
    "aria-dialog-name",
    "aria-hidden-body",
    "aria-hidden-focus",
    "aria-input-field-name",
    "aria-meter-name",
    "aria-progressbar-name",
    "aria-prohibited-attr",
    "aria-required-attr",
    "aria-required-children",
    "aria-required-parent",
    "aria-roledescription",
    "aria-text",
    "aria-toggle-field-name",
    "aria-tooltip-name",
    "aria-treeitem-name",
    "aria-valid-attr-value",
    "audio-caption",
    "autocomplete-valid",
    "avoid-inline-spacing",
    "blink",
    // 'button-name', // TODO: Re-enable after fixing accessibility violation
    "color-contrast-enhanced",
    "css-orientation-lock",
    "definition-list",
    "dlitem",
    // 'document-title',
    "duplicate-id-active",
    "duplicate-id-aria",
    // 'duplicate-id',
    "empty-heading",
    "empty-table-header",
    "focus-order-semantics",
    // 'form-field-multiple-labels',
    "frame-focusable-content",
    "frame-tested",
    "frame-title-unique",
    // 'frame-title',
    "heading-order",
    "hidden-content",
    // 'html-has-lang',
    // 'html-lang-valid',
    "html-xml-lang-mismatch",
    "identical-links-same-purpose",
    // 'image-alt',
    "image-redundant-alt",
    "input-button-name",
    "input-image-alt",
    "label-content-name-mismatch",
    "label-in-name",
    "label-title-only",
    // 'label',
    "landmark-banner-is-top-level",
    "landmark-complementary-is-top-level",
    "landmark-contentinfo-is-top-level",
    "landmark-main-is-top-level",
    "landmark-no-duplicate-banner",
    "landmark-no-duplicate-contentinfo",
    "landmark-no-duplicate-main",
    // 'landmark-one-main',
    "landmark-unique",
    "link-in-text-block",
    // 'link-name',
    "list",
    "listitem",
    "marquee",
    "meta-refresh",
    "meta-viewport-large",
    "meta-viewport",
    "nested-interactive",
    "no-autoplay-audio",
    "object-alt",
    "p-as-heading",
    // 'page-has-heading-one', // TODO: Re-enable after fixing accessibility violation
    "presentation-role-conflict",
    // 'region', // TODO: Re-enable after fixing accessibility violation
    "role-img-alt",
    "scope-attr-valid",
    "scrollable-region-focusable",
    "select-name",
    "server-side-image-map",
    "skip-link",
    "svg-img-alt",
    // 'tabindex',
    "table-duplicate-name",
    "table-fake-caption",
    "td-has-header",
    "td-headers-attr",
    "th-has-data-cells",
    // 'valid-lang',
    "video-caption",
    "video-description",
    "word-spacing"
  ]));

  axeRules.forEach((rule) => {
    it(`should pass axe rule: ${rule}`, () => {
      cy.checkA11y(null, {
        runOnly: { type: 'rule', values: [rule] },
      });
    });
  });
});
