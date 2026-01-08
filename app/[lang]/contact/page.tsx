export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-md px-4 py-16">
        <h1 className="text-2xl font-semibold tracking-tight">تواصل معي</h1>
        <p className="mt-2 text-sm text-slate-300">
          لو عندك مشروع SaaS، منصة حجز، أو لوحة تحكم تحتاج تنفيذ، ارسل تفاصيلك هنا.
        </p>

        <form className="mt-8 space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-200">
              الاسم
            </label>
            <input
              className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none focus:border-emerald-500"
              type="text"
              name="name"
              placeholder="الاسم الكامل"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-200">
              البريد الإلكتروني
            </label>
            <input
              className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none focus:border-emerald-500"
              type="email"
              name="email"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-200">
              تفاصيل المشروع
            </label>
            <textarea
              className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none focus:border-emerald-500"
              name="message"
              rows={5}
              placeholder="احكي باختصار نوع النظام، الميزانية التقريبية، والمدة."
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-emerald-400"
          >
            إرسال (قريباً)
          </button>
        </form>
      </div>
    </main>
  );
}
