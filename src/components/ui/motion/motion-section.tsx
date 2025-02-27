
import React from 'react';
import { MotionProps } from './types';
import { getAnimationClass, getAnimationStyle } from './utils';

export const MotionSection = ({ 
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
  const animationClass = getAnimationClass(initial, animate);
  
  return (
    <section 
      className={`${className || ''} ${animationClass}`} 
      style={getAnimationStyle(transition)}
      {...props}
    >
      {children}
    </section>
  );
};
