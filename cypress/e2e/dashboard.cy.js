describe('Dashboard loads and displays key metrics', () => {
  it('should display the dashboard overview and key cards', () => {
    cy.visit('http://localhost:3001');
    // Check for main dashboard heading
    cy.contains('Dashboard').should('exist');
    cy.contains('Overview').should('exist');

    // Check for key metric cards
    cy.contains('Users').should('exist');
    cy.contains('Conversions').should('exist');
    cy.contains('Event count').should('exist');
    cy.contains('Sessions').should('exist');
    cy.contains('Page views and downloads').should('exist');

    // Check for sidebar navigation
    cy.contains('Home').should('exist');
    cy.contains('Analytics').should('exist');
    cy.contains('Clients').should('exist');
    cy.contains('Tasks').should('exist');
    cy.contains('Settings').should('exist');
    cy.contains('About').should('exist');
    cy.contains('Feedback').should('exist');

    // Check for user info
    cy.contains('Riley Carter').should('exist');
    cy.contains('riley@email.com').should('exist');

    // Check for the discount plan alert
    cy.contains('Plan about to expire').should('exist');
    cy.contains('Get the discount').should('exist');
  });
});
