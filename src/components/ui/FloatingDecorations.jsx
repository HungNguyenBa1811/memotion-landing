import React from 'react';
import { motion } from 'framer-motion';

export function FloatingCrossGrid({ className = '', count = 4 }) {
  const positions = [
    { top: '14%', left: '8%', delay: 0, duration: 6, size: 30 },
    { top: '65%', right: '10%', delay: 1.5, duration: 7.5, size: 34 },
    { top: '35%', right: '18%', delay: 0.8, duration: 5.5, size: 26 },
    { top: '80%', left: '14%', delay: 2.2, duration: 8.0, size: 28 },
    { top: '25%', left: '46%', delay: 1.0, duration: 6.5, size: 24 },
  ];

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {positions.slice(0, count).map((pos, idx) => (
        <motion.div
          key={idx}
          className="absolute text-accent/45"
          style={{ top: pos.top, left: pos.left, right: pos.right }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 90, 180, 270, 360],
            opacity: [0.35, 0.75, 0.35],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: pos.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: pos.delay,
          }}
        >
          <svg width={pos.size} height={pos.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
            <line x1="12" y1="4" x2="12" y2="20" />
            <line x1="4" y1="12" x2="20" y2="12" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

export function FloatingJointNodes({ className = '' }) {
  return (
    <motion.div
      className={`pointer-events-none absolute ${className}`}
      animate={{
        y: [0, -18, 0],
        x: [0, 10, 0],
        rotate: [0, 7, -7, 0],
      }}
      transition={{
        duration: 9,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <svg width="190" height="190" viewBox="0 0 190 190" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="55" r="7" fill="#4DB6AC" fillOpacity="0.85" />
        <circle cx="40" cy="55" r="14" stroke="#4DB6AC" strokeWidth="1.8" strokeDasharray="3 3" strokeOpacity="0.5" />
        
        <circle cx="150" cy="40" r="8" fill="#00695C" fillOpacity="0.8" />
        <circle cx="150" cy="40" r="16" stroke="#00695C" strokeWidth="2" strokeOpacity="0.45" />
        
        <circle cx="95" cy="135" r="9" fill="#D87659" fillOpacity="0.85" />
        <circle cx="95" cy="135" r="18" stroke="#D87659" strokeWidth="2" strokeDasharray="4 4" strokeOpacity="0.55" />
        
        <circle cx="165" cy="150" r="5.5" fill="#4DB6AC" fillOpacity="0.75" />
        
        <line x1="40" y1="55" x2="150" y2="40" stroke="#00695C" strokeWidth="2.8" strokeDasharray="4 4" strokeOpacity="0.55" />
        <line x1="150" y1="40" x2="95" y2="135" stroke="#4DB6AC" strokeWidth="2.8" strokeOpacity="0.65" />
        <line x1="95" y1="135" x2="165" y2="150" stroke="#D87659" strokeWidth="2.8" strokeDasharray="4 4" strokeOpacity="0.55" />
        <line x1="40" y1="55" x2="95" y2="135" stroke="#00695C" strokeWidth="2.2" strokeOpacity="0.45" />
      </svg>
    </motion.div>
  );
}

export function FloatingWaveLine({ className = '' }) {
  return (
    <motion.div
      className={`pointer-events-none absolute ${className}`}
      animate={{
        x: [0, 26, 0],
        opacity: [0.45, 0.85, 0.45],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <svg width="360" height="65" viewBox="0 0 360 65" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M 10 32 Q 55 5 100 32 T 180 32 T 260 32 T 350 32"
          stroke="#4DB6AC"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeDasharray="8 8"
        />
        <path
          d="M 10 32 Q 55 60 100 32 T 180 32 T 260 32 T 350 32"
          stroke="#00695C"
          strokeWidth="2.6"
          strokeOpacity="0.75"
        />
        <circle cx="100" cy="32" r="4.5" fill="#D87659" />
        <circle cx="260" cy="32" r="4.5" fill="#4DB6AC" />
      </svg>
    </motion.div>
  );
}

export function FloatingSparkle({ className = '', delay = 0, size = 32 }) {
  return (
    <motion.div
      className={`pointer-events-none absolute text-accent drop-shadow-sm ${className}`}
      animate={{
        scale: [0.85, 1.25, 0.85],
        rotate: [0, 90, 180, 270, 360],
        opacity: [0.45, 0.9, 0.45],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
      </svg>
    </motion.div>
  );
}
