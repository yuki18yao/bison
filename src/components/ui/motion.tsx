
import React from 'react';

// This is a minimal mock of framer-motion
// In a real app, you'd install framer-motion, but for this demo we'll create simple components

interface MotionProps extends React.HTMLAttributes<HTMLDivElement> {
  initial?: any;
  animate?: any;
  exit?: any;
  transition?: any;
  variants?: any;
  whileHover?: any;
  whileTap?: any;
}

export const motion = {
  div: ({ 
    children, 
    initial, 
    animate, 
    exit, 
    transition, 
    variants, 
    whileHover, 
    whileTap,
    className,
    ...props 
  }: MotionProps) => {
    let animationClass = '';
    
    // Very simple animation mapping
    if (initial?.opacity === 0 && animate?.opacity === 1) {
      animationClass += ' animate-fade-in';
    }
    if (initial?.y === -10 && animate?.y === 0) {
      animationClass += ' animate-slide-down';
    }
    if (initial?.y === 10 && animate?.y === 0) {
      animationClass += ' animate-slide-up';
    }
    
    return (
      <div 
        className={`${className || ''} ${animationClass}`} 
        style={{
          animationDuration: `${transition?.duration || 0.5}s`,
          animationDelay: `${transition?.delay || 0}s`,
        }}
        {...props}
      >
        {children}
      </div>
    );
  },
  
  span: ({ 
    children, 
    initial, 
    animate, 
    exit, 
    transition, 
    variants, 
    whileHover, 
    whileTap,
    className,
    ...props 
  }: MotionProps) => {
    let animationClass = '';
    
    // Very simple animation mapping
    if (initial?.opacity === 0 && animate?.opacity === 1) {
      animationClass += ' animate-fade-in';
    }
    
    return (
      <span 
        className={`${className || ''} ${animationClass}`} 
        style={{
          animationDuration: `${transition?.duration || 0.5}s`,
          animationDelay: `${transition?.delay || 0}s`,
        }}
        {...props}
      >
        {children}
      </span>
    );
  },

  section: ({ 
    children, 
    initial, 
    animate, 
    exit, 
    transition, 
    variants, 
    whileHover, 
    whileTap,
    className,
    ...props 
  }: MotionProps) => {
    let animationClass = '';
    
    // Very simple animation mapping
    if (initial?.opacity === 0 && animate?.opacity === 1) {
      animationClass += ' animate-fade-in';
    }
    
    return (
      <section 
        className={`${className || ''} ${animationClass}`} 
        style={{
          animationDuration: `${transition?.duration || 0.5}s`,
          animationDelay: `${transition?.delay || 0}s`,
        }}
        {...props}
      >
        {children}
      </section>
    );
  },

  nav: ({ 
    children, 
    initial, 
    animate, 
    exit, 
    transition, 
    variants, 
    whileHover, 
    whileTap,
    className,
    ...props 
  }: React.HTMLAttributes<HTMLElement> & MotionProps) => {
    let animationClass = '';
    
    // Very simple animation mapping
    if (initial?.opacity === 0 && animate?.opacity === 1) {
      animationClass += ' animate-fade-in';
    }
    
    return (
      <nav 
        className={`${className || ''} ${animationClass}`} 
        style={{
          animationDuration: `${transition?.duration || 0.5}s`,
          animationDelay: `${transition?.delay || 0}s`,
        }}
        {...props}
      >
        {children}
      </nav>
    );
  },

  li: ({ 
    children, 
    initial, 
    animate, 
    exit, 
    transition, 
    variants, 
    whileHover, 
    whileTap,
    className,
    ...props 
  }: React.LiHTMLAttributes<HTMLLIElement> & Omit<MotionProps, keyof React.LiHTMLAttributes<HTMLLIElement>>) => {
    let animationClass = '';
    
    // Very simple animation mapping
    if (initial?.opacity === 0 && animate?.opacity === 1) {
      animationClass += ' animate-fade-in';
    }
    
    return (
      <li 
        className={`${className || ''} ${animationClass}`} 
        style={{
          animationDuration: `${transition?.duration || 0.5}s`,
          animationDelay: `${transition?.delay || 0}s`,
        }}
        {...props}
      >
        {children}
      </li>
    );
  },

  button: ({ 
    children, 
    initial, 
    animate, 
    exit, 
    transition, 
    variants, 
    whileHover, 
    whileTap,
    className,
    ...props 
  }: React.ButtonHTMLAttributes<HTMLButtonElement> & MotionProps) => {
    let animationClass = '';
    
    // Very simple animation mapping
    if (initial?.opacity === 0 && animate?.opacity === 1) {
      animationClass += ' animate-fade-in';
    }
    
    return (
      <button 
        className={`${className || ''} ${animationClass}`} 
        style={{
          animationDuration: `${transition?.duration || 0.5}s`,
          animationDelay: `${transition?.delay || 0}s`,
        }}
        {...props}
      >
        {children}
      </button>
    );
  }
};
