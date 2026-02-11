import { Award, BookOpen, Briefcase, GraduationCap } from 'lucide-react';

const highlights = [
  {
    icon: GraduationCap,
    title: 'B.Tech in CSE',
    description: 'Dr. A.P.J. Abdul Kalam Technical University, Lucknow (2024) • CGPA: 7.5'
  },
  {
    icon: BookOpen,
    title: 'Certifications',
    description: 'Python (Basic) – HackerRank • Continuous learning in AI'
  },
  {
    icon: Briefcase,
    title: 'Experience',
    description: 'Building real-world Web solutions'
  },
  {
    icon: Award,
    title: 'Focus',
    description: 'Full-stack development'
  }
];

export default function About() {
  return (
    <section id="about" className="relative bg-gradient-to-b from-black via-gray-900 to-black py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold">
              About Me
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Driven by
              <span className="block text-yellow-400">Problem Solving & Innovation</span>
            </h2>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                I'm a passionate Computer Science graduate with a strong foundation in web development, artificial intelligence, and full-stack development. My journey in tech has been driven by a curiosity to solve real-world problems through innovative solutions.
              </p>
              <p>
                As a quick learner with solid fundamentals in Python and data structures, I've worked on academic projects involving full-stack development skills. Currently, I'm focused on gaining hands-on experience with real datasets and contributing to meaningful AI research.
              </p>
              <p>
                I believe in the power of clear thinking, sincerity in work, and continuous learning. I'm enthusiastic about collaborating with talented teams to leverage AI for solving complex problems.
              </p>
            </div>

            <div className="flex items-center gap-6 pt-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
              <span className="text-yellow-400 font-semibold">Background</span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 hover:border-yellow-400/50 transition-all hover:scale-105"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-yellow-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-1">{highlight.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{highlight.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-20 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 border border-yellow-400/30 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Let's Build Something Great Together
              </h3>
              <p className="text-gray-400 text-lg">
                Open to collaborations, Web Development opportunities, and exciting projects. Let's connect and explore how I can contribute to your team.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-all hover:scale-105 w-full lg:w-auto"
              >
                Let's Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
