
import React from 'react';
import { MotionProps } from './types';
import { getAnimationClass, getAnimationStyle } from './utils';

export const MotionLi = ({ 
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
  const animationClass = getAnimationClass(initial, animate);
  
  return (
    <li 
      className={`${className || ''} ${animationClass}`} 
      style={getAnimationStyle(transition)}
      {...props}
    >
      {children}
    </li>
  );
};
