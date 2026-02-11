import { Code2, Brain, GitBranch, Database, Cpu, Zap } from 'lucide-react';

const skills = [
  {
    icon: Code2,
    title: 'Programming',
    items: ['Python', 'JavaScript', 'OOPs', 'Data Structures', 'Algorithms'],
    color: 'from-yellow-400 to-yellow-600'
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    items: ['Scikit-learn', 'TensorFlow', 'Model Training', 'Data Analysis', 'Classification'],
    color: 'from-yellow-500 to-yellow-700'
  },
  {
    icon: Database,
    title: 'Data Science',
    items: ['NumPy', 'Pandas', 'Data Visualization', 'Matplotlib', 'Jupyter Notebook'],
    color: 'from-yellow-600 to-yellow-800'
  },
  {
    icon: GitBranch,
    title: 'Developer Tools',
    items: ['Git', 'Docker', 'Version Control', 'GitHub', 'Command Line'],
    color: 'from-yellow-400 to-yellow-600'
  },
  {
    icon: Cpu,
    title: 'Core Concepts',
    items: ['DBMS', 'System Design', 'API Development', 'Web Development', 'Full-Stack'],
    color: 'from-yellow-500 to-yellow-700'
  },
  {
    icon: Zap,
    title: 'Soft Skills',
    items: ['Quick Learner', 'Team Collaboration', 'Problem Solving', 'Documentation', 'Adaptability'],
    color: 'from-yellow-600 to-yellow-800'
  }
];

export default function Services() {
  return (
    <section id="skills" className="relative bg-black py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl -translate-x-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            What I Know
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Technical Skills &
            <span className="block text-yellow-400">Expertise</span>
          </h2>
          <p className="text-xl text-gray-400">
            A comprehensive toolkit built through academic projects, certifications, and hands-on learning in AI and full-stack development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 to-yellow-400/0 group-hover:from-yellow-400/5 group-hover:to-transparent rounded-2xl transition-all duration-300"></div>

                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-black" size={32} strokeWidth={2.5} />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                    {skill.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, idx) => (
                      <span
                        key={idx}
                        className="bg-yellow-400/10 border border-yellow-400/30 text-yellow-100 px-3 py-1 rounded-full text-sm group-hover:bg-yellow-400/20 transition-colors"
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
