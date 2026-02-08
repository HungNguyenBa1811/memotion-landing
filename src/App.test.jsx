import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders the setup completion message', () => {
    render(<App />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('RehabConnect - Setup Complete');
  });

  it('renders with the correct primary color', () => {
    render(<App />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveClass('text-primary');
  });

  it('renders the buttons', () => {
    render(<App />);
    const primaryButton = screen.getByRole('button', { name: /Primary Button/i });
    const accentButton = screen.getByRole('button', { name: /Accent Button/i });
    expect(primaryButton).toBeInTheDocument();
    expect(accentButton).toBeInTheDocument();
  });
});

