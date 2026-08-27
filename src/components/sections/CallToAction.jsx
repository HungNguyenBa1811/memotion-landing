import React from 'react';
import { Button, KineticText, AppleAppStoreBadge, GooglePlayBadge, FloatingSparkle } from '../ui';
import { motion } from 'framer-motion';

const appleEase = [0.16, 1, 0.3, 1];

export function CallToAction() {
  return (
    <section className="py-section-lg bg-gradient-to-b from-[#0D281E] via-[#081C15] to-[#04100C] relative overflow-hidden text-white">
      {/* Floating Sparkle SVGs */}
      <FloatingSparkle className="top-14 left-16 hidden sm:block text-accent-light/80" delay={0} size={28} />
      <FloatingSparkle className="top-24 right-20 hidden sm:block text-accent/70" delay={1.2} size={24} />
      <FloatingSparkle className="bottom-24 left-1/5 hidden md:block text-accent-light/60" delay={2.4} size={22} />
      <FloatingSparkle className="bottom-16 right-1/4 hidden md:block text-accent/60" delay={0.6} size={26} />

      {/* Breathing ambient glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[440px] bg-accent/25 blur-[140px] pointer-events-none rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.22, 0.38, 0.22],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="mx-auto max-w-apple px-6 lg:px-8 text-center relative z-10">
        <motion.p
          className="text-caption font-semibold text-accent-light uppercase tracking-widest mb-4"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: appleEase }}
        >
          Bắt đầu ngay hôm nay
        </motion.p>

        <h2 className="text-title sm:text-headline md:text-display lg:text-display-lg font-bold text-white tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
          <KineticText
            text="Sẵn sàng để cha mẹ hồi phục an toàn cùng Memotion?"
            delay={0.1}
            duration={1.1}
            wordClassName="text-white"
          />
        </h2>
        <motion.p
          className="text-body-lg sm:text-body-xl text-white/80 max-w-apple-narrow mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: appleEase, delay: 0.3 }}
        >
          Gia nhập cộng đồng hàng ngàn gia đình đang trao quyền tự chủ vận động và niềm an tâm vô giá cho người thân yêu nhất.
        </motion.p>

        {/* Store Download Badges */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: appleEase, delay: 0.45 }}
        >
          <AppleAppStoreBadge />
          <GooglePlayBadge />
        </motion.div>

        <motion.p
          className="text-caption text-white/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.6 }}
        >
          Tương thích với iOS 16+ & Android 12+ • Miễn phí cài đặt và đánh giá thể trạng ban đầu
        </motion.p>
      </div>
    </section>
  );
}
