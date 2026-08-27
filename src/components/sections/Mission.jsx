import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { KineticText, FloatingCrossGrid } from '../ui';
import missionImg from '../../assets/images/mission.jpg';

const appleEase = [0.16, 1, 0.3, 1];

export function Mission() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const bgScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.12]);
    const bgY = useTransform(scrollYProgress, [0, 1], ['-3%', '3%']);

    return (
        <section ref={containerRef} id="mission" className="py-section-lg bg-surface relative overflow-hidden">
            <FloatingCrossGrid count={3} />
            <div className="mx-auto max-w-apple px-6 lg:px-8 text-center">
                <motion.p
                    className="text-caption font-semibold text-accent uppercase tracking-widest mb-3"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: appleEase }}
                >
                    Sứ mệnh nhân văn
                </motion.p>

                <h2 className="text-title sm:text-headline md:text-display lg:text-display-lg text-text max-w-4xl mx-auto mb-8 tracking-tight leading-tight">
                    <KineticText text="Để tuổi già không bao giờ là rào cản của sự độc lập." delay={0.1} duration={1.1} />
                </h2>

                <motion.p
                    className="text-body-lg sm:text-body-xl text-text-secondary max-w-apple-narrow mx-auto mb-16 leading-relaxed"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.0, ease: appleEase, delay: 0.25 }}
                >
                    Chúng tôi tin rằng với sự hỗ trợ đúng đắn từ công nghệ, quá trình hồi phục luôn khả thi. Memotion
                    trao quyền cho các gia đình để kiểm soát sức khỏe tại nhà, lấp đầy khoảng trống y tế bằng lòng trắc
                    ẩn và sự chính xác khoa học.
                </motion.p>
            </div>

            <motion.div
                className="mx-auto max-w-apple-wide px-6 lg:px-8"
                initial={{ opacity: 0, scale: 0.96, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 1.2, ease: appleEase, delay: 0.3 }}
            >
                <div className="relative aspect-[21/9] min-h-[320px] rounded-apple-xl overflow-hidden bg-surface shadow-2xl border border-white/60 group">
                    <motion.div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${missionImg})`,
                            scale: bgScale,
                            y: bgY,
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D281E]/85 via-[#0D281E]/25 to-transparent" />
                    
                    <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
                        <div className="max-w-lg">
                            <span className="text-[11px] uppercase tracking-widest text-accent-light font-semibold block mb-1">
                                Trải nghiệm hồi phục
                            </span>
                            <p className="text-body-lg sm:text-title font-semibold text-white leading-snug">
                                Tái tạo niềm vui vận động và sự tự tin bước đi mỗi ngày.
                            </p>
                        </div>
                        <div className="glass-card-dark px-4 py-2 rounded-full inline-flex items-center self-start sm:self-auto">
                            <span className="text-[12px] font-medium text-white/90">Chuẩn phác đồ Viện YHCT Quân Đội</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
