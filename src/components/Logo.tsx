import { motion } from 'motion/react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

export function Logo({ size = 'md', animated = false }: LogoProps) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
  };

  const logoComponent = (
    <img
      src="/Logo-128.png"
      alt="Logo"
      className={`${sizes[size]} object-contain`}
    />
  );

  if (animated) {
    return (
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      >
        {logoComponent}
      </motion.div>
    );
  }

  return logoComponent;
}
