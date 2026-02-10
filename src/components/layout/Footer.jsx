import React from 'react';

const linkGroups = [
  {
    title: "Sản phẩm",
    links: [
      { label: "Cá nhân hóa AI", href: "#features" },
      { label: "Phân tích dáng đi", href: "#features" },
      { label: "Ứng dụng di động", href: "#" },
    ],
  },
  {
    title: "Công ty",
    links: [
      { label: "Sứ mệnh", href: "#mission" },
      { label: "Đội ngũ chuyên gia", href: "#team" },
      { label: "Liên hệ", href: "#" },
    ],
  },
  {
    title: "Pháp lý",
    links: [
      { label: "Chính sách bảo mật", href: "#" },
      { label: "Điều khoản dịch vụ", href: "#" },
      { label: "Nghiên cứu lâm sàng", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-surface-tertiary">
      {/* Top divider */}
      <div className="mx-auto max-w-apple-wide px-6 lg:px-8">
        <div className="h-px bg-border" />
      </div>

      {/* Link columns */}
      <div className="mx-auto max-w-apple-wide px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand column */}
          <div>
            <h4 className="text-caption font-semibold text-text mb-3">Memotion</h4>
            <p className="text-caption text-text-tertiary leading-relaxed">
              Hỗ trợ phục hồi chức năng và chăm sóc người cao tuổi thông qua AI.
            </p>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="text-caption font-semibold text-text mb-3">{group.title}</h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-caption text-text-tertiary hover:text-text transition-colors duration-200"
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
      <div className="mx-auto max-w-apple-wide px-6 lg:px-8">
        <div className="h-px bg-border-light" />
        <div className="py-4 flex flex-col md:flex-row items-center justify-between">
          <p className="text-caption text-text-tertiary">
            &copy; 2026 Memotion. Bản quyền thuộc về đội ngũ phát triển Memotion.
          </p>
        </div>
      </div>
    </footer>
  );
}
