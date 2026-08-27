import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CrownIcon, KineticText, FloatingCrossGrid, FloatingJointNodes } from '../ui';
import hieuImg from '../../assets/images/hieu.JPG';
import hungImg from '../../assets/images/hung.JPG';
import namImg from '../../assets/images/nam.JPG';
import thoaImg from '../../assets/images/thoa.JPG';

const appleEase = [0.16, 1, 0.3, 1];

const advisors = [
    {
        name: 'ThS. Nguyễn Văn Hinh',
        role: 'Cố vấn Công nghệ & Kỹ thuật',
        credential: 'Chuyên viên QTKHCN & HTQT - Học viện PTIT',
    },
    {
        name: 'TS. Nguyễn Thanh Nga',
        role: 'Cố vấn Chiến lược & Kinh tế',
        credential: 'Giảng viên Khoa QTKD1 - Học viện PTIT',
    },
    {
        name: 'Trung tá ThS.Bs Nguyễn Hữu Dương',
        role: 'Cố vấn Y khoa chuyên môn',
        credential: 'Phó Chủ nhiệm Khoa C13 - Viện YHCT Quân Đội',
    },
];

const builders = [
    {
        id: 'hieu',
        name: 'Vũ Đình Hiếu',
        role: 'Chief Technology Officer (CTO)',
        imgSrc: hieuImg,
        bio: 'Chịu trách nhiệm kiến trúc hệ thống và thuật toán AI cốt lõi. Trực tiếp nghiên cứu mô hình Computer Vision nhận diện tư thế 3D và đo góc khớp thời gian thực theo chuẩn phác đồ y khoa.',
        expertise: ['AI / Computer Vision', 'System Architecture', 'HealthTech ML'],
    },
    {
        id: 'nam',
        name: 'Nguyễn Hải Nam',
        role: 'Backend & Cloud Lead',
        imgSrc: namImg,
        bio: 'Xây dựng hạ tầng Cloud và hệ thống Microservices xử lý luồng dữ liệu tập luyện thời gian thực, đảm bảo tốc độ phản hồi milli-giây và bảo mật dữ liệu y tế nghiêm ngặt.',
        expertise: ['Backend Architecture', 'Cloud Infrastructure', 'Realtime Data Pipeline'],
    },
    {
        id: 'hung',
        name: 'Nguyễn Bá Hùng',
        role: 'Frontend & UI/UX Engineer',
        imgSrc: hungImg,
        bio: 'Phát triển giao diện ứng dụng đa nền tảng. Chuyên sâu về tối ưu hóa trải nghiệm tương tác (UI/UX) thân thiện, trực quan và dễ tiếp cận cho người cao tuổi.',
        expertise: ['React / Next.js', 'Interaction Design', 'Accessibility'],
    },
    {
        id: 'thoa',
        name: 'Nguyễn Thị Thoa',
        role: 'Lead Business Analyst',
        imgSrc: thoaImg,
        bio: 'Chịu trách nhiệm phân tích nghiệp vụ và quy trình phục hồi chức năng lâm sàng. Chuyển hóa phác đồ y khoa khắt khe từ chuyên gia thành luồng tính năng trực quan trên ứng dụng.',
        expertise: ['Clinical Workflow', 'Product Strategy', 'Healthcare BA'],
    },
];

