import React from 'react';
import { motion } from 'framer-motion';

const appleEase = [0.16, 1, 0.3, 1];

export function PartnerCard({
  name,
  role,
  logo,
  index = 0,
  className = '',
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay: 0.2 + index * 0.15, ease: appleEase }}
      className="flex justify-center w-full"
    >
      <motion.div
        animate={{
          y: index % 2 === 0 ? [-6, 6, -6] : [6, -6, 6],
          rotate: index % 2 === 0 ? [-0.5, 0.5, -0.5] : [0.5, -0.5, 0.5],
        }}
        transition={{
          duration: 4.8 + index * 0.8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        whileHover={{
          scale: 1.025,
          y: -4,
          transition: { duration: 0.2, ease: 'easeOut' },
        }}
        className={`w-full sm:w-[340px] md:w-[360px] h-[100px] flex items-center gap-3.5 p-3.5 rounded-apple bg-surface/90 backdrop-blur-sm border border-border/60 shadow-sm hover:shadow-md hover:border-primary/40 transition-colors ${className}`}
      >
        <div className="h-12 w-12 shrink-0 flex items-center justify-center p-1.5 rounded-apple-sm bg-white/95 border border-border/40 shadow-sm">
          <img
            src={logo}
            alt={name}
            className="max-h-full max-w-full object-contain"
          />
        </div>
        <div className="flex-1 min-w-0 flex flex-col justify-center text-left">
          <p className="text-body-sm font-bold text-text leading-tight line-clamp-2">
            {name}
          </p>
          <p className="text-[12px] text-text-secondary leading-snug line-clamp-2 mt-1">
            {role}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
