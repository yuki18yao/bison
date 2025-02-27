
export function getAnimationClass(initial: any, animate: any): string {
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
  if (initial?.x === -20 && animate?.x === 0) {
    animationClass += ' animate-slide-right';
  }
  if (initial?.x === 20 && animate?.x === 0) {
    animationClass += ' animate-slide-left';
  }
  
  return animationClass;
}

export function getAnimationStyle(transition?: any): React.CSSProperties {
  return {
    animationDuration: `${transition?.duration || 0.5}s`,
    animationDelay: `${transition?.delay || 0}s`,
  };
}
