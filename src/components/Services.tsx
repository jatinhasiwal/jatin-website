import { Code2, Brain, GitBranch, Database, Cpu, Zap } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Programming",
    items: ["Python", "JavaScript", "OOPs", "Data Structures", "Algorithms"],
    color: "from-[#E8602E] to-[#340E00]",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    items: [
      "Scikit-learn",
      "TensorFlow",
      "Model Training",
      "Data Analysis",
      "Classification",
    ],
    color: "from-[#E8602E] to-[#340E00]",
  },
  {
    icon: Database,
    title: "Data Science",
    items: [
      "NumPy",
      "Pandas",
      "Data Visualization",
      "Matplotlib",
      "Jupyter Notebook",
    ],
    color: "from-[#E8602E] to-[#340E00]",
  },
  {
    icon: GitBranch,
    title: "Developer Tools",
    items: ["Git", "Docker", "Version Control", "GitHub", "Command Line"],
    color: "from-[#E8602E] to-[#340E00]",
  },
  {
    icon: Cpu,
    title: "Core Concepts",
    items: ["DBMS", "System Design", "API Development", "Web Development", "Full-Stack"],
    color: "from-[#E8602E] to-[#340E00]",
  },
  {
    icon: Zap,
    title: "Soft Skills",
    items: [
      "Quick Learner",
      "Team Collaboration",
      "Problem Solving",
      "Documentation",
      "Adaptability",
    ],
    color: "from-[#E8602E] to-[#340E00]",
  },
];

export default function Services() {
  return (
    <section
      id="skills"
      className="relative bg-black py-24 lg:py-32 overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-[#E8602E]/5 rounded-full blur-3xl -translate-x-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#E8602E]/10 border border-[#E8602E]/30 text-[#E8602E] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            What I Know
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Technical Skills &
            <span className="block text-[#E8602E]">Expertise</span>
          </h2>

          <p className="text-xl text-gray-400">
            A comprehensive toolkit built through academic projects,
            certifications, and hands-on learning in AI and full-stack
            development.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 
                hover:border-[#E8602E]/50 transition-all duration-300 hover:scale-105"
              >
                {/* Hover Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E8602E]/0 to-[#E8602E]/0 
                group-hover:from-[#E8602E]/5 group-hover:to-transparent rounded-2xl transition-all duration-300"></div>

                <div className="relative">
                  {/* Icon Box */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center mb-6 
                    group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="text-white" size={32} strokeWidth={2.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#E8602E] transition-colors">
                    {skill.title}
                  </h3>

                  {/* Skill Tags */}
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, idx) => (
                      <span
                        key={idx}
                        className="bg-[#E8602E]/10 border border-[#E8602E]/30 text-gray-200 px-3 py-1 rounded-full text-sm 
                        group-hover:bg-[#E8602E]/20 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
