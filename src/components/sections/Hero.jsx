import React from 'react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-32 xl:py-40">
      <div className="container relative z-10 grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
        {/* Content */}
        <motion.div 
          className="flex flex-col items-start gap-6 lg:gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-text sm:text-5xl md:text-6xl lg:text-7xl">
            Đồng hành phục hồi, <span className="text-primary">Gắn kết yêu thương</span> cùng AI
          </h1>
          <p className="max-w-[42rem] leading-normal text-text-muted sm:text-xl sm:leading-8">
            Giải pháp phục hồi chức năng chuẩn y khoa tại nhà cho cha mẹ. 
            Xóa bỏ nỗi lo của "Thế hệ Sandwich" bằng công nghệ nhận diện 3D và sự thấu hiểu sâu sắc.
          </p>
          <div className="flex flex-col gap-4 text-sm text-text-muted italic border-l-4 border-accent pl-4">
             <p>"Việt Nam đang già hóa thần tốc - 9.3% dân số trên 65 tuổi. Đừng để khoảng cách bận rộn khiến cha mẹ già cô đơn và sợ hãi."</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
            <Button size="lg" variant="accent" className="w-full sm:w-auto">
              Bắt đầu hành trình phục hồi
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10">
              Tìm hiểu cho Người chăm sóc
            </Button>
          </div>
        </motion.div>

        {/* Visual Placeholder */}
        <motion.div 
          className="relative aspect-video lg:aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-primary/10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Placeholder for "Elderly person smiling with tablet" */}
          <div className="absolute inset-0 flex items-center justify-center text-primary/40 font-bold text-2xl p-8 text-center bg-white/40 backdrop-blur-sm">
             [Image: Elderly person smiling holding a tablet with caregiver]
          </div>
          
          {/* Floating UI Card Overlay */}
          <motion.div 
            className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/50"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
                98%
              </div>
              <div>
                <h3 className="font-bold text-text">Recovery Progress</h3>
                <p className="text-xs text-text-muted">Week 4 • Mobility Improved</p>
              </div>
            </div>
            {/* Simple chart bar */}
            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-accent w-[85%] rounded-full" />
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[100px]" />
      <div className="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[80px]" />
    </section>
  );
}