export function Team() {
    const [selectedId, setSelectedId] = useState(builders[0].id);

    const selectedMember = builders.find((m) => m.id === selectedId);

    const handleSelect = useCallback((id) => {
        setSelectedId(id);
    }, []);

    return (
        <section id="team" className="py-section-lg bg-surface relative overflow-hidden">
            <FloatingCrossGrid count={3} />
            <FloatingJointNodes className="bottom-24 left-8 hidden xl:block" />
            <div className="mx-auto max-w-apple px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.p
                        className="text-caption font-semibold text-accent uppercase tracking-widest mb-3"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: appleEase }}
                    >
                        Đội ngũ & Chuyên môn
                    </motion.p>
                    <h2 className="text-title sm:text-headline md:text-display text-text tracking-tight mb-4 leading-tight">
                        <KineticText text="Chuyên gia & Cố vấn" delay={0.1} duration={1.1} />
                    </h2>
                    <motion.p
                        className="text-body-lg text-text-secondary max-w-apple-narrow mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.0, ease: appleEase, delay: 0.25 }}
                    >
                        Sự kết hợp giữa chuyên môn y tế lâm sàng và công nghệ trí tuệ nhân tạo từ các học viện hàng đầu.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20">
                    {advisors.map((member, idx) => (
                        <motion.div
                            key={idx}
                            className="glass-card rounded-apple-xl p-8 text-center flex flex-col items-center justify-between group hover:shadow-lg transition-all duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ delay: idx * 0.15, duration: 1.0, ease: appleEase }}
                        >
                            <div className="w-24 h-24 rounded-full bg-surface-tertiary mx-auto mb-5 flex items-center justify-center border border-border/40 shadow-inner group-hover:scale-105 transition-transform duration-300">
                                <User size={36} className="text-text-tertiary" />
                            </div>
                            <div>
                                <h3 className="text-body font-bold text-text mb-1">{member.name}</h3>
                                <p className="text-body-sm text-accent font-semibold mb-2">{member.role}</p>
                                <p className="text-caption text-text-secondary leading-normal">{member.credential}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Divider */}
                <div className="section-divider mb-16" />

                {/* Builders */}
                <div className="text-center">
                    <h3 className="text-title text-text font-bold tracking-tight mb-10">Đội ngũ phát triển</h3>

                    {/* Builder avatars row */}
                    <div className="flex flex-wrap items-center justify-center gap-10 pb-8">
                        {builders.map((member, idx) => {
                            const isSelected = selectedId === member.id;

                            return (
                                <motion.div
                                    key={member.id}
                                    onClick={() => handleSelect(member.id)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            handleSelect(member.id);
                                        }
                                    }}
                                    role="button"
                                    tabIndex={0}
                                    aria-expanded={isSelected}
                                    aria-label={`Xem thêm về ${member.name}`}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: idx * 0.07,
                                        duration: 0.6,
                                        ease: appleEase,
                                    }}
                                    className="text-center cursor-pointer outline-none group"
                                >
                                    {/* Avatar */}
                                    <div
                                        className={cn(
                                            'w-20 h-20 rounded-full bg-surface-tertiary mx-auto mb-3 flex items-center justify-center overflow-hidden transition-all duration-300 border-2',
                                            isSelected
                                                ? 'border-primary ring-[4px] ring-primary/20 scale-110 shadow-md'
                                                : 'border-transparent group-hover:scale-105 group-hover:border-border',
                                        )}
                                    >
                                        {member.imgSrc ? (
                                            <img
                                                src={member.imgSrc}
                                                alt={member.name}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <User size={28} className="text-text-tertiary" />
                                        )}
                                    </div>
                                    <p
                                        className={cn(
                                            'text-body-sm font-semibold transition-colors duration-200',
                                            isSelected ? 'text-primary' : 'text-text',
                                        )}
                                    >
                                        {member.name}
                                    </p>
                                    <p className="text-caption text-text-secondary">{member.role}</p>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Detail panel */}
                    <motion.div
                        className="mt-8 glass-card rounded-apple-xl p-8 md:p-10 max-w-2xl mx-auto text-left shadow-xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: appleEase, delay: 0.2 }}
                    >
                        <AnimatePresence mode="wait">
                            {selectedMember && (
                                <motion.div
                                    key={selectedMember.id}
                                    initial={{ opacity: 0, y: 6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -6 }}
                                    transition={{ duration: 0.3, ease: appleEase }}
                                >
                                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
                                        {/* Large avatar */}
                                        <div className="relative w-32 h-32 md:w-36 md:h-36 flex-shrink-0">
                                            {selectedMember.id === 'hieu' && (
                                                <span className="absolute -top-4 left-4 z-10 w-10 drop-shadow -rotate-[22deg]">
                                                    <CrownIcon />
                                                </span>
                                            )}
                                            <div className="w-full h-full rounded-full bg-surface-tertiary overflow-hidden flex items-center justify-center border-2 border-white shadow-md">
                                                {selectedMember.imgSrc ? (
                                                    <img
                                                        src={selectedMember.imgSrc}
                                                        alt={selectedMember.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                ) : (
                                                    <User size={56} className="text-text-tertiary" />
                                                )}
                                            </div>
                                        </div>

                                        {/* Info */}
                                        <div className="text-center md:text-left flex-1 min-w-0">
                                            <h4 className="text-title-sm font-bold text-text mb-1">
                                                {selectedMember.name}
                                            </h4>
                                            <p className="text-body-sm text-accent font-semibold mb-3">
                                                {selectedMember.role}
                                            </p>
                                            <p className="text-body-sm text-text-secondary leading-relaxed mb-5">
                                                {selectedMember.bio}
                                            </p>

                                            {/* Expertise tags */}
                                            <div className="flex flex-wrap justify-center md:justify-start gap-2">
                                                {selectedMember.expertise?.map((skill) => (
                                                    <span
                                                        key={skill}
                                                        className="px-3 py-1 text-[11px] font-semibold text-primary bg-primary/10 rounded-full border border-primary/15"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
