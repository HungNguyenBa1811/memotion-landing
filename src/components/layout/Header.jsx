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
          ? "glass border-b border-border/50 shadow-sm"
          : "bg-surface/60 backdrop-blur-md border-b border-transparent"
      )}
    >
      <nav className="mx-auto max-w-apple-wide px-6 lg:px-8">
        <div className="flex h-12 items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <img src="/logo.png" alt="Memotion logo" className="w-7 h-7 rounded-full object-cover" />
            <span className="text-body-lg font-bold text-text tracking-tight group-hover:text-primary transition-colors">
              Memotion
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium text-text-secondary hover:text-text transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="primary" size="sm">
              Trải nghiệm ngay
            </Button>
          </div>

          <button
            className="md:hidden p-2 -mr-2 text-text-secondary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

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
