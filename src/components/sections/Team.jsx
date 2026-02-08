import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const appleEase = [0.28, 0.11, 0.32, 1];

const advisors = [
  {
    name: "ThS. Nguyễn Văn Hinh",
    role: "Cố vấn Công nghệ & Kỹ thuật",
    credential: "Chuyên viên QTKHCN & HTQT - PTIT",
  },
  {
    name: "TS. Nguyễn Thanh Nga",
    role: "Cố vấn Chiến lược & Kinh tế",
    credential: "Giảng viên Khoa QTKD1 - PTIT",
  },
  {
    name: "Trung tá ThS.Bs Nguyễn Hữu Dương",
    role: "Cố vấn Y khoa chuyên môn",
    credential: "Phó Chủ nhiệm Khoa C13 - Viện YHCT Quân Đội",
  },
];

const builders = [
  { name: "Vũ Đình Hiếu", role: "CTO" },
  { name: "Nguyễn Hải Nam", role: "Developer" },
  { name: "Nguyễn Bá Hùng", role: "Developer" },
  { name: "Nguyễn Thị Thoa", role: "Business Analyst" },
  { name: "Phùng Thị Hồng Vân", role: "Business Analyst" },
];

export function Team() {
  return (
    <section id="team" className="py-section-lg bg-surface-secondary">
      <div className="mx-auto max-w-apple px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-section-sm">
          <motion.p
            className="text-body text-accent font-medium mb-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: appleEase }}
          >
            Đội ngũ
          </motion.p>
          <motion.h2
            className="text-headline-sm md:text-headline text-text mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: appleEase, delay: 0.1 }}
          >
            Chuyên gia & Cố vấn
          </motion.h2>
          <motion.p
            className="text-body-lg text-text-secondary max-w-apple-narrow mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: appleEase, delay: 0.2 }}
          >
            Sự kết hợp giữa chuyên môn y tế và công nghệ trí tuệ nhân tạo từ các học viện hàng đầu.
          </motion.p>
        </div>

        {/* Advisors */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-20">
          {advisors.map((member, idx) => (
            <motion.div
              key={idx}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: appleEase }}
            >
              <div className="w-32 h-32 rounded-full bg-surface-tertiary mx-auto mb-6 flex items-center justify-center">
                <User size={40} className="text-text-tertiary" />
              </div>
              <h3 className="text-body font-semibold text-text mb-1">{member.name}</h3>
              <p className="text-body-sm text-accent mb-1">{member.role}</p>
              <p className="text-caption text-text-tertiary">{member.credential}</p>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="section-divider mb-16" />

        {/* Builders */}
        <div className="text-center">
          <h3 className="text-title-sm text-text mb-10">Đội ngũ phát triển</h3>
          <div className="flex flex-wrap items-center justify-center gap-12">
            {builders.map((member, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.6, ease: appleEase }}
              >
                <div className="w-20 h-20 rounded-full bg-surface-tertiary mx-auto mb-4 flex items-center justify-center">
                  <User size={28} className="text-text-tertiary" />
                </div>
                <p className="text-body-sm font-semibold text-text">{member.name}</p>
                <p className="text-caption text-text-secondary">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
