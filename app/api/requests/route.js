import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(request) {
  const body = await request.json();
  if (!body.company_name || !body.contact_name || !body.phone || !body.job_title)
    return NextResponse.json({error:"يرجى إكمال البيانات الأساسية"}, {status:400});
  const supabase = await createClient();
  const { error } = await supabase.from("labor_requests").insert({
    company_name: body.company_name, contact_name: body.contact_name, country: body.country || null,
    phone: body.phone, job_title: body.job_title, quantity: body.quantity || null,
    requirements: body.requirements || null, benefits: body.benefits || null, notes: body.notes || null
  });
  if (error) return NextResponse.json({error:"تعذر حفظ الطلب"}, {status:500});
  return NextResponse.json({ok:true});
}