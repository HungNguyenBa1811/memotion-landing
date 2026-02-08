# Memotion Project Memory - Feb 8, 2026

## 1. Core Brand Identity
- **Project Name:** Memotion (formerly RehabConnect).
- **Product:** AI-powered elderly rehabilitation and care application.
- **Target Audience:** "Sandwich Generation" (30-55 years old) caring for elderly parents in Vietnam.
- **Tone & Voice:** Professional, empathetic, trustworthy, and hopeful.

## 2. Technical Stack
- **Frontend:** React 19 + Vite 7 (Vite Plugin React).
- **Styling:** Tailwind CSS v3.4.17 (Legacy Config) + PostCSS + Autoprefixer.
- **Animation:** Framer Motion (requires `IntersectionObserver` mock for testing).
- **Icons:** Lucide React.
- **Utilities:** `clsx`, `tailwind-merge` (via `src/lib/utils.js`).
- **Testing:** Vitest + React Testing Library + JSDOM.

## 3. Design System
- **Background:** `#FAFAF5` (Off-White).
- **Primary:** `#00695C` (Deep Teal - Trust/Medical).
- **Secondary:** `#4DB6AC` (Light Teal - Fresh/Approachable).
- **Accent:** `#D87659` (Terracotta/Coral - Action/Warmth).
- **Text:** `#1B4332` (Dark Green - Grounded).

## 4. Project Structure
- `src/components/ui/`: Atomic components (e.g., `Button.jsx`).
- `src/components/layout/`: Shell components (`Header.jsx`, `Footer.jsx`).
- `src/components/sections/`: Landing page sections (`Hero`, `Tech`, `Mission`, `Testimonials`, `Team`, `CTA`).
- `src/lib/`: Core utilities and library configurations.

## 5. Key Content & Modules
1. **Comprehensive Connection:** 24/7 link between caregivers and seniors.
2. **Personalized Roadmap:** Medical-grade recovery plans based on AI analysis.
3. **AI Virtual Assistant:** 4-step medical process (Identify -> Measure -> Sync -> Feedback).
4. **Gait Analysis:** Early fall detection using proprietary datasets.
5. **Smart Recommendation:** ML-driven nutrition and activity suggestions.

## 6. Project Team
- **Advisors:** ThS. Nguyễn Văn Hinh (Tech), TS. Nguyễn Thanh Nga (Strategy), Trung tá ThS.Bs Nguyễn Hữu Dương (Medical).
- **Builders:** Vũ Đình Hiếu (CTO), Nguyễn Hải Nam, Nguyễn Bá Hùng, Nguyễn Thị Thoa, Phùng Thị Hồng Vân.

## 7. Testing Configuration
- **Command:** `npm test` runs `vitest --pool=threads`.
- **Setup:** `src/setupTests.js` handles `jest-dom` and `IntersectionObserver` mocks.
