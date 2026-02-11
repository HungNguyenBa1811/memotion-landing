import React from 'react';
import { Button } from '../ui/Button';
import { ChaosButton } from '../ui/ChaosButton';
import { motion } from 'framer-motion';
import productScreenshot from '../../assets/images/product_screenshot.png';

const appleEase = [0.28, 0.11, 0.32, 1];

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center bg-surface pt-11">
            <div className="w-full max-w-apple mx-auto px-6 lg:px-8 pt-section pb-16 text-center">
                {/* Overline */}
                <motion.p
                    className="text-body text-accent font-medium mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: appleEase }}
                >
                    Phục hồi chức năng AI cho người cao tuổi
                </motion.p>

                {/* Main headline */}
                <motion.h1
                    className="text-display-sm sm:text-display md:text-display-lg lg:text-display-xl text-text max-w-5xl mx-auto mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: appleEase, delay: 0.1 }}
                >
                    Đồng hành phục hồi.{' '}
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        Gắn kết yêu thương.
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    className="text-body-xl text-text-secondary max-w-apple-narrow mx-auto mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: appleEase, delay: 0.2 }}
                >
                    Giải pháp phục hồi chức năng chuẩn y khoa tại nhà. Xóa bỏ nỗi lo của "Thế hệ Sandwich" bằng công
                    nghệ nhận diện 3D và sự thấu hiểu sâu sắc.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: appleEase, delay: 0.3 }}
                >
                    <ChaosButton>Bắt đầu hành trình phục hồi</ChaosButton>
                    <Button size="lg" variant="outline">
                        Tìm hiểu thêm
                    </Button>
                </motion.div>
            </div>

            {/* Large product visual */}
            <motion.div
                className="w-full max-w-apple-wide mx-auto px-6 lg:px-8 pb-section"
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.0, ease: appleEase, delay: 0.5 }}
            >
                <div className="relative aspect-[16/9] md:aspect-[2/1] rounded-apple-xl overflow-hidden bg-surface-tertiary shadow-2xl group">
                    <div className="absolute inset-0 flex items-center justify-center text-text-tertiary text-body">
                        <img
                            src={productScreenshot}
                            alt="Giao diện ứng dụng Memotion hiển thị tiến trình phục hồi chức năng"
                            className="transition-transform duration-500 ease-[cubic-bezier(0.28,0.11,0.32,1)] group-hover:scale-[1.03]"
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
