import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary tracking-tight">Memotion</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-text hover:text-primary transition-colors">
            Tính năng
          </a>
          <a href="#mission" className="text-sm font-medium text-text hover:text-primary transition-colors">
            Sứ mệnh
          </a>
          <a href="#team" className="text-sm font-medium text-text hover:text-primary transition-colors">
            Chuyên gia
          </a>
          <Button variant="default" size="sm">
            Bắt đầu ngay
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-text"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-primary/10 bg-background p-4">
          <nav className="flex flex-col gap-4">
            <a
              href="#features"
              className="text-sm font-medium text-text hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#mission"
              className="text-sm font-medium text-text hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Mission
            </a>
            <a
              href="#team"
              className="text-sm font-medium text-text hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Experts
            </a>
            <Button className="w-full">Get Started</Button>
          </nav>
        </div>
      )}
    </header>
  );
}
