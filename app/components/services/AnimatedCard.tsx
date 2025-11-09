'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type Direction = 'left' | 'right' | 'up' | 'down';
type AnimatedTag = 'div' | 'article' | 'li' | 'section';

const componentMap = {
  div: motion.div,
  article: motion.article,
  li: motion.li,
  section: motion.section,
};

const getOffset = (direction: Direction) => {
  switch (direction) {
    case 'left':
      return { x: -160, y: 0 };
    case 'right':
      return { x: 160, y: 0 };
    case 'down':
      return { x: 0, y: -120 };
    case 'up':
    default:
      return { x: 0, y: 120 };
  }
};

export interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  as?: AnimatedTag;
  viewportAmount?: number;
}

export function AnimatedCard({
  children,
  className,
  direction = 'up',
  delay = 0,
  as = 'div',
  viewportAmount = 0.35,
  ...rest
}: AnimatedCardProps & Record<string, unknown>) {
  const MotionComponent = ((componentMap[as] ?? motion.div) as unknown) as typeof motion.div;
  const { x, y } = getOffset(direction);

  return (
    <MotionComponent
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: viewportAmount }}
      transition={{ duration: 0.8, ease: 'easeOut', delay }}
      className={className}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
}
