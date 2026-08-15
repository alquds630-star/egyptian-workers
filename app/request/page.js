import Link from "next/link";
import RequestForm from "./RequestForm";

export default function RequestPage() {
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
          <span className="eyebrow">للشركات وأصحاب الأعمال</span>
          <h1>اطلب عمالة مصرية</h1>
          <p>أرسل احتياجك وسنتواصل معك لاستكمال التفاصيل.</p>
        </div>
        <RequestForm />
      </section>
    </main>
  );
}