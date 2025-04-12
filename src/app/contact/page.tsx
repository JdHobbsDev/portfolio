"use client";
import {
  FaDiscord,
  FaGithub,
  FaEnvelope,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#0B1120] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1A2942]/50 via-[#0B1120] to-[#0B1120] text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[20%] right-[15%] w-72 h-72 bg-purple-600/10 rounded-full filter blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-[30%] left-[10%] w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-[60%] right-[20%] w-80 h-80 bg-cyan-600/10 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>
      </div>
      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 tracking-tight">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-blue-100/80 max-w-3xl leading-relaxed">
            Ready to take your Discord server to the next level? Let&apos;s
            discuss your project!
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#111827]/40 backdrop-blur-sm rounded-xl overflow-hidden border border-[#1E293B] hover:border-blue-500/50 transition-all duration-500 shadow-lg p-6 group">
              <div className="flex items-start gap-5">
                <div className="min-w-[56px] min-h-[56px] flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg transform group-hover:scale-110 transition-transform duration-500">
                    <FaDiscord className="text-white text-2xl" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-300 transition-all duration-500">
                    Discord
                  </h3>
                  <p className="text-blue-100/90 text-lg mb-2">jackfm16</p>
                  <p className="text-blue-100/60">
                    Fastest way to reach me for quick questions
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#111827]/40 backdrop-blur-sm rounded-xl overflow-hidden border border-[#1E293B] hover:border-blue-500/50 transition-all duration-500 shadow-lg p-6 group">
              <div className="flex items-start gap-5">
                <div className="min-w-[56px] min-h-[56px] flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-br from-purple-600 to-pink-600 shadow-lg transform group-hover:scale-110 transition-transform duration-500">
                    <FaEnvelope className="text-white text-2xl" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-300 transition-all duration-500">
                    Email
                  </h3>
                  <p className="text-blue-100/90 text-lg mb-2">
                    jdhobbs38@gmail.com
                  </p>
                  <p className="text-blue-100/60">
                    For formal inquiries and project discussions
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#111827]/40 backdrop-blur-sm rounded-xl overflow-hidden border border-[#1E293B] hover:border-blue-500/50 transition-all duration-500 shadow-lg p-6 group">
              <div className="flex items-start gap-5">
                <div className="min-w-[56px] min-h-[56px] flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-br from-gray-600 to-gray-800 shadow-lg transform group-hover:scale-110 transition-transform duration-500">
                    <FaGithub className="text-white text-2xl" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-300 transition-all duration-500">
                    GitHub
                  </h3>
                  <p className="text-blue-100/90 text-lg mb-2">
                    github.com/JdHobbsDev
                  </p>
                  <p className="text-blue-100/60">
                    Check out my open-source projects
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#111827]/40 backdrop-blur-sm rounded-xl overflow-hidden border border-[#1E293B] hover:border-blue-500/50 transition-all duration-500 shadow-lg p-6 group">
              <div className="flex items-start gap-5">
                <div className="min-w-[56px] min-h-[56px] flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-br from-teal-600 to-green-600 shadow-lg transform group-hover:scale-110 transition-transform duration-500">
                    <FaClock className="text-white text-2xl" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-300 transition-all duration-500">
                    Working Hours
                  </h3>
                  <p className="text-blue-100/90 text-lg mb-2">
                    Monday - Friday: 9AM - 6PM BST
                  </p>
                  <p className="text-blue-100/60">
                    I typically respond within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#111827]/40 backdrop-blur-sm rounded-xl overflow-hidden border border-[#1E293B] p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Ready to Start a Project?
            </h2>
            <p className="text-blue-100/80 text-lg mb-8">
              I'm currently available for freelance work. If you have a project
              that needs some creative coding, feel free to reach out and we can
              discuss the details.
            </p>
            <a
              href="mailto:jdhobbs38@gmail.com"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-lg transition-all duration-300 text-base font-medium shadow-md hover:shadow-blue-900/30"
            >
              Contact Me
              <FaArrowRight className="text-xs opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
