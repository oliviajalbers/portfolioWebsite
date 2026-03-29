function ProjectCard({ title, desc, tech, link }) {
  return (
    <div className="border rounded-xl p-6 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 mt-2">{desc}</p>
      <p className="text-sm mt-2 text-gray-500">{tech}</p>
      <a href={link} target="_blank" className="inline-block mt-4 text-blue-600">
        View Project →
      </a>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="mt-10">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <ProjectCard
          title="Automation Testing Tool"
          desc="Built a web automation framework to streamline testing workflows."
          tech="JavaScript, Selenium, React"
          link="#"
        />
        <ProjectCard
          title="Cloud Monitoring Dashboard"
          desc="Dashboard for tracking cloud service health and performance."
          tech="Next.js, Node.js"
          link="#"
        />
      </div>
    </section>
  );
}