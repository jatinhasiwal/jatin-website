import { ArrowRight, Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import profilePic from "../components/images/photo.jpg";
import logoPic from "../components/images/lgo.png";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(232,96,46,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(232,96,46,0.05),transparent_50%)]"></div>

      {/* Navbar */}
      <nav
        className="fixed top-0 left-0 w-full z-50 px-6 lg:px-12 py-6 flex items-center justify-between 
      bg-black/00 backdrop-blur-xl border-b border-gray-800/30"
      >
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-lg overflow-hidden border border-[#E8602E]">
            <img
              src={logoPic}
              alt="Jatin Logo"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-white">
            <div className="font-bold text-lg leading-none">Jatin</div>
            <div className="text-[#E8602E] text-sm font-medium">Hasiwal</div>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {["about", "skills", "projects", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-gray-300 hover:text-[#E8602E] transition-colors font-medium"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}

          {/* Connect Button */}
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-[#E8602E] text-black px-6 py-2.5 rounded-lg font-semibold 
            hover:bg-[#ff7a4d] transition-all hover:scale-105"
          >
            Connect
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-20 left-0 right-0 bg-black/00 backdrop-blur-xl z-40 px-6 py-8 space-y-6">
          {["about", "skills", "projects", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="block w-full text-center text-gray-300 hover:text-[#E8602E] transition-colors font-medium text-lg"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}

          <button
            onClick={() => scrollToSection("contact")}
            className="block w-full bg-[#E8602E] text-black px-6 py-3 rounded-lg font-semibold 
            hover:bg-[#ff7a4d] transition-all text-center"
          >
            Connect
          </button>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 lg:pt-40 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side */}
          <div className="space-y-8">
            <div className="inline-block">
              <div className="bg-[#E8602E]/10 border border-[#E8602E]/30 text-[#E8602E] px-4 py-2 rounded-full text-sm font-semibold">
                ✦ AI Enthusiast & Full-Stack Developer
              </div>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Hi, I'm
              <span className="block">
                <span className="relative w-fit mx-auto mt-2 text-[#E8602E]  bg-[#E8602E21] inline-block border border-[#E8602E] px-2 font-machina pt-[.06rem]">
                  Jatin Hasiwal
                  {/* Top Left Dot */}
                  <span className="absolute aspect-square h-1  bg-white z-10 top-0 left-0 -translate-x-1/2 -translate-y-1/2"></span>
                  {/* Top Right Dot */}
                  <span className="absolute aspect-square h-1  bg-white z-10 top-0 right-0 translate-x-1/2 -translate-y-1/2"></span>
                  {/* Bottom Right Dot */}
                  <span className="absolute aspect-square h-1 bg-white z-10 bottom-0 right-0 translate-x-1/2 translate-y-1/2"></span>
                  {/* Bottom Left Dot */}
                  <span className="absolute aspect-square h-1 bg-white z-10 bottom-0 left-0 -translate-x-1/2 translate-y-1/2"></span>
                </span>
              </span>
            </h1>

            <p className="text-xl text-gray-400 leading-relaxed">
              A Computer Science graduate passionate about Web development, AI,
              and building innovative solutions.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="group bg-[#E8602E] text-black px-8 py-4 rounded-lg font-semibold 
                hover:bg-[#ff7a4d] transition-all flex items-center justify-center gap-2 hover:scale-105"
              >
                View My Work
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="border border-gray-700 text-white px-8 py-4 rounded-lg font-semibold 
                hover:border-[#E8602E] hover:text-[#E8602E] transition-all"
              >
                Get in Touch
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/jatinhasiwal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center 
                text-gray-400 hover:text-[#E8602E] hover:border-[#E8602E]/50 transition-all hover:scale-110"
              >
                <Github size={24} />
              </a>

              <a
                href="https://linkedin.com/in/jatinhasiwal1/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center 
                text-gray-400 hover:text-[#E8602E] hover:border-[#E8602E]/50 transition-all hover:scale-110"
              >
                <Linkedin size={24} />
              </a>

              <a
                href="mailto:jatinhasiwal2003@gmail.com"
                className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center 
                text-gray-400 hover:text-[#E8602E] hover:border-[#E8602E]/50 transition-all hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Right Side Profile Card */}
          <div className="relative">
            <div className="relative z-10 aspect-square rounded-2xl overflow-hidden border border-gray-800">
              <div className="absolute inset-0 bg-gradient-to-br from-[#E8602E]/20 to-transparent"></div>

              <div className="relative w-full h-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-[#E8602E] shadow-lg">
                    <img
                      src={profilePic}
                      alt="Jatin Hasiwal"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="text-white font-bold text-2xl">
                    Jatin Hasiwal
                  </div>

                  <div className="text-[#E8602E] text-sm">Uttar Pradesh</div>
                </div>
              </div>
            </div>

            {/* Glow Effects */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#E8602E]/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-[#E8602E]/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
}
