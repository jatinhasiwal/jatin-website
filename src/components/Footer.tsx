import { Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import logoPic from "../components/images/logo.jpg"
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden border border-yellow-400">
                <img
                  src={logoPic}
                  alt="Jatin Logo"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-white">
                <div className="font-bold text-lg leading-none">Jatin</div>
                <div className="text-yellow-400 text-sm font-medium">Hasiwal</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full-stack developer enthusiast & AI passionate about solving real-world problems through innovative technology solutions.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/jatinhasiwal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:border-yellow-400/50 transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://linkedin.com/in/jatinhasiwal1/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:border-yellow-400/50 transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:border-yellow-400/50 transition-all"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://youtube.com/JatinHasiwal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:border-yellow-400/50 transition-all"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Skills</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('skills')} className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  Machine Learning
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('skills')} className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  Python & JavaScript
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('skills')} className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  Data Science
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('skills')} className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  Full-Stack Dev
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('projects')} className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  Projects
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  Contact
                </button>
              </li>
              <li>
                <a href="https://github.com/jatinhasiwal" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Let's Connect</h4>
            <p className="text-gray-400 text-sm mb-4">
              Open to opportunities and collaborations. Get in touch!
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-yellow-400 text-black px-6 py-2.5 rounded-lg font-semibold hover:bg-yellow-300 transition-all hover:scale-105 text-sm w-full"
            >
              Reach Out
            </button>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Jatin Hasiwal. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="mailto:jatinhasiwal2003@gmail.com" className="text-gray-500 hover:text-yellow-400 transition-colors text-sm">
                Email
              </a>
              <a href="https://linkedin.com/in/jatinhasiwal1/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-yellow-400 transition-colors text-sm">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
