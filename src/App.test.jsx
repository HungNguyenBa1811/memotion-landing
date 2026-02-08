import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('Memotion Landing Page', () => {
  it('renders the header with brand name', () => {
    render(<App />);
    const brandElements = screen.getAllByText(/Memotion/i);
    expect(brandElements.length).toBeGreaterThan(0);
    expect(brandElements[0]).toBeInTheDocument();
  });

  it('renders the hero section headline', () => {
    render(<App />);
    expect(screen.getByText(/Đồng hành phục hồi/i)).toBeInTheDocument();
  });

  it('renders the core technology section', () => {
    render(<App />);
    expect(screen.getByText(/Giải pháp công nghệ/i)).toBeInTheDocument();
  });

  it('renders the mission section', () => {
    render(<App />);
    expect(screen.getByText(/tuổi già không bao giờ là rào cản/i)).toBeInTheDocument();
  });

  it('renders the team section', () => {
    render(<App />);
    expect(screen.getByText(/Chuyên gia & Cố vấn/i)).toBeInTheDocument();
  });

  it('renders the footer copyright', () => {
    render(<App />);
    expect(screen.getByText(/2026 Memotion/i)).toBeInTheDocument();
  });
});
