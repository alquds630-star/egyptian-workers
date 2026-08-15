import "./globals.css";

export const metadata = {
  title: "العمالة المصرية | فرص عمل وطلبات عمالة",
  description: "منصة بسيطة لعرض الوظائف وتسجيل الباحثين عن عمل وطلب العمالة المصرية.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}