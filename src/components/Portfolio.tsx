import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "B-Store Website",
    category: "Web Development",
    description:
      "Built a responsive e-commerce website using modern web technologies. Implemented user authentication, product management, and cart functionality.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    features: [
      "User authentication",
      "Product catalog",
      "Shopping cart",
      "Payment integration",
    ],
    gradient: "from-yellow-400/20 to-yellow-600/20",
    impact: "Created a fully functional online store with seamless user experience",
    github: "https://github.com/jatinhasiwal",
    live: "https://jbookstore.netlify.app/",
  },
  {
    title: "Podcast Application",
    category: "web Development",
    description:
      "Developed a full-stack web application that allows users to search for, play, and pause their favorite podcasts on demand and create podcasts. Implemented user authentication using Jwt Auth, made responsive user interface with React JS that provides users with a seamless experience across all devices. Practiced agile methodologies to optimize team efficiency and communication.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    features: [
      "Users to search for, play, and pause podcasts",
      "User authentication and authorization",
      "Responsive UI across devices",
      "Agile development practices",
    ],
    gradient: "from-yellow-500/20 to-yellow-700/20",
    impact: "Successfully identified actionable insights from complex datasets",
    github: "https://github.com/jatinhasiwal",
    live: "https://podstream.netlify.app/",
  },
  
];

export default function Portfolio() {
  return (
    <section
      id="projects"
      className="relative bg-black py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            My Work
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Projects & Academic
            <span className="block text-yellow-400">Achievements</span>
          </h2>

          <p className="text-xl text-gray-400">
            Hands-on projects demonstrating my expertise in data analysis and
            full-stack development.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.live || project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl overflow-hidden hover:border-yellow-400/50 transition-all duration-300 cursor-pointer"
            >
              {/* Hover Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>

              {/* Content */}
              <div className="relative p-8 lg:p-12">
                <div className="space-y-6">
                  {/* Category */}
                  <span className="bg-yellow-400/10 text-yellow-400 px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-3xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech + Features */}
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-white font-semibold mb-3">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-yellow-400/10 border border-yellow-400/30 text-yellow-100 px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="text-white font-semibold mb-3">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-gray-300 text-sm"
                          >
                            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="pt-4 border-t border-gray-800 flex items-center justify-between">
                    {/* Impact */}
                    <div className="text-yellow-400 font-semibold">
                      {project.impact}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      {/* GitHub Link */}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="w-10 h-10 bg-yellow-400/10 border border-yellow-400/30 rounded-lg flex items-center justify-center text-yellow-400 hover:bg-yellow-400/20 transition-all"
                        >
                          <Github size={18} />
                        </a>
                      )}

                      {/* Live Link */}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="w-10 h-10 bg-yellow-400/10 border border-yellow-400/30 rounded-lg flex items-center justify-center text-yellow-400 hover:bg-yellow-400/20 transition-all"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-16 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 border border-yellow-400/30 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-white mb-3">
            Continuous Learning
          </h3>
          <p className="text-gray-400 mb-6">
            Beyond these projects, I'm constantly learning and exploring new
            technologies. Check out my GitHub for more projects and
            contributions.
          </p>
          <a
            href="https://github.com/jatinhasiwal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-yellow-400 font-semibold hover:text-yellow-300 transition-colors"
          >
            Visit My GitHub <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
