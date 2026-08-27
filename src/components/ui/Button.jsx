import React from 'react';
import { cn } from '../../lib/utils';

const Button = React.forwardRef(({ className, variant = 'primary', size = 'default', ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center font-medium transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-pill active:scale-[0.97]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-40",
        {
          'bg-accent !text-white shadow-md shadow-accent/25 hover:shadow-lg hover:shadow-accent/35 hover:brightness-105 active:brightness-95': variant === 'primary',
          'bg-white/70 text-text border border-border/80 backdrop-blur-md hover:bg-white hover:border-text/30 hover:shadow-sm': variant === 'outline',
          'bg-surface-tertiary text-text hover:bg-[#D4E2D4] active:bg-[#B8CCBD]': variant === 'secondary',
          'bg-text text-white hover:bg-[#2D5A43] active:bg-[#3D6B55] shadow-md shadow-text/20': variant === 'dark',
          'bg-transparent text-primary hover:text-primary-hover p-0 hover:underline underline-offset-4': variant === 'link',
          'h-11 px-6 text-body-sm': size === 'default',
          'h-9 px-4 text-caption': size === 'sm',
          'h-[52px] px-8 text-body': size === 'lg',
          'h-[56px] px-10 text-body-lg font-semibold': size === 'xl',
        },
        className
      )}
      {...props}
    />
  );
});

Button.displayName = "Button";

export { Button };
