import React from 'react';

const partners = [
  "Viện YHCT Quân Đội",
  "Học viện PTIT",
  "Đại học Kinh tế Quốc dân",
  "Chuẩn y khoa ISO",
];

export function TrustIndicators() {
  return (
    <section className="py-8 border-y border-border-light bg-surface">
      <div className="mx-auto max-w-apple-wide px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {partners.map((name, i) => (
            <span
              key={i}
              className="text-caption text-text-tertiary font-medium tracking-wide uppercase whitespace-nowrap"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
