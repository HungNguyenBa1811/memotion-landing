import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    content: "Làm việc tại TP.HCM, mình luôn lo lắng cho bố ở quê sau tai biến. Từ khi có Memotion, mình có thể theo dõi từng buổi tập của bố qua app. Cảm giác an tâm hơn rất nhiều khi biết bố đang tập đúng tư thế dưới sự giám sát của AI.",
    author: "Anh Minh Tuấn",
    role: "Kỹ sư công nghệ (Sandwich Generation)",
    avatar: "MT"
  },
  {
    content: "Tôi từng sợ tập sai sẽ bị ngã lần nữa. Nhưng trợ lý AI của Memotion nhắc nhở bằng giọng nói rất dễ hiểu: 'Bác nhấc cao chân hơn một chút'. Nhờ tập đúng mà tôi đã có thể tự đi lại trong nhà sau 2 tháng.",
    author: "Bác Ngọc Lan",
    role: "Người cao tuổi phục hồi sau tai biến",
    avatar: "NL"
  },
  {
    content: "Lúc đầu tôi định thuê điều dưỡng riêng nhưng chi phí quá cao. Memotion mang lại hiệu quả tương đương nhưng chi phí rẻ hơn tới 20 lần. Một giải pháp quá tuyệt vời cho các gia đình có người già cần phục hồi.",
    author: "Chị Thu Hương",
    role: "Kinh doanh tự do",
    avatar: "TH"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-primary-light/5">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">Câu chuyện khách hàng</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-text">Hạnh phúc là khi thấy cha mẹ tự tin bước tiếp</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div 
              key={idx}
              className="bg-white p-8 rounded-3xl shadow-sm border border-primary/5 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Quote className="absolute top-6 right-8 text-accent/10" size={48} />
              <p className="text-text-muted italic mb-8 relative z-10">"{item.content}"</p>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                  {item.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-text text-sm">{item.author}</h4>
                  <p className="text-xs text-text-muted">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
