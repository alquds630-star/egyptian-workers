import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(request) {
  const body = await request.json();
  if (!body.name || !body.phone || !body.job) return NextResponse.json({error:"الاسم ورقم الهاتف والوظيفة مطلوبة"}, {status:400});
  const supabase = await createClient();
  const { error } = await supabase.from("applications").insert({
    name: body.name, phone: body.phone, job: body.job, governorate: body.governorate || null,
    qualification: body.qualification || null, experience: body.experience || null,
    cv_url: body.cv_url || null, notes: body.notes || null
  });
  if (error) return NextResponse.json({error:"تعذر حفظ الطلب"}, {status:500});
  return NextResponse.json({ok:true});
}