import React from 'react';
import { motion } from 'framer-motion';

const appleEase = [0.28, 0.11, 0.32, 1];

export function Mission() {
  return (
    <section id="mission" className="py-section-lg bg-surface">
      <div className="mx-auto max-w-apple px-6 lg:px-8 text-center">
        {/* Overline */}
        <motion.p
          className="text-body text-accent font-medium mb-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: appleEase }}
        >
          Sứ mệnh
        </motion.p>

        {/* Large mission statement */}
        <motion.h2
          className="text-headline-sm md:text-headline lg:text-display text-text max-w-4xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: appleEase, delay: 0.1 }}
        >
          Để tuổi già không bao giờ là rào cản của sự độc lập.
        </motion.h2>

        {/* Supporting paragraph */}
        <motion.p
          className="text-body-xl text-text-secondary max-w-apple-narrow mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: appleEase, delay: 0.2 }}
        >
          Chúng tôi tin rằng với sự hỗ trợ đúng đắn từ công nghệ, quá trình hồi phục luôn khả thi.
          Memotion trao quyền cho các gia đình để kiểm soát sức khỏe tại nhà,
          lấp đầy khoảng trống y tế bằng lòng trắc ẩn và sự chính xác.
        </motion.p>
      </div>

      {/* Full-bleed image */}
      <motion.div
        className="mx-auto max-w-apple-wide px-6 lg:px-8"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0, ease: appleEase, delay: 0.3 }}
      >
        <div className="relative aspect-[16/9] rounded-apple-xl overflow-hidden bg-surface">
          <div className="absolute inset-0 bg-[url('src/assets/images/mission.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/30 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
