import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { AnimatedCounter, FloatingCrossGrid, PartnerCard } from '../ui';

const appleEase = [0.16, 1, 0.3, 1];

const stats = [
  { numericValue: 9.3, decimals: 1, suffix: '%', label: 'Dân số cao tuổi tại VN', desc: 'Nhu cầu phục hồi chức năng cấp thiết' },
  { numericValue: 20, decimals: 0, suffix: 'x', label: 'Tối ưu chi phí', desc: 'So với thuê điều dưỡng tư nhân tại gia' },
  { numericValue: 24, decimals: 0, suffix: '/7', label: 'Kết nối & Giám sát', desc: 'An tâm trọn vẹn cho con cái đi làm xa' },
];

const partners = [
  {
    name: 'Viện Y học Cổ truyền Quân Đội',
    role: 'Cố vấn chuyên môn y khoa & Phác đồ điều trị',
    logo: '/yhoccotruyen.png',
  },
  {
    name: 'Học viện Công nghệ Bưu chính Viễn thông (PTIT)',
    role: 'Nghiên cứu công nghệ AI & Computer Vision',
    logo: '/ptit.png',
  },
];

export function TrustIndicators() {
  return (
    <section className="py-14 border-y border-border/40 bg-white/40 backdrop-blur-sm relative overflow-hidden">
      <FloatingCrossGrid count={2} />
      <div className="mx-auto max-w-apple-wide px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 pb-10 border-b border-border/30">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 1.1, delay: i * 0.15, ease: appleEase }}
            >
              <p className="text-display sm:text-display-lg font-bold text-text tracking-tight mb-1">
                <AnimatedCounter
                  value={stat.numericValue}
                  decimals={stat.decimals}
                  suffix={stat.suffix}
                  duration={2.0}
                />
              </p>
              <p className="text-body font-semibold text-primary mb-0.5">{stat.label}</p>
              <p className="text-caption text-text-secondary">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left shrink-0">
            <p className="text-caption uppercase tracking-widest text-accent font-semibold mb-1">
              Hợp tác chiến lược
            </p>
            <p className="text-body font-bold text-text">
              Bảo chứng chuyên môn y khoa & Công nghệ
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center justify-center w-full lg:w-auto">
            {partners.map((partner, i) => (
              <PartnerCard
                key={partner.name}
                name={partner.name}
                role={partner.role}
                logo={partner.logo}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
