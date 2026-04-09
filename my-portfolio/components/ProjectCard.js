// components/ProjectCard.js
export default function ProjectCard({ title, desc, tech, link }) {
  return (
    <div className="border rounded-xl p-6 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-gray-400">{title}</h3>
      <p className="text-gray-500 mt-2">{desc}</p>
      <p className="text-sm mt-2 text-gray-500">{tech}</p>

      <a 
        href={link} 
        className="inline-block mt-4 text-white"
        target="_blank"
      >
        View Project →
      </a>
    </div>
  );
}