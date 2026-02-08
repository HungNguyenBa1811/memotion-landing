import React from 'react';
import { cn } from '../../lib/utils';

const Button = React.forwardRef(({ className, variant = 'primary', size = 'default', ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center font-medium transition-all duration-200 ease-out rounded-pill",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-40",
        {
          'bg-accent !text-white hover:bg-accent-hover active:bg-accent-hover': variant === 'primary',
          'bg-transparent text-accent border border-accent hover:bg-accent/5 active:bg-accent/10': variant === 'outline',
          'bg-surface-tertiary text-text hover:bg-[#E8E8ED] active:bg-[#D2D2D7]': variant === 'secondary',
          'bg-text text-white hover:bg-[#424245] active:bg-[#6E6E73]': variant === 'dark',
          'bg-transparent text-primary hover:text-primary-hover p-0': variant === 'link',
          'h-11 px-6 text-body-sm': size === 'default',
          'h-9 px-4 text-caption': size === 'sm',
          'h-[52px] px-8 text-body': size === 'lg',
          'h-[56px] px-10 text-body-lg': size === 'xl',
        },
        className
      )}
      {...props}
    />
  );
});

Button.displayName = "Button";

export { Button };
