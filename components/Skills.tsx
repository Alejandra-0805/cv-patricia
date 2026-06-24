const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "REST APIs",
  "Fetch API",
  "Git",
  "GitHub",
  "VS Code"
];

export default function Skills() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10">

      <h2 className="text-3xl font-bold mb-6">
        Tecnologías
      </h2>

      <div className="flex flex-wrap gap-4">

        {skills.map(skill => (
          <span
            key={skill}
            className="
            bg-slate-900
            hover:bg-slate-800
            border
            border-slate-700
            hover:border-violet-500
            transition-all
            duration-300
            px-5
            py-3
            rounded-xl
            "
          >
            {skill}
          </span>
        ))}

      </div>

    </section>
  );
}