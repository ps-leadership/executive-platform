export default function FrameworkLibrary() {
  const frameworks = [
    {
      title: "Global TAM Operating Model",
      desc: "Blueprint for building scalable Technical Account Management organizations."
    },
    {
      title: "Customer Health Intelligence",
      desc: "Framework for adoption, customer health and renewal readiness."
    },
    {
      title: "Leadership Playbooks",
      desc: "Practical lessons on building teams, leadership and organizational transformation."
    }
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h2 className="text-3xl font-bold">Framework Library</h2>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {frameworks.map((item) => (
          <div key={item.title} className="rounded-2xl border p-6">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="mt-4 text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}