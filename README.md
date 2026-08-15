# موقع العمالة المصرية

## التشغيل على Vercel

1. أنشئ مشروع Supabase.
2. افتح SQL Editor وشغّل محتوى `supabase.sql`.
3. من Authentication > Users أنشئ حساب المدير بالبريد وكلمة المرور.
4. انسخ UUID الخاص بالمستخدم وضعه في آخر أمر `insert into public.admins`.
5. ارفع المشروع إلى GitHub ثم Import إلى Vercel.
6. أضف متغيري البيئة:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
7. Deploy.

## لوحة الإدارة

الدخول من:
`/admin/login`

المدير فقط، إذا كان UUID الخاص به موجودًا في جدول `admins`، يستطيع إضافة وتعديل وحذف وإخفاء إعلانات الوظائف.

الموقع لا يحتوي على صور، والرقم الوحيد الظاهر هو 01080699630.
