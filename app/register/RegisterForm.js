use client';
import { useState } from "react";

export default function RegisterForm({ defaultJob }) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function submit(e) {
    e.preventDefault();
    setLoading(true); setMessage("");
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      const res = await fetch("/api/applications", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "حدث خطأ");
      e.currentTarget.reset();
      setMessage("تم إرسال طلبك بنجاح.");
    } catch (err) { setMessage(err.message); }
    finally { setLoading(false); }
  }

  return <form className="form-card" onSubmit={submit}>
    <label>الاسم الكامل<input name="name" required /></label>
    <label>رقم الهاتف<input name="phone" inputMode="tel" required /></label>
    <label>الوظيفة المطلوبة<input name="job" defaultValue={defaultJob} required /></label>
    <label>المحافظة<input name="governorate" /></label>
    <label>المؤهل<input name="qualification" /></label>
    <label>سنوات الخبرة<input name="experience" /></label>
    <label>رابط السيرة الذاتية أو تفاصيلها<input name="cv_url" placeholder="يمكنك وضع رابط Google Drive أو Dropbox" /></label>
    <label>ملاحظات<textarea name="notes" rows="4" /></label>
    <button className="btn primary" disabled={loading}>{loading ? "جاري الإرسال..." : "إرسال الطلب"}</button>
    {message && <div className="notice">{message}</div>}
  </form>
}