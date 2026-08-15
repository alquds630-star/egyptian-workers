'use client';
import { useState } from "react";
import { createBrowserClient } from "@supabase/ssr";
import Link from "next/link";

export default function AdminLogin(){
  const [email,setEmail]=useState(""); const [password,setPassword]=useState(""); const [error,setError]=useState(""); const [loading,setLoading]=useState(false);
  const supabase = createBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
  async function submit(e){e.preventDefault();setLoading(true);setError(""); const {error}=await supabase.auth.signInWithPassword({email,password}); if(error)setError("بيانات الدخول غير صحيحة"); else location.href="/admin"; setLoading(false)}
  return <main className="login"><form className="form-card" onSubmit={submit}>
    <Link href="/" className="brand">العمالة المصرية</Link><h1>دخول الإدارة</h1>
    <label>البريد الإلكتروني<input type="email" value={email} onChange={e=>setEmail(e.target.value)} required /></label>
    <label>كلمة المرور<input type="password" value={password} onChange={e=>setPassword(e.target.value)} required /></label>
    <button className="btn primary" disabled={loading}>{loading?"جاري الدخول...":"دخول"}</button>
    {error&&<div className="error">{error}</div>}
  </form></main>
}
