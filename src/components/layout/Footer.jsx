import React from 'react';
import { Github, Twitter, Linkedin, Heart } from 'lucide-react';
import { cn } from '../../lib/utils';

export function Footer() {
  return (
    <footer className="bg-primary text-white py-12 md:py-16">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <span className="text-2xl font-bold tracking-tight">Memotion</span>
          <p className="text-white/80 text-sm max-w-xs leading-relaxed">
            Hỗ trợ phục hồi chức năng và chăm sóc người cao tuổi thông qua AI đột phá và sự thấu hiểu tận tâm.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-accent transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-accent transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-accent transition-colors"><Github size={20} /></a>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-accent">Sản phẩm</h3>
          <ul className="flex flex-col gap-2 text-sm text-white/80">
            <li><a href="#features" className="hover:text-white transition-colors">Cá nhân hóa AI</a></li>
            <li><a href="#features" className="hover:text-white transition-colors">Phân tích dáng đi</a></li>
            <li><a href="#app" className="hover:text-white transition-colors">Ứng dụng di động</a></li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-accent">Công ty</h3>
          <ul className="flex flex-col gap-2 text-sm text-white/80">
            <li><a href="#mission" className="hover:text-white transition-colors">Sứ mệnh</a></li>
            <li><a href="#team" className="hover:text-white transition-colors">Đội ngũ chuyên gia</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Liên hệ</a></li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-accent">Pháp lý</h3>
          <ul className="flex flex-col gap-2 text-sm text-white/80">
            <li><a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Điều khoản dịch vụ</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Nghiên cứu lâm sàng</a></li>
          </ul>
        </div>
      </div>

      <div className="container mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-white/60">
        <p>© 2026 Memotion. Bản quyền thuộc về đội ngũ phát triển Memotion.</p>
        <p className="flex items-center gap-1 mt-4 md:mt-0">
          Phát triển với <Heart size={12} className="text-accent fill-accent" /> dành cho người cao tuổi Việt Nam.
        </p>
      </div>
    </footer>
  );
}
