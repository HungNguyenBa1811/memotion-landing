import React from 'react';

export function TrustIndicators() {
  const logos = [
    "Viện YHCT Quân Đội",
    "Học viện PTIT",
    "Đại học Kinh tế Quốc dân (NEU)",
    "Chuẩn y khoa ISO"
  ];

  return (
    <section className="bg-white/50 border-y border-primary/10 py-8">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-8 opacity-70">
        <p className="text-sm font-bold text-primary uppercase tracking-wider text-center md:text-left">
          Được bảo chứng chuyên môn bởi các chuyên gia y tế và công nghệ hàng đầu
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {logos.map((logo, i) => (
            <div key={i} className="text-text font-bold text-sm tracking-tight grayscale hover:grayscale-0 transition-all">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
