import { Mail, MessageSquare, Send } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_bvf5qe6",
        "template_gxbwyvn",
        formRef.current,
        "zRgSmq946pcXn6pAN"
      )
      .then(
        () => {
          setSuccess(true);
          setLoading(false);

          setFormData({
            from_name: "",
            from_email: "",
            subject: "",
            message: "",
          });

          setTimeout(() => setSuccess(false), 4000);
        },
        (error) => {
          console.log("EmailJS Error:", error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-black via-gray-900 to-black py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-[#E8602E]/5 rounded-full blur-3xl -translate-x-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#E8602E]/10 border border-[#E8602E]/30 text-[#E8602E] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Get in Touch
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's Connect &
            <span className="block text-[#E8602E]">Collaborate</span>
          </h2>

          <p className="text-xl text-gray-400">
            I'm open to exciting opportunities, collaborations, and discussions.
            Reach out and let's talk!
          </p>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 lg:p-12 space-y-6"
            >
              {/* Success Message */}
              {success && (
                <div className="bg-green-500/10 border border-green-500 text-green-400 px-4 py-3 rounded-lg text-center font-semibold">
                  ✅ Email sent successfully!
                </div>
              )}

              {/* Name + Email */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-gray-400 mb-2 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    required
                    placeholder="Name"
                    className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white 
                    focus:border-[#E8602E] focus:outline-none"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-400 mb-2 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleChange}
                    required
                    placeholder="user-name@domain.com"
                    className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white 
                    focus:border-[#E8602E] focus:outline-none"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-gray-400 mb-2 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white 
                  focus:border-[#E8602E] focus:outline-none"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-400 mb-2 font-medium">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Share details about your opportunity or project..."
                  className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white 
                  focus:border-[#E8602E] focus:outline-none resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all
                ${
                  loading
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-[#E8602E] text-black hover:bg-[#ff7a4d] hover:scale-105"
                }`}
              >
                {loading && (
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                )}

                {loading ? "Sending..." : "Send Message"}
                <Send size={20} />
              </button>
            </form>
          </div>

          {/* Right Side Cards */}
          <div className="space-y-6">
            {/* Email Card */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8">
              <div className="w-12 h-12 bg-[#E8602E]/10 rounded-lg flex items-center justify-center mb-4">
                <Mail className="text-[#E8602E]" size={24} />
              </div>
              <h3 className="text-white font-bold text-xl mb-2">Email Me</h3>
              <a
                href="mailto:hello@jatinhasiwal.in"
                className="text-[#E8602E] font-semibold hover:underline"
              >
                hello@jatinhasiwal.in
              </a>
            </div>

            {/* Response Card */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8">
              <div className="w-12 h-12 bg-[#E8602E]/10 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="text-[#E8602E]" size={24} />
              </div>
              <h3 className="text-white font-bold text-xl mb-2">
                Quick Response
              </h3>
              <p className="text-gray-400">
                We typically respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
