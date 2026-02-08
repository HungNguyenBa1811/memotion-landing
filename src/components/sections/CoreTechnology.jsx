import React from 'react';
import { Brain, Video, Activity, Utensils, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const appleEase = [0.28, 0.11, 0.32, 1];

const features = [
  {
    id: 1,
    icon: <MessageSquare size={28} />,
    overline: "Kết nối",
    headline: "Nền tảng kết nối toàn diện",
    description: "Xóa tan khoảng cách giữa người cao tuổi và con cái. Giám sát lộ trình tập luyện và liên lạc tức thì mọi lúc, mọi nơi.",
    visual: "Dashboard kết nối đa người dùng",
  },
  {
    id: 2,
    icon: <Brain size={28} />,
    overline: "Cá nhân hóa",
    headline: "Lộ trình phục hồi riêng biệt cho từng thể trạng",
    description: "Thuật toán AI phân tích bệnh án và mức độ vận động để xây dựng liệu trình phục hồi riêng biệt, đảm bảo an toàn tuyệt đối.",
    visual: "Lộ trình: Tuần 1 - Tuần 12",
  },
  {
    id: 3,
    icon: <Video size={28} />,
    overline: "AI trợ lý",
    headline: "Trợ lý ảo AI với quy trình 4 bước chuẩn y khoa",
    description: "Nhận diện tư thế. Đo góc khớp cực đại. Đồng bộ luồng tập. Phản hồi giọng nói. Chỉnh sửa tư thế tức thì như có chuyên gia bên cạnh.",
    visual: "AR Skeletal Tracking (30fps)",
  },
  {
    id: 4,
    icon: <Activity size={28} />,
    overline: "Phòng ngừa",
    headline: "Cảnh báo ngã và phân tích dáng đi từ xa",
    description: "Sử dụng Dataset độc quyền để nhận diện sớm các bất thường trong dáng đi, gửi cảnh báo tức thì cho người chăm sóc trước khi rủi ro xảy ra.",
    visual: "Heatmap phân tích trọng tâm",
  },
  {
    id: 5,
    icon: <Utensils size={28} />,
    overline: "Hệ sinh thái",
    headline: "Dinh dưỡng và hoạt động bổ trợ thông minh",
    description: "Machine Learning đề xuất thực đơn hồi sức hợp khẩu vị và các bài tập vận động nhẹ nhàng dựa trên sở thích cá nhân.",
    visual: "Thực đơn dinh dưỡng cá nhân",
  },
];

export function CoreTechnology() {
  return (
    <section id="features" className="py-section-lg bg-surface">
      {/* Section header */}
      <div className="mx-auto max-w-apple px-6 lg:px-8 text-center mb-section">
        <motion.p
          className="text-body text-accent font-medium mb-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: appleEase }}
        >
          Giải pháp công nghệ
        </motion.p>
        <motion.h2
          className="text-headline-sm md:text-headline lg:text-display-sm text-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: appleEase, delay: 0.1 }}
        >
          Công nghệ chạm đến cảm xúc.
          <br className="hidden md:block" />
          Bảo vệ từng bước chân.
        </motion.h2>
      </div>

      {/* Alternating feature rows */}
      <div className="space-y-section">
        {features.map((feature, idx) => {
          const isReversed = idx % 2 !== 0;
          return (
            <div key={feature.id} className="mx-auto max-w-apple-wide px-6 lg:px-8">
              <motion.div
                className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: appleEase }}
              >
                {/* Text side */}
                <div className={isReversed ? 'lg:order-2' : 'lg:order-1'}>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-apple-sm bg-surface-tertiary text-accent mb-6">
                    {feature.icon}
                  </div>
                  <p className="text-body text-accent font-medium mb-2">
                    {feature.overline}
                  </p>
                  <h3 className="text-title-sm md:text-title text-text mb-4">
                    {feature.headline}
                  </h3>
                  <p className="text-body-lg text-text-secondary max-w-md">
                    {feature.description}
                  </p>
                </div>

                {/* Visual side */}
                <div className={isReversed ? 'lg:order-1' : 'lg:order-2'}>
                  <div className="aspect-[4/3] rounded-apple-xl bg-surface-tertiary flex items-center justify-center">
                    <span className="text-caption text-text-tertiary">
                      [{feature.visual}]
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
