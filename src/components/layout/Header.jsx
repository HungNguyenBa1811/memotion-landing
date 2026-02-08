import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';

const navLinks = [
  { label: 'Tính năng', href: '#features' },
  { label: 'Sứ mệnh', href: '#mission' },
  { label: 'Chuyên gia', href: '#team' },
  { label: 'Khách hàng', href: '#testimonials' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "glass border-b border-border-light/50"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-apple-wide px-6 lg:px-8">
        <div className="flex h-11 items-center justify-between">
          <a href="#" className="text-body font-semibold text-text tracking-tight">
            Memotion
          </a>

          {/* Desktop Navigation -- centered */}
          <div className="hidden md:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-nav text-text-secondary hover:text-text transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA -- right */}
          <div className="hidden md:block">
            <Button variant="primary" size="sm">
              Bắt đầu ngay
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 -mr-2 text-text-secondary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {isMenuOpen && (
        <div className="md:hidden glass border-t border-border-light/50">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-body text-text-secondary hover:text-text py-2 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button variant="primary" size="default" className="w-full mt-2">
              Bắt đầu ngay
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
