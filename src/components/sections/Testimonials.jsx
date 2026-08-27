import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { KineticText, FloatingCrossGrid, FloatingWaveLine } from '../ui';

const appleEase = [0.16, 1, 0.3, 1];

const testimonials = [
  {
    content: "Làm việc tại TP.HCM, mình luôn lo lắng thắt lòng cho bố ở quê sau cơn tai biến. Từ khi có Memotion, mình theo dõi từng buổi tập và góc nâng chân của bố ngay trên điện thoại. Cảm giác an tâm hơn rất nhiều.",
    author: "Anh Minh Tuấn (36 tuổi)",
    role: "Kỹ sư phần mềm • TP. Hồ Chí Minh",
    tag: "Chăm sóc cha mẹ từ xa",
  },
  {
    content: "Tôi từng sợ tập sai sẽ bị té ngã lần nữa nên rất rụt rè. Nhưng trợ lý AI nhắc nhở bằng giọng nói rất nhẹ nhàng, chuẩn từng góc khớp. Nhờ tập đúng mà tôi đã tự đi lại quanh sân nhà sau 2 tháng.",
    author: "Bác Ngọc Lan (68 tuổi)",
    role: "Phục hồi chức năng sau tai biến • Hà Nội",
    tag: "Tự chủ vận động",
  },
  {
    content: "Lúc đầu gia đình tính thuê điều dưỡng riêng nhưng chi phí quá đắt đỏ và khó duy trì lâu dài. Memotion mang lại bài tập chuẩn y khoa tương đương mà chi phí rẻ hơn tới 20 lần.",
    author: "Chị Thu Hương (42 tuổi)",
    role: "Quản lý kinh doanh • Đà Nẵng",
    tag: "Tối ưu chi phí điều trị",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-section-lg bg-surface-secondary relative overflow-hidden">
      <FloatingCrossGrid count={3} />
      <FloatingWaveLine className="top-1/2 -left-16 hidden xl:block opacity-40" />
      <div className="mx-auto max-w-apple-wide px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.p
            className="text-caption font-semibold text-accent uppercase tracking-widest mb-3"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: appleEase }}
          >
            Câu chuyện khách hàng
          </motion.p>
          <h2 className="text-title sm:text-headline md:text-display text-text tracking-tight mb-4 leading-tight">
            <KineticText text="Hạnh phúc là khi thấy cha mẹ tự tin bước tiếp." delay={0.1} duration={1.1} />
          </h2>
          <motion.p
            className="text-body-lg text-text-secondary max-w-apple-narrow mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: appleEase, delay: 0.25 }}
          >
            Những chia sẻ chân thực từ các gia đình đã đồng hành cùng Memotion trên hành trình phục hồi.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item, idx) => {
            const initialRotation = idx === 0 ? -1.5 : idx === 2 ? 1.5 : 0;

            return (
              <motion.blockquote
                key={idx}
                className="glass-card rounded-apple-xl p-8 lg:p-10 flex flex-col justify-between cursor-default group hover:shadow-xl transition-all duration-500 relative"
                initial={{ opacity: 0, y: 40, rotate: initialRotation }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: idx * 0.15, duration: 1.1, ease: appleEase }}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[12px] font-semibold text-accent uppercase tracking-wide">
                      {item.tag}
                    </span>
                    <Quote size={24} className="text-border" />
                  </div>
                  <p className="text-body text-text mb-8 leading-relaxed">
                    &ldquo;{item.content}&rdquo;
                  </p>
                </div>
                <footer className="pt-6 border-t border-border/40">
                  <p className="text-body font-semibold text-text">{item.author}</p>
                  <p className="text-caption text-text-secondary">{item.role}</p>
                </footer>
              </motion.blockquote>
            );
          })}
        </div>
      </div>
    </section>
  );
}
