
import React from 'react';
import { MotionProps } from './types';
import { getAnimationClass, getAnimationStyle } from './utils';

export const MotionButton = ({ 
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
  const animationClass = getAnimationClass(initial, animate);
  
  return (
    <button 
      className={`${className || ''} ${animationClass}`} 
      style={getAnimationStyle(transition)}
      {...props}
    >
      {children}
    </button>
  );
};
