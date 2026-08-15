use client';
import { useState } from "react";
import { createBrowserClient } from "@supabase/ssr";

const empty={title:"",country:"",specialty:"",quantity:"",salary:"",description:"",is_active:true};

export default function AdminPanel({jobs:initial,email}){
  const [jobs,setJobs]=useState(initial); const [form,setForm]=useState(empty); const [editing,setEditing]=useState(null); const [message,setMessage]=useState("");
  const supabase=createBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL,process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
  function change(e){setForm({...form,[e.target.name]:e.target.value})}
  async function save(e){
    e.preventDefault();setMessage("");
    const data={...form,quantity:form.quantity||null};
    let result;
    if(editing){result=await supabase.from("jobs").update(data).eq("id",editing).select().single()}
    else{result=await supabase.from("jobs").insert(data).select().single()}
    if(result.error){setMessage("تعذر حفظ الإعلان");return}
    if(editing)setJobs(jobs.map(x=>x.id===editing?result.data:x)); else setJobs([result.data,...jobs]);
    setForm(empty);setEditing(null);setMessage("تم حفظ الإعلان");
  }
  function edit(job){setEditing(job.id);setForm({title:job.title||"",country:job.country||"",specialty:job.specialty||"",quantity:job.quantity||"",salary:job.salary||"",description:job.description||"",is_active:job.is_active})}
  async function remove(id){if(!confirm("هل تريد حذف الإعلان؟"))return; const {error}=await supabase.from("jobs").delete().eq("id",id); if(!error)setJobs(jobs.filter(x=>x.id!==id))}
  async function logout(){await supabase.auth.signOut();location.href="/admin/login"}
  return <main>
    <header className="sub-header"><div className="container nav"><span className="brand">لوحة الإدارة</span><div className="admin-actions"><span>{email}</span><button onClick={logout} className="btn small">خروج</button></div></div></header>
    <section className="section container">
      <div className="admin-grid">
        <form className="form-card" onSubmit={save}>
          <h2>{editing?"تعديل الإعلان":"إضافة إعلان جديد"}</h2>
          <label>عنوان الوظيفة<input name="title" value={form.title} onChange={change} required /></label>
          <label>الدولة<input name="country" value={form.country} onChange={change} /></label>
          <label>التخصص<input name="specialty" value={form.specialty} onChange={change} /></label>
          <label>العدد<input name="quantity" value={form.quantity} onChange={change} /></label>
          <label>الراتب<input name="salary" value={form.salary} onChange={change} /></label>
          <label>التفاصيل<textarea name="description" rows="5" value={form.description} onChange={change}/></label>
          <label className="check"><input type="checkbox" checked={form.is_active} onChange={e=>setForm({...form,is_active:e.target.checked})}/> إعلان ظاهر للزوار</label>
          <div className="actions"><button className="btn primary">{editing?"حفظ التعديل":"إضافة الإعلان"}</button>{editing&&<button type="button" className="btn" onClick={()=>{setEditing(null);setForm(empty)}}>إلغاء</button>}</div>
          {message&&<div className="notice">{message}</div>}
        </form>
        <div>
          <h2>الإعلانات الحالية</h2>
          <div className="admin-list">{jobs.map(j=><div className="admin-job" key={j.id}><div><strong>{j.title}</strong><small>{j.country||"—"} · {j.is_active?"ظاهر":"مخفي"}</small></div><div className="actions"><button className="btn small" onClick={()=>edit(j)}>تعديل</button><button className="btn danger small" onClick={()=>remove(j.id)}>حذف</button></div></div>)}</div>
        </div>
      </div>
    </section>
  </main>
}