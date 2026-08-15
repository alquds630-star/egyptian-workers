import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function JobsPage() {
  const supabase = await createClient();
  const { data: jobs } = await supabase
    .from("jobs")
    .select("*")
    .eq("is_active", true)
    .order("created_at", { ascending: false });

  return (
    <main>
      <header className="sub-header">
        <div className="container nav">
          <Link href="/" className="brand">العمالة المصرية</Link>
          <Link className="phone" href="tel:01080699630">01080699630</Link>
        </div>
      </header>

      <section className="section container">
        <div className="section-head">
          <span className="eyebrow">الفرص المتاحة</span>
          <h1>عرض الوظائف</h1>
          <p>اختر الوظيفة المناسبة لك ثم اضغط على تسجيل.</p>
        </div>

        {!jobs?.length ? (
          <div className="empty">لا توجد وظائف منشورة حاليًا. تابعنا للحصول على الفرص الجديدة.</div>
        ) : (
          <div className="jobs-grid">
            {jobs.map((job) => (
              <article className="job" key={job.id}>
                <div className="job-top">
                  <span className="tag">{job.country || "خارج مصر"}</span>
                  <span className="date">{new Date(job.created_at).toLocaleDateString("ar-EG")}</span>
                </div>
                <h2>{job.title}</h2>
                <div className="job-meta">
                  {job.specialty && <span>التخصص: {job.specialty}</span>}
                  {job.quantity && <span>العدد: {job.quantity}</span>}
                  {job.salary && <span>الراتب: {job.salary}</span>}
                </div>
                {job.description && <p>{job.description}</p>}
                <Link className="btn primary full" href={`/register?job=${encodeURIComponent(job.title)}`}>
                  تسجيل على الوظيفة
                </Link>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}