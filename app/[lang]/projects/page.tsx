const projects = [
  {
    title: "B2B Marketing & Booking Platform",
    description:
      "منصة B2B مبنية بـ Next.js + Supabase لإدارة ليدز، حجوزات، ولوحة تحكم للإدارة.",
    tech: ["Next.js", "Supabase", "Tailwind CSS"],
    link: "https://github.com/your-username/your-project", // عدّلها لاحقاً
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-2xl font-semibold tracking-tight">المشاريع</h1>
        <p className="mt-2 text-sm text-slate-300">
          هذه عينة من الأعمال التي توضح طريقة تفكيري في بناء أنظمة SaaS وحلول مخصصة.
        </p>

        <div className="mt-8 grid gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-lg border border-slate-800 bg-slate-900/40 p-5"
            >
              <h2 className="text-lg font-semibold">{project.title}</h2>
              <p className="mt-2 text-sm text-slate-300">
                {project.description}
              </p>
              <p className="mt-3 text-xs text-slate-400">
                التقنيات: {project.tech.join(" · ")}
              </p>
              {project.link && (
                <a
                  href={project.link}
                  className="mt-4 inline-block text-xs font-medium text-emerald-400 hover:text-emerald-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
