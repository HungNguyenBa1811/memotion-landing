import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const advisors = [
  {
    name: "ThS. Nguyễn Văn Hinh",
    role: "Cố vấn Công nghệ & Kỹ thuật",
    credential: "Chuyên viên QTKHCN & HTQT - PTIT",
    task: "Định hướng kiến trúc sản phẩm, đảm bảo tính tiên phong của công nghệ lõi."
  },
  {
    name: "TS. Nguyễn Thanh Nga",
    role: "Cố vấn Chiến lược & Kinh tế",
    credential: "Giảng viên Khoa QTKD1 - PTIT",
    task: "Vạch ra lộ trình phát triển bền vững, tối ưu hóa chi phí người dùng."
  },
  {
    name: "Trung tá ThS.Bs Nguyễn Hữu Dương",
    role: "Cố vấn Y khoa chuyên môn",
    credential: "Phó Chủ nhiệm Khoa C13 - Viện YHCT Quân Đội",
    task: "Kiểm định bài tập, đánh giá thuật toán theo chuẩn y tế khắt khe."
  }
];

const builders = [
  { name: "Vũ Đình Hiếu", role: "CTO", affiliation: "PTIT" },
  { name: "Nguyễn Hải Nam", role: "Developer", affiliation: "PTIT" },
  { name: "Nguyễn Bá Hùng", role: "Developer", affiliation: "PTIT" },
  { name: "Nguyễn Thị Thoa", role: "Business Analyst", affiliation: "PTIT" },
  { name: "Phùng Thị Hồng Vân", role: "Business Analyst", affiliation: "NEU" }
];

export function Team() {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-text mb-6">Đội ngũ chuyên gia & Cố vấn</h2>
          <p className="text-text-muted text-lg">
            Sự kết hợp giữa chuyên môn y tế khắt khe và công nghệ trí tuệ nhân tạo đột phá từ các học viện hàng đầu.
          </p>
        </div>

        {/* Advisors */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {advisors.map((member, idx) => (
            <motion.div 
              key={idx}
              className="bg-background rounded-3xl p-8 border border-primary/10 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              {/* Placeholder Ảnh Cố vấn */}
              <div className="w-32 h-32 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 overflow-hidden border-2 border-primary/5">
                 <User size={48} className="text-primary/20" />
              </div>

              <h3 className="text-xl font-bold text-text mb-1">{member.name}</h3>
              <p className="text-primary font-bold text-sm mb-2">{member.role}</p>
              <p className="text-xs font-semibold text-text-muted uppercase mb-4">{member.credential}</p>
              <p className="text-sm text-text-muted leading-relaxed italic border-t border-primary/5 pt-4">
                "{member.task}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* Builders */}
        <div className="pt-12 border-t border-primary/5 text-center">
          <h4 className="text-2xl font-bold text-text mb-10 italic">Đội ngũ phát triển tài năng</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {builders.map((member, idx) => (
              <motion.div 
                key={idx} 
                className="bg-white p-6 rounded-2xl shadow-sm border border-primary/5 flex flex-col items-center"
                whileHover={{ y: -5 }}
              >
                {/* Placeholder Ảnh Developer */}
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4 border border-accent/5">
                   <User size={24} className="text-accent/30" />
                </div>
                <span className="font-bold text-text text-sm">{member.name}</span>
                <span className="text-[11px] text-primary font-medium">{member.role}</span>
                <span className="text-[10px] text-text-muted uppercase tracking-tighter">{member.affiliation}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
