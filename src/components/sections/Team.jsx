import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User } from 'lucide-react';
import { cn } from '../../lib/utils';
import hieuImg from '../../assets/images/hieu.JPG';
import hungImg from '../../assets/images/hung.JPG';
import namImg from '../../assets/images/nam.JPG';
import thoaImg from '../../assets/images/thoa.JPG';
import { CrownIcon } from '../ui/Icons';

const appleEase = [0.28, 0.11, 0.32, 1];

const advisors = [
    {
        name: 'ThS. Nguyễn Văn Hinh',
        role: 'Cố vấn Công nghệ & Kỹ thuật',
        credential: 'Chuyên viên QTKHCN & HTQT - PTIT',
    },
    {
        name: 'TS. Nguyễn Thanh Nga',
        role: 'Cố vấn Chiến lược & Kinh tế',
        credential: 'Giảng viên Khoa QTKD1 - PTIT',
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
        role: 'CTO',
        imgSrc: hieuImg,
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis nostrud exercitation ullamco laboris.',
        expertise: ['AI/ML', 'System Architecture', 'Healthcare Tech'],
    },
    {
        id: 'nam',
        name: 'Nguyễn Hải Nam',
        role: 'Developer',
        imgSrc: namImg,
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras vehicula, mi eget laoreet venenatis.',
        expertise: ['Backend', 'Cloud', 'DevOps'],
    },
    {
        id: 'hung',
        name: 'Nguyễn Bá Hùng',
        role: 'Developer',
        imgSrc: hungImg,
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus. Cras vehicula, mi eget laoreet venenatis.',
        expertise: ['Full-stack', 'React', 'UI/UX'],
    },
    {
        id: 'thoa',
        name: 'Nguyễn Thị Thoa',
        role: 'Business Analyst',
        imgSrc: thoaImg,
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Maecenas non eros at nisl tincidunt auctor. Cras vehicula, mi eget laoreet venenatis.',
        expertise: ['Business Analysis', 'Product Strategy'],
    },
    {
        id: 'van',
        name: 'Phùng Thị Hồng Vân',
        role: 'Business Analyst',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. Cras vehicula.',
        expertise: ['Market Research', 'UX Research'],
    },
];

export function Team() {
    const [selectedId, setSelectedId] = useState(builders[0].id);

    const selectedMember = builders.find((m) => m.id === selectedId);

    const handleSelect = useCallback((id) => {
        setSelectedId(id);
    }, []);

    return (
        <section id="team" className="py-section-lg bg-surface">
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

                    {/* Builder avatars row — layout never changes */}
                    <div className="flex flex-wrap items-center justify-center gap-12 pb-10">
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
                                    {/* Avatar — fixed size, ring indicates selection */}
                                    <div
                                        className={cn(
                                            'w-20 h-20 rounded-full bg-surface-tertiary mx-auto mb-4 flex items-center justify-center overflow-hidden transition-all duration-300',
                                            isSelected
                                                ? 'ring-[3px] ring-primary ring-offset-2 ring-offset-surface scale-110'
                                                : 'group-hover:scale-105',
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

                    {/* Detail panel — always visible, content crossfades */}
                    <motion.div
                        className="mt-10 bg-surface-tertiary rounded-apple-xl p-8 md:p-10 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: appleEase, delay: 0.3 }}
                    >
                        <AnimatePresence mode="wait">
                            {selectedMember && (
                                <motion.div
                                    key={selectedMember.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3, ease: appleEase }}
                                >
                                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 text-left">
                                        {/* Large avatar */}
                                        <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
                                            {selectedMember.id === 'hieu' && (
                                                <span className="absolute -top-4 left-6 z-10 w-10 drop-shadow -rotate-[22deg]">
                                                    <CrownIcon />
                                                </span>
                                            )}
                                            <div className="w-full h-full rounded-full bg-surface overflow-hidden flex items-center justify-center">
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
                                            <h4 className="text-title-sm font-semibold text-text mb-1">
                                                {selectedMember.name}
                                            </h4>
                                            <p className="text-body text-accent font-medium mb-4">
                                                {selectedMember.role}
                                            </p>
                                            <p className="text-body text-text-secondary leading-relaxed mb-5">
                                                {selectedMember.bio}
                                            </p>

                                            {/* Expertise tags */}
                                            <div className="flex flex-wrap justify-center md:justify-start gap-2">
                                                {selectedMember.expertise?.map((skill) => (
                                                    <span
                                                        key={skill}
                                                        className="px-3 py-1 text-caption font-medium text-accent bg-surface rounded-full border border-border"
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
