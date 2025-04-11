import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaDiscord, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <section className="relative min-h-screen flex items-center justify-center px-4 py-16 md:py-0">
        <div className="absolute inset-0 bg-[url('/hero-bg.svg')] bg-cover bg-center opacity-10 z-0"></div>
        <div className="container mx-auto max-w-4xl z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Jd Hobbs
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 px-2">
              A discord.js developer with a passion for creating innovative and efficient solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link href="/projects" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-md transition-all duration-300 font-medium">
                View My Work
              </Link>
              <Link href="/contact" className="px-8 py-3 border border-blue-600 hover:bg-blue-600/20 rounded-md transition-all duration-300 font-medium mt-3 sm:mt-0">
                Hire Me
              </Link>
            </div>
            <div className="flex justify-center gap-6 text-2xl">
              <a href="https://github.com/JdHobbsDev" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <FaGithub />
              </a>
              <a href="https://discord.gg/9vBEjJkmbS" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <FaDiscord />
              </a>
              <a href="mailto:jdhobbs38@gmail.com" className="hover:text-blue-400 transition-colors">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
