import React, { useRef } from 'react';
import { Button, ChaosButton, KineticText, AnimatedCounter, FloatingCrossGrid, FloatingJointNodes, FloatingWaveLine } from '../ui';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Activity, Volume2, ShieldCheck } from 'lucide-react';
import productScreenshot from '../../assets/images/product_screenshot.png';

const appleEase = [0.16, 1, 0.3, 1];

export function Hero() {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start'],
    });

    const visualScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
    const visualY = useTransform(scrollYProgress, [0, 1], [0, 40]);

    return (
        <section ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center bg-surface pt-16 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-accent/15 via-primary/5 to-transparent blur-3xl pointer-events-none -z-10" />

            {/* Floating ambient vector graphics */}
            <FloatingCrossGrid count={3} />
            <FloatingJointNodes className="top-24 left-4 hidden lg:block" />
            <FloatingWaveLine className="bottom-16 right-4 hidden lg:block opacity-50" />

            <div className="w-full max-w-apple mx-auto px-6 lg:px-8 pt-12 pb-14 text-center relative z-10">
                <motion.p
                    className="text-caption font-semibold text-accent uppercase tracking-widest mb-4"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: appleEase }}
                >
                    Phục hồi chức năng AI cho người cao tuổi
                </motion.p>

                <h1 className="text-title sm:text-headline md:text-display lg:text-display-xl text-text max-w-5xl mx-auto mb-6 tracking-tight leading-[1.1] text-balance">
                    <span className="block">
                        <KineticText text="Đồng hành phục hồi." delay={0.1} duration={1.1} />
                    </span>
                    <span className="text-primary block mt-1 sm:mt-2">
                        <KineticText text="Gắn kết yêu thương." delay={0.35} duration={1.1} />
                    </span>
                </h1>

                <motion.p
                    className="text-body-lg sm:text-body-xl text-text-secondary max-w-apple-narrow mx-auto mb-10 leading-relaxed"
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.0, ease: appleEase, delay: 0.5 }}
                >
                    Giải pháp trị liệu phục hồi chức năng thông minh tại nhà. Xóa bỏ nỗi lo của &ldquo;Thế hệ Sandwich&rdquo; bằng
                    công nghệ nhận diện 3D thời gian thực và sự thấu hiểu sâu sắc.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.0, ease: appleEase, delay: 0.65 }}
                >
                    <ChaosButton>Bắt đầu hành trình phục hồi</ChaosButton>
                    <Button size="lg" variant="outline">
                        Tìm hiểu giải pháp
                    </Button>
                </motion.div>
            </div>

            <motion.div
                className="w-full max-w-apple-wide mx-auto px-6 lg:px-8 pb-section relative"
                style={{ scale: visualScale, y: visualY }}
                initial={{ opacity: 0, y: 50, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.3, ease: appleEase, delay: 0.6 }}
            >
                <div className="relative rounded-apple-xl p-2 bg-gradient-to-b from-white/90 via-white/50 to-border/30 shadow-2xl backdrop-blur-xl border border-white/60">
                    <div className="relative aspect-[16/9] md:aspect-[2/1] rounded-[20px] overflow-hidden bg-surface-tertiary group">
                        <img
                            src={productScreenshot}
                            alt="Giao diện ứng dụng Memotion hiển thị tiến trình phục hồi chức năng"
                            className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
                        />

                        {/* Floating Chip 1: AI Posture Angle with spring floating loop */}
                        <motion.div
                            className="hidden sm:flex items-center gap-3 absolute top-6 left-6 glass-card px-4 py-3 rounded-apple shadow-lg"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.0, delay: 0.9, ease: appleEase }}
                        >
                            <motion.div
                                className="flex items-center gap-3"
                                animate={{ y: [0, -6, 0] }}
                                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <Activity size={20} />
                                </div>
                                <div className="text-left">
                                    <p className="text-[11px] uppercase tracking-wider text-text-tertiary font-semibold">Góc gập khớp gối</p>
                                    <p className="text-body font-bold text-text">
                                        <AnimatedCounter value={105} duration={2.2} suffix="°" />
                                        <span className="text-[12px] font-medium text-primary ml-1.5">(Chuẩn y khoa)</span>
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Floating Chip 2: Voice Audio Feedback with offset floating loop */}
                        <motion.div
                            className="hidden sm:flex items-center gap-3 absolute bottom-6 right-6 glass-card px-4 py-3 rounded-apple shadow-lg max-w-xs"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.0, delay: 1.05, ease: appleEase }}
                        >
                            <motion.div
                                className="flex items-center gap-3 min-w-0"
                                animate={{ y: [0, 6, 0] }}
                                transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                            >
                                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                                    <Volume2 size={20} />
                                </div>
                                <div className="text-left min-w-0">
                                    <p className="text-[11px] uppercase tracking-wider text-accent font-semibold">
                                        AI Hướng dẫn giọng nói
                                    </p>
                                    <p className="text-caption font-medium text-text truncate">&ldquo;Bác nâng nhẹ gối để đạt góc tối ưu&rdquo;</p>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Floating Chip 3: Clinical Adherence with slow breathing loop */}
                        <motion.div
                            className="hidden lg:flex items-center gap-2 absolute top-6 right-6 glass-card px-3.5 py-2 rounded-full shadow-md"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.0, delay: 1.15, ease: appleEase }}
                        >
                            <motion.div
                                className="flex items-center gap-2"
                                animate={{ y: [0, -4, 0] }}
                                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
                            >
                                <ShieldCheck size={16} className="text-primary" />
                                <span className="text-caption font-semibold text-text">Kiểm định bởi Viện YHCT Quân Đội</span>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
