import React from 'react';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';

export function CallToAction() {
  return (
    <section className="py-24 container">
      <motion.div 
        className="relative overflow-hidden bg-accent rounded-[2.5rem] p-12 md:p-20 text-center text-white shadow-2xl"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            Sẵn sàng để cha mẹ hồi phục an toàn ngay hôm nay?
          </h2>
          <p className="text-white/90 text-lg mb-12 max-w-xl mx-auto">
            Gia nhập cộng đồng Memotion để mang lại sự độc lập và niềm vui sống cho những người thân yêu nhất.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-white text-accent hover:bg-white/90 w-full sm:w-auto h-14 px-8 text-base font-bold">
              Tải cho App Store
            </Button>
            <Button size="lg" className="bg-primary text-white hover:bg-primary-dark w-full sm:w-auto h-14 px-8 text-base font-bold">
              Tải cho Google Play
            </Button>
          </div>
        </div>
        
        {/* Abstract background shapes */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
      </motion.div>
    </section>
  );
}
