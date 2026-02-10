import React from 'react';
import { motion } from 'framer-motion';

const appleEase = [0.28, 0.11, 0.32, 1];

const testimonials = [
  {
    content: "Làm việc tại TP.HCM, mình luôn lo lắng cho bố ở quê sau tai biến. Từ khi có Memotion, mình có thể theo dõi từng buổi tập của bố qua app. Cảm giác an tâm hơn rất nhiều.",
    author: "Anh Minh Tuấn",
    role: "Kỹ sư công nghệ",
  },
  {
    content: "Tôi từng sợ tập sai sẽ bị ngã lần nữa. Nhưng trợ lý AI của Memotion nhắc nhở bằng giọng nói rất dễ hiểu. Nhờ tập đúng mà tôi đã có thể tự đi lại trong nhà sau 2 tháng.",
    author: "Bác Ngọc Lan",
    role: "Người cao tuổi phục hồi sau tai biến",
  },
  {
    content: "Lúc đầu tôi định thuê điều dưỡng riêng nhưng chi phí quá cao. Memotion mang lại hiệu quả tương đương nhưng chi phí rẻ hơn tới 20 lần.",
    author: "Chị Thu Hương",
    role: "Kinh doanh tự do",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-section-lg bg-surface-secondary">
      <div className="mx-auto max-w-apple-wide px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-section-sm">
          <motion.p
            className="text-body text-accent font-medium mb-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: appleEase }}
          >
            Câu chuyện khách hàng
          </motion.p>
          <motion.h2
            className="text-headline-sm md:text-headline text-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: appleEase, delay: 0.1 }}
          >
            Hạnh phúc là khi thấy cha mẹ tự tin bước tiếp.
          </motion.h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item, idx) => (
            <motion.blockquote
              key={idx}
              className="bg-surface-tertiary rounded-apple-xl p-8 lg:p-10 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: appleEase }}
            >
              <p className="text-body-lg text-text flex-1 mb-8 leading-relaxed">
                &ldquo;{item.content}&rdquo;
              </p>
              <footer>
                <p className="text-body font-semibold text-text">{item.author}</p>
                <p className="text-body-sm text-text-tertiary">{item.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
