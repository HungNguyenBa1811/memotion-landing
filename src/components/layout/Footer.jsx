import React from 'react';
import { ShieldCheck } from 'lucide-react';

const linkGroups = [
  {
    title: "Sản phẩm",
    links: [
      { label: "Trợ lý ảo AI 4 bước", href: "#features" },
      { label: "Phân tích dáng đi 3D", href: "#features" },
      { label: "Lộ trình cá nhân hóa", href: "#features" },
      { label: "Kết nối gia đình 24/7", href: "#features" },
    ],
  },
  {
    title: "Về Memotion",
    links: [
      { label: "Sứ mệnh & Tầm nhìn", href: "#mission" },
      { label: "Đội ngũ chuyên gia", href: "#team" },
      { label: "Câu chuyện khách hàng", href: "#testimonials" },
    ],
  },
  {
    title: "Pháp lý & Chuẩn y tế",
    links: [
      { label: "Chính sách bảo mật y tế", href: "#" },
      { label: "Điều khoản dịch vụ", href: "#" },
      { label: "Cam kết bảo mật dữ liệu", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-surface-secondary border-t border-border/40">
      <div className="mx-auto max-w-apple-wide px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <img src="/logo.png" alt="Memotion logo" className="w-8 h-8 rounded-full object-cover" />
              <span className="text-body-lg font-bold text-text tracking-tight">Memotion</span>
            </div>
            <p className="text-body-sm text-text-secondary max-w-sm leading-relaxed">
              Giải pháp phục hồi chức năng thông minh tại nhà cho người cao tuổi, kết nối yêu thương và xóa bỏ nỗi lo cho Thế hệ Sandwich.
            </p>
            <div className="flex items-center gap-2 text-caption text-primary font-medium pt-1">
              <ShieldCheck size={16} />
              <span>Hợp tác chuyên môn cùng Viện YHCT Quân Đội & PTIT</span>
            </div>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="text-[12px] font-bold uppercase tracking-wider text-text mb-4">{group.title}</h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-body-sm text-text-secondary hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/30 bg-surface/50">
        <div className="mx-auto max-w-apple-wide px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-caption text-text-tertiary">
            &copy; 2026 Memotion. Bản quyền thuộc về đội ngũ phát triển Memotion.
          </p>
          <p className="text-caption text-text-tertiary">
            Designed with Apple-grade craft & Medical precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
