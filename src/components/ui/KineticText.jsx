import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const appleEase = [0.16, 1, 0.3, 1];

export function KineticText({
  text,
  as: Component = 'span',
  className = '',
  wordClassName = '',
  delay = 0,
  stagger = 0.05,
  duration = 1.0,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });

  const words = typeof text === 'string' ? text.split(' ') : [];

  return (
    <Component
      ref={ref}
      className={`inline ${className}`}
      aria-label={typeof text === 'string' ? text : undefined}
    >
      {words.map((word, idx) => (
        <span
          key={idx}
          className="inline-block overflow-hidden align-baseline mr-[0.25em] last:mr-0"
        >
          <motion.span
            className={`inline-block ${wordClassName}`}
            initial={{ y: '110%', opacity: 0 }}
            animate={isInView ? { y: '0%', opacity: 1 } : { y: '110%', opacity: 0 }}
            transition={{
              duration,
              ease: appleEase,
              delay: delay + idx * stagger,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}
