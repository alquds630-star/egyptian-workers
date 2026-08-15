import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <nav className="nav container">
          <div className="brand">العمالة المصرية</div>
          <Link className="phone" href="tel:01080699630">01080699630</Link>
        </nav>

        <div className="hero-content container">
          <div className="hero-copy">
            <span className="eyebrow">حلول توظيف موثوقة</span>
            <h1>نوصلك بأفضل الكفاءات المصرية</h1>
            <p>
              منصة بسيطة لعرض فرص العمل، استقبال طلبات الشركات، وتسجيل الباحثين
              عن فرص مناسبة داخل وخارج مصر.
            </p>
            <div className="actions">
              <Link className="btn primary" href="/jobs">عرض الوظائف</Link>
              <Link className="btn secondary" href="/request">اطلب عمالة مصرية</Link>
              <Link className="btn ghost" href="/register">تسجيل على وظيفة</Link>
            </div>
          </div>
          <div className="hero-card">
            <div className="card-line"><span>فرص عمل</span><strong>متجددة</strong></div>
            <div className="card-line"><span>عمالة مصرية</span><strong>متخصصة</strong></div>
            <div className="card-line"><span>التواصل</span><strong>01080699630</strong></div>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-head">
          <span className="eyebrow">خدماتنا</span>
          <h2>كل ما تحتاجه في مكان واحد</h2>
        </div>
        <div className="grid-3">
          <Link href="/jobs" className="feature">
            <span className="icon">01</span>
            <h3>عرض الوظائف</h3>
            <p>تصفح الوظائف المتاحة وتعرّف على تفاصيل كل فرصة.</p>
          </Link>
          <Link href="/request" className="feature">
            <span className="icon">02</span>
            <h3>طلب عمالة مصرية</h3>
            <p>أرسل احتياج شركتك وسنتواصل معك لمناقشة التفاصيل.</p>
          </Link>
          <Link href="/register" className="feature">
            <span className="icon">03</span>
            <h3>تسجيل على وظيفة</h3>
            <p>سجّل بياناتك على الوظيفة المناسبة وأرسل سيرتك الذاتية.</p>
          </Link>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <span>العمالة المصرية</span>
          <Link href="tel:01080699630">01080699630</Link>
        </div>
      </footer>
    </main>
  );
}