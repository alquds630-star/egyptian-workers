import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import AdminPanel from "./AdminPanel";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");
  const { data: profile } = await supabase.from("admins").select("id").eq("id", user.id).maybeSingle();
  if (!profile) redirect("/");
  const { data: jobs } = await supabase.from("jobs").select("*").order("created_at", {ascending:false});
  return <AdminPanel jobs={jobs || []} email={user.email} />;
}