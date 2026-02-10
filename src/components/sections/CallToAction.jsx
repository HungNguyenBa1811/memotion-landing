import React from 'react';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';

const appleEase = [0.28, 0.11, 0.32, 1];

export function CallToAction() {
  return (
    <section className="py-section bg-[#1B4332]">
      <motion.div
        className="mx-auto max-w-apple px-6 lg:px-8 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: appleEase }}
      >
        <h2 className="text-headline-sm md:text-headline lg:text-display-sm text-white mb-6">
          Sẵn sàng để cha mẹ hồi phục an toàn ngay hôm nay?
        </h2>
        <p className="text-body-xl text-white/75 max-w-apple-narrow mx-auto mb-10">
          Gia nhập cộng đồng Memotion để mang lại sự độc lập và niềm vui sống cho những người thân yêu nhất.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="xl" variant="primary">
            Tải ứng dụng miễn phí
          </Button>
          <Button size="xl" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
            Tìm hiểu thêm
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
