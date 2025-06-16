import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dashboard from '../Dashboard';

describe('Dashboard', () => {
  it('renders the dashboard component', () => {
    render(<Dashboard />);
    // Check for a heading or any text you expect in the Dashboard
    expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
  });
});
