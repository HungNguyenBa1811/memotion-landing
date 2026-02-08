import React from 'react';
import { Brain, Video, Activity, Utensils, MessageSquare, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    id: 1,
    icon: <MessageSquare className="text-primary" size={32} />,
    headline: "Nền tảng kết nối toàn diện",
    subheadline: "Cầu nối yêu thương 24/7",
    description: "Xóa tan khoảng cách giữa người cao tuổi và con cái. Giám sát lộ trình tập luyện và liên lạc tức thì mọi lúc, mọi nơi.",
    visual: "Dashboard kết nối đa người dùng"
  },
  {
    id: 2,
    icon: <Brain className="text-primary" size={32} />,
    headline: "Lộ trình cá nhân hóa",
    subheadline: "Thiết kế riêng cho từng thể trạng",
    description: "Thuật toán AI phân tích bệnh án và mức độ vận động để xây dựng liệu trình phục hồi riêng biệt, đảm bảo an toàn tuyệt đối.",
    visual: "Lộ trình: Tuần 1 - Tuần 12"
  },
  {
    id: 3,
    icon: <Video className="text-accent" size={32} />,
    headline: "Trợ lý ảo AI thông minh",
    subheadline: "Quy trình 4 bước chuẩn y khoa",
    description: "Nhận diện tư thế -> Đo góc khớp cực đại -> Đồng bộ luồng tập -> Phản hồi giọng nói. Chỉnh sửa tư thế tức thì như có chuyên gia bên cạnh.",
    visual: "AR Skeletal Tracking (30fps)"
  },
  {
    id: 4,
    icon: <Activity className="text-primary" size={32} />,
    headline: "Cảnh báo ngã & Dáng đi",
    subheadline: "Phòng ngừa sự cố từ xa",
    description: "Sử dụng Dataset độc quyền để nhận diện sớm các bất thường trong dáng đi, gửi cảnh báo tức thì cho người chăm sóc trước khi rủi ro xảy ra.",
    visual: "Heatmap phân tích trọng tâm"
  },
  {
    id: 5,
    icon: <Utensils className="text-accent" size={32} />,
    headline: "Hệ sinh thái Recommendation",
    subheadline: "Dinh dưỡng & Hoạt động bổ trợ",
    description: "Machine Learning đề xuất thực đơn hồi sức hợp khẩu vị và các bài tập vận động nhẹ nhàng dựa trên sở thích cá nhân.",
    visual: "Thực đơn dinh dưỡng cá nhân"
  }
];

export function CoreTechnology() {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container">
        <div className="max-w-3xl mb-16">
          <h2 className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">Giải pháp công nghệ</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-text mb-6">
            Công nghệ chạm đến cảm xúc, bảo vệ từng bước chân
          </h3>
          <p className="text-text-muted text-lg">
            Memotion kết hợp sức mạnh của AI đa phương thức với sự thấu hiểu y khoa để mang lại giải pháp chăm sóc toàn diện nhất.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <motion.div 
              key={feature.id}
              className="group relative bg-white rounded-2xl p-8 border border-primary/5 hover:border-primary/20 hover:shadow-xl transition-all overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="flex flex-col h-full gap-6">
                <div className="h-14 w-14 rounded-xl bg-background flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-primary uppercase mb-2 tracking-wide">{feature.headline}</h4>
                  <h5 className="text-xl font-bold text-text mb-4">{feature.subheadline}</h5>
                  <p className="text-text-muted mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
                <div className="mt-auto h-40 w-full bg-background/50 rounded-xl border border-dashed border-primary/20 flex flex-col items-center justify-center p-4 text-center">
                   <div className="text-xs font-medium text-primary/40">{feature.visual}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}