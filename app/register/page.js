import Link from "next/link";
import RegisterForm from "./RegisterForm";

export default function RegisterPage({ searchParams }) {
  return (
    <main>
      <header className="sub-header">
        <div className="container nav">
          <Link href="/" className="brand">العمالة المصرية</Link>
          <Link className="phone" href="tel:01080699630">01080699630</Link>
        </div>
      </header>
      <section className="form-section container">
        <div className="form-intro">
          <span className="eyebrow">ابدأ الآن</span>
          <h1>تسجيل على وظيفة</h1>
          <p>اكتب بياناتك بدقة وسيتم مراجعة طلبك والتواصل معك عند الحاجة.</p>
        </div>
        <RegisterForm defaultJob={searchParams?.job || ""} />
      </section>
    </main>
  );
}