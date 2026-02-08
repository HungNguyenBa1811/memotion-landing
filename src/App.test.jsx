import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('Memotion Landing Page', () => {
  it('renders the header with brand name', () => {
    render(<App />);
    // Use getAllByText and check the first one or use a more specific query
    const brandElements = screen.getAllByText(/Memotion/i);
    expect(brandElements.length).toBeGreaterThan(0);
    expect(brandElements[0]).toBeInTheDocument();
  });

  it('renders the hero section headline', () => {
    render(<App />);
    // Text is split by <span>, so we use a custom matcher
    expect(screen.getByText((content, element) => {
      const hasText = (node) => node.textContent === "Restoring Independence, Together";
      const nodeHasText = hasText(element);
      const childrenDontHaveText = Array.from(element.children).every(
        (child) => !hasText(child)
      );
      return nodeHasText && childrenDontHaveText;
    })).toBeInTheDocument();
  });

  it('renders the core technology section', () => {
    render(<App />);
    expect(screen.getByText(/Core Technology/i)).toBeInTheDocument();
  });

  it('renders the mission section', () => {
    render(<App />);
    expect(screen.getByText(/Our Mission: To ensure age never defines capability/i)).toBeInTheDocument();
  });

  it('renders the team section', () => {
    render(<App />);
    expect(screen.getByText(/Built by Experts in Medicine & AI/i)).toBeInTheDocument();
  });

  it('renders the footer copyright', () => {
    render(<App />);
    expect(screen.getByText(/All rights reserved/i)).toBeInTheDocument();
  });
});
