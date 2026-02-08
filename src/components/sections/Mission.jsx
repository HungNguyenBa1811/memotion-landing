import React from 'react';
import { motion } from 'framer-motion';

export function Mission() {
  return (
    <section id="mission" className="relative overflow-hidden py-24 bg-primary-light/10">
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-text mb-8 leading-tight">
              Sứ mệnh của Memotion: Để tuổi già không bao giờ là rào cản của sự độc lập.
            </h2>
            <p className="text-xl text-text-muted mb-8 leading-relaxed">
              Chúng tôi tin rằng với sự hỗ trợ đúng đắn từ công nghệ, quá trình hồi phục luôn khả thi. Memotion trao quyền cho các gia đình để kiểm soát sức khỏe tại nhà, lấp đầy khoảng trống y tế bằng lòng trắc ẩn và sự chính xác.
            </p>
            <div className="flex items-center gap-4 py-4 border-t border-primary/10">
              <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center text-white font-bold">
                M
              </div>
              <div>
                <p className="font-bold text-text">Cam kết từ Đội ngũ sáng lập</p>
                <p className="text-sm text-text-muted">Chuyên môn y khoa & Sự ấm áp gia đình</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="order-1 lg:order-2 relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent z-10" />
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-center p-12 text-2xl z-20">
               [Inspiring Photo: Elderly person walking outdoors without assistance]
            </div>
            {/* Visual background simulation */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516307362725-3222770d1001?auto=format&fit=crop&q=80')] bg-cover bg-center grayscale-[20%]" />
          </motion.div>
        </div>
      </div>
      
      {/* Decorative */}
      <div className="absolute top-0 right-0 h-64 w-64 bg-accent/5 rounded-full blur-3xl" />
    </section>
  );
}
