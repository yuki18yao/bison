
import React from 'react';

export interface MotionProps extends React.HTMLAttributes<HTMLDivElement> {
  initial?: any;
  animate?: any;
  exit?: any;
  transition?: any;
  variants?: any;
  whileHover?: any;
  whileTap?: any;
}
