"use client";
import Link from "next/link";
import { FaGithub, FaDiscord, FaEnvelope, FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <main className="min-h-screen bg-[#0B1120] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1A2942]/50 via-[#0B1120] to-[#0B1120] text-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[20%] left-[10%] w-64 sm:w-96 h-64 sm:h-96 bg-blue-600/10 rounded-full filter blur-3xl animate-pulse"></div>
          <div
            className="absolute top-[50%] right-[15%] w-56 sm:w-80 h-56 sm:h-80 bg-purple-600/10 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-[15%] left-[20%] w-48 sm:w-72 h-48 sm:h-72 bg-cyan-600/10 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>
      </div>
      <section className="relative min-h-screen flex items-center justify-center px-4 py-16 md:py-0">
        <div className="absolute inset-0 bg-[url('/hero-bg.svg')] bg-cover bg-center opacity-10 z-0"></div>
        <div className="container mx-auto max-w-4xl z-10">
          <div
            className="text-center animate-slideUp"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="inline-block mb-4 sm:mb-6 relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-75 blur-lg animate-pulse"></div>
              <div className="relative bg-[#0B1120] rounded-full p-1 border border-blue-500/30">
                <img
                  src="/avatar.png"
                  alt="Jd Hobbs"
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src =
                      "https://via.placeholder.com/150?text=Image+Not+Found";
                  }}
                />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 tracking-tight">
              Jd Hobbs
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-100/80 mb-6 sm:mb-10 px-2 leading-relaxed">
              A discord.js developer with a passion for creating
              <span className="relative inline-block mx-2">
                <span className="absolute -inset-1 w-full h-full bg-blue-500/20 blur-sm rounded-lg"></span>
                <span className="relative text-white">
                  innovative solutions
                </span>
              </span>
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-10 sm:mb-16">
              <Link
                href="/projects"
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-xl transition-all duration-300 font-medium text-base sm:text-lg shadow-lg hover:shadow-blue-900/30 flex items-center justify-center gap-3"
              >
                View My Work
                <FaArrowRight className="text-sm opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
              </Link>
              <Link
                href="/contact"
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-transparent border border-blue-500 hover:bg-blue-500/10 rounded-xl transition-all duration-300 font-medium text-base sm:text-lg mt-3 sm:mt-0 flex items-center justify-center gap-3"
              >
                Hire Me
                <FaArrowRight className="text-sm opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
              </Link>
            </div>
            <div className="flex justify-center gap-6 sm:gap-8 text-2xl sm:text-3xl">
              <a
                href="https://github.com/JdHobbsDev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-100/70 hover:text-white transition-all duration-300 hover:scale-125 transform"
                aria-label="GitHub Profile"
              >
                <FaGithub />
              </a>
              <a
                href="https://discord.gg/9vBEjJkmbS"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-100/70 hover:text-white transition-all duration-300 hover:scale-125 transform"
                aria-label="Discord Server"
              >
                <FaDiscord />
              </a>
              <a
                href="mailto:jdhobbs38@gmail.com"
                className="text-blue-100/70 hover:text-white transition-all duration-300 hover:scale-125 transform"
                aria-label="Email Contact"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="absolute top-[15%] left-[5%] transform -rotate-6 opacity-20 hidden lg:block animate-float">
        <div className="bg-[#111827]/80 backdrop-blur-sm p-4 rounded-lg border border-[#1E293B] shadow-xl max-w-xs">
          <pre className="text-blue-300 text-xs">
            <code>
              {`client.on('ready', () => {
  console.log('Bot is online!');
  client.user.setActivity('JdHobbsDev');
});`}
            </code>
          </pre>
        </div>
      </div>
      <div
        className="absolute bottom-[20%] right-[5%] transform rotate-3 opacity-20 hidden lg:block animate-float"
        style={{ animationDelay: "2s" }}
      >
        <div className="bg-[#111827]/80 backdrop-blur-sm p-4 rounded-lg border border-[#1E293B] shadow-xl max-w-xs">
          <pre className="text-green-300 text-xs">
            <code>
              {`async function createTicket(interaction) {
  const channel = await interaction.guild
    .channels.create({
      name: \`ticket-\${interaction.user.username}\`,
      type: ChannelType.GuildText
    });
  return channel;
}`}
            </code>
          </pre>
        </div>
      </div>
    </main>
  );
}
