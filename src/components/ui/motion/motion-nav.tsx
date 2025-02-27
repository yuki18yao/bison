
import React from 'react';
import { MotionProps } from './types';
import { getAnimationClass, getAnimationStyle } from './utils';

export const MotionNav = ({ 
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
  const animationClass = getAnimationClass(initial, animate);
  
  return (
    <nav 
      className={`${className || ''} ${animationClass}`} 
      style={getAnimationStyle(transition)}
      {...props}
    >
      {children}
    </nav>
  );
};
