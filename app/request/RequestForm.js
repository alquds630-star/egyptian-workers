use client';
import { useState } from "react";

export default function RequestForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  async function submit(e) {
    e.preventDefault(); setLoading(true); setMessage("");
    const payload = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/requests", {method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(payload)});
      const data = await res.json(); if (!res.ok) throw new Error(data.error || "حدث خطأ");
      e.currentTarget.reset(); setMessage("تم استلام طلب العمالة بنجاح.");
    } catch(err){setMessage(err.message)} finally{setLoading(false)}
  }
  return <form className="form-card" onSubmit={submit}>
    <label>اسم الشركة<input name="company_name" required /></label>
    <label>اسم المسؤول<input name="contact_name" required /></label>
    <label>الدولة<input name="country" /></label>
    <label>رقم التواصل<input name="phone" inputMode="tel" required /></label>
    <label>الوظيفة المطلوبة<input name="job_title" required /></label>
    <label>عدد العمالة<input name="quantity" /></label>
    <label>التخصص والخبرة المطلوبة<textarea name="requirements" rows="4" /></label>
    <label>الراتب والمميزات<textarea name="benefits" rows="3" /></label>
    <label>ملاحظات<textarea name="notes" rows="3" /></label>
    <button className="btn primary" disabled={loading}>{loading ? "جاري الإرسال..." : "إرسال طلب العمالة"}</button>
    {message && <div className="notice">{message}</div>}
  </form>
}