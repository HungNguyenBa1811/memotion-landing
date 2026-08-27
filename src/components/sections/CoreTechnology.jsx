import React, { useState, useEffect } from 'react';
import { Brain, Video, Activity, Utensils, MessageSquare, CheckCircle2, Volume2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BentoCard, KineticText, FloatingCrossGrid, FloatingWaveLine, FloatingJointNodes } from '../ui';

import dashboardImg from '../../assets/images/dashboard.png';
import customizeImg from '../../assets/images/customize.png';
import aiBotImg from '../../assets/images/ai_bot.png';
import workoutImg from '../../assets/images/workout.png';
import nutritionImg from '../../assets/images/nutrition.png';

const appleEase = [0.16, 1, 0.3, 1];

const steps = [
    { num: '01', title: 'Nhận diện tư thế 3D', desc: 'Computer Vision thời gian thực' },
    { num: '02', title: 'Đo góc khớp cực đại', desc: 'Độ chính xác chuẩn y khoa' },
    { num: '03', title: 'Đồng bộ luồng tập', desc: 'Khớp với phác đồ bác sĩ' },
    { num: '04', title: 'Phản hồi giọng nói', desc: 'Chỉnh sửa tư thế tức thì' },
];

export function CoreTechnology() {
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % steps.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="features" className="py-section-lg bg-surface-secondary relative overflow-hidden">
            {/* Ambient Floating SVGs */}
            <FloatingCrossGrid count={3} />
            <FloatingWaveLine className="top-1/4 -left-16 hidden lg:block" />
            <FloatingWaveLine className="bottom-1/3 -right-16 hidden lg:block rotate-180" />
            <FloatingJointNodes className="top-16 right-6 hidden lg:block" />
            <div className="mx-auto max-w-apple px-6 lg:px-8 text-center mb-16">
                <motion.p
                    className="text-caption font-semibold text-accent uppercase tracking-widest mb-3"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: appleEase }}
                >
                    Giải pháp công nghệ
                </motion.p>
                <h2 className="text-title sm:text-headline md:text-display lg:text-display-lg text-text tracking-tight mb-5 leading-tight max-w-4xl mx-auto text-balance">
                    <span className="block">
                        <KineticText text="Công nghệ chạm cảm xúc." delay={0.1} duration={1.1} />
                    </span>
                    <span className="text-primary block mt-1 sm:mt-2">
                        <KineticText text="Bảo vệ từng bước chân." delay={0.35} duration={1.1} />
                    </span>
                </h2>
                <motion.p
                    className="text-body-lg text-text-secondary max-w-apple-narrow mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.0, ease: appleEase, delay: 0.3 }}
                >
                    5 module chuyên sâu kết hợp trí tuệ nhân tạo và phác đồ y khoa lâm sàng, trao quyền độc lập cho người cao tuổi và an tâm tuyệt đối cho gia đình.
                </motion.p>
            </div>

            <div className="mx-auto max-w-apple-wide px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                    
                    {/* BENTO CARD 1: Featured 4-Step AI Virtual Assistant (Span 12) */}
                    <BentoCard
                        className="lg:col-span-12 p-8 lg:p-12"
                        enableTilt={false}
                        delay={0.1}
                    >
                        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                            <div className="lg:col-span-6 space-y-6">
                                <p className="text-caption uppercase tracking-wider text-accent font-semibold flex items-center gap-2">
                                    <Video size={16} />
                                    <span>Trợ lý ảo AI thế hệ mới</span>
                                </p>
                                <h3 className="text-display-sm text-text font-bold tracking-tight">
                                    Quy trình 4 bước chuẩn y khoa cùng trợ lý ảo AI
                                </h3>
                                <p className="text-body text-text-secondary leading-relaxed">
                                    Không chỉ đơn thuần là xem video, Memotion sử dụng AI để đo góc khớp thời gian thực, đối chiếu với phác đồ lâm sàng và hướng dẫn giọng nói để người già tập luyện an toàn như có chuyên gia bên cạnh.
                                </p>

                                <div className="grid grid-cols-2 gap-3 pt-2">
                                    {steps.map((step, idx) => {
                                        const isActive = activeStep === idx;
                                        return (
                                            <div
                                                key={step.num}
                                                onClick={() => setActiveStep(idx)}
                                                className={`p-3.5 rounded-apple-sm transition-all duration-300 cursor-pointer border ${
                                                    isActive
                                                        ? 'bg-surface border-primary ring-2 ring-primary/20 shadow-sm'
                                                        : 'bg-surface/60 border-border/50 hover:bg-surface/90'
                                                }`}
                                            >
                                                <span className={`text-caption font-bold font-mono tracking-wider block mb-0.5 transition-colors ${
                                                    isActive ? 'text-primary' : 'text-accent'
                                                }`}>
                                                    {step.num}
                                                </span>
                                                <p className="text-body-sm font-semibold text-text">{step.title}</p>
                                                <p className="text-[12px] text-text-secondary">{step.desc}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="lg:col-span-6 relative">
                                <div className="relative rounded-apple-lg overflow-hidden bg-surface-tertiary shadow-lg border border-white/60">
                                    <img
                                        src={aiBotImg}
                                        alt="Trợ lý ảo AI hướng dẫn tập luyện"
                                        className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                                    />
                                    <div className="absolute bottom-4 left-4 right-4 glass px-4 py-3 rounded-apple-sm border border-white/70 shadow-md flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 animate-pulse">
                                            <Volume2 size={16} />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <p className="text-[11px] font-semibold text-primary uppercase tracking-wide">Phản hồi giọng nói tức thì</p>
                                            <p className="text-caption font-medium text-text truncate">&ldquo;Bác giữ thẳng lưng và nâng chân cao thêm 5 độ&rdquo;</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </BentoCard>

                    {/* BENTO CARD 2: Gait Analysis & Fall Detection (Span 6) */}
                    <BentoCard className="lg:col-span-6 p-8 flex flex-col justify-between" delay={0.2}>
                        <div className="mb-6">
                            <p className="text-caption uppercase tracking-wider text-primary font-semibold flex items-center gap-2 mb-3">
                                <Activity size={16} />
                                <span>Phòng ngừa rủi ro</span>
                            </p>
                            <h3 className="text-title text-text font-bold tracking-tight mb-3">
                                Cảnh báo ngã & Phân tích dáng đi 3D
                            </h3>
                            <p className="text-body text-text-secondary leading-relaxed">
                                Sử dụng Dataset MOCAP độc quyền để nhận diện sớm các bất thường trong sải bước và thăng bằng, tự động kích hoạt cảnh báo tới người chăm sóc trước khi rủi ro té ngã xảy ra.
                            </p>
                        </div>
                        <div className="relative aspect-[16/10] rounded-apple overflow-hidden bg-surface-tertiary shadow-inner border border-white/40">
                            <img
                                src={workoutImg}
                                alt="Phân tích dáng đi và cảnh báo ngã"
                                className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                            />
                            <div className="absolute top-3 left-3 glass px-3 py-1.5 rounded-full text-[11px] font-semibold text-primary">
                                Dataset 3D MOCAP độc quyền
                            </div>
                        </div>
                    </BentoCard>

                    {/* BENTO CARD 3: Comprehensive Connected Platform (Span 6) */}
                    <BentoCard className="lg:col-span-6 p-8 flex flex-col justify-between" delay={0.25}>
                        <div className="mb-6">
                            <p className="text-caption uppercase tracking-wider text-accent font-semibold flex items-center gap-2 mb-3">
                                <MessageSquare size={16} />
                                <span>Gắn kết gia đình</span>
                            </p>
                            <h3 className="text-title text-text font-bold tracking-tight mb-3">
                                Nền tảng kết nối toàn diện 24/7
                            </h3>
                            <p className="text-body text-text-secondary leading-relaxed">
                                Xóa tan khoảng cách địa lý giữa con cái và cha mẹ. Theo dõi chỉ số phục hồi trực tiếp, gửi lời động viên và nhận báo cáo tiến trình chi tiết qua ứng dụng di động.
                            </p>
                        </div>
                        <div className="relative aspect-[16/10] rounded-apple overflow-hidden bg-surface-tertiary shadow-inner border border-white/40">
                            <img
                                src={dashboardImg}
                                alt="Dashboard kết nối đa người dùng"
                                className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                            />
                            <div className="absolute bottom-3 right-3 glass px-3 py-1.5 rounded-full text-[11px] font-semibold text-text flex items-center gap-1.5">
                                <CheckCircle2 size={13} className="text-primary" />
                                Đồng bộ trực tiếp 24/7
                            </div>
                        </div>
                    </BentoCard>

                    {/* BENTO CARD 4: Personalized Recovery Roadmap (Span 6) */}
                    <BentoCard className="lg:col-span-6 p-8 flex flex-col justify-between" delay={0.3}>
                        <div className="mb-6">
                            <p className="text-caption uppercase tracking-wider text-primary font-semibold flex items-center gap-2 mb-3">
                                <Brain size={16} />
                                <span>Cá nhân hóa chuyên sâu</span>
                            </p>
                            <h3 className="text-title text-text font-bold tracking-tight mb-3">
                                Lộ trình phục hồi riêng biệt theo thể trạng
                            </h3>
                            <p className="text-body text-text-secondary leading-relaxed">
                                Thuật toán thông minh tự động đánh giá bệnh án, tiền sử chấn thương và biên độ vận động để thiết kế lộ trình trị liệu riêng biệt, đảm bảo an toàn tuyệt đối.
                            </p>
                        </div>
                        <div className="relative aspect-[16/10] rounded-apple overflow-hidden bg-surface-tertiary shadow-inner border border-white/40">
                            <img
                                src={customizeImg}
                                alt="Lộ trình phục hồi cá nhân"
                                className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                            />
                        </div>
                    </BentoCard>

                    {/* BENTO CARD 5: Smart Nutrition & Gentle Activity (Span 6) */}
                    <BentoCard className="lg:col-span-6 p-8 flex flex-col justify-between" delay={0.35}>
                        <div className="mb-6">
                            <p className="text-caption uppercase tracking-wider text-accent font-semibold flex items-center gap-2 mb-3">
                                <Utensils size={16} />
                                <span>Hệ sinh thái toàn diện</span>
                            </p>
                            <h3 className="text-title text-text font-bold tracking-tight mb-3">
                                Dinh dưỡng & Vận động bổ trợ thông minh
                            </h3>
                            <p className="text-body text-text-secondary leading-relaxed">
                                Machine Learning đề xuất thực đơn dinh dưỡng hồi sức hợp khẩu vị người cao tuổi và các bài tập dưỡng sinh nhẹ nhàng giúp duy trì tinh thần tích cực.
                            </p>
                        </div>
                        <div className="relative aspect-[16/10] rounded-apple overflow-hidden bg-surface-tertiary shadow-inner border border-white/40">
                            <img
                                src={nutritionImg}
                                alt="Thực đơn dinh dưỡng cá nhân"
                                className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                            />
                        </div>
                    </BentoCard>

                </div>
            </div>
        </section>
    );
}
