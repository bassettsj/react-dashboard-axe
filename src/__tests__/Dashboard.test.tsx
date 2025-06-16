import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dashboard from '../Dashboard';

describe('Dashboard', () => {
  it('renders the dashboard heading', () => {
    render(<Dashboard />);
    // Look for the heading role with the name "Dashboard"
    expect(screen.getByRole('heading', { name: /dashboard/i })).toBeInTheDocument();
  });
});
