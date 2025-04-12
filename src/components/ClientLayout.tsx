"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaGithub,
  FaDiscord,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0B1120]/80 backdrop-blur-xl shadow-lg shadow-blue-900/5 border-b border-[#1E293B]"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex justify-between items-center h-20">
            <Link
              href="/"
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 transition-all duration-300 hover:scale-105"
            >
              JdHobbsDev
            </Link>
            <nav className="hidden md:flex space-x-10">
              <Link
                href="/"
                className="text-blue-100/80 hover:text-white transition-all duration-300 hover:scale-105 relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/projects"
                className="text-blue-100/80 hover:text-white transition-all duration-300 hover:scale-105 relative group"
              >
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/snippets"
                className="text-blue-100/80 hover:text-white transition-all duration-300 hover:scale-105 relative group"
              >
                Code Snippets
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/contact"
                className="text-blue-100/80 hover:text-white transition-all duration-300 hover:scale-105 relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </nav>
            <div className="md:hidden">
              <button
                className="text-blue-100/80 hover:text-white p-2 transition-all duration-300"
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#111827]/95 backdrop-blur-xl border-b border-[#1E293B] animate-fadeIn">
            <div className="container mx-auto px-4 py-5">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-blue-100/80 hover:text-white transition-all duration-300 py-2 pl-2 border-l-2 border-transparent hover:border-blue-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/projects"
                  className="text-blue-100/80 hover:text-white transition-all duration-300 py-2 pl-2 border-l-2 border-transparent hover:border-blue-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Projects
                </Link>
                <Link
                  href="/snippets"
                  className="text-blue-100/80 hover:text-white transition-all duration-300 py-2 pl-2 border-l-2 border-transparent hover:border-blue-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Code Snippets
                </Link>
                <Link
                  href="/contact"
                  className="text-blue-100/80 hover:text-white transition-all duration-300 py-2 pl-2 border-l-2 border-transparent hover:border-blue-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        )}
      </header>

      <div className="min-h-screen">{children}</div>

      <footer className="bg-[#0B1120] border-t border-[#1E293B] py-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 left-0 w-full h-full">
            <div className="absolute bottom-[30%] left-[10%] w-64 h-64 bg-blue-600/5 rounded-full filter blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-[10%] right-[20%] w-80 h-80 bg-purple-600/5 rounded-full filter blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>
        </div>

        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-10 md:mb-0 text-center md:text-left">
              <Link
                href="/"
                className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600"
              >
                JdHobbsDev
              </Link>
              <p className="text-blue-100/60 mt-3 max-w-md">
                A discord.js developer with a passion for creating innovative
                and efficient solutions.
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-16 space-y-10 md:space-y-0">
              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold mb-4 text-white">
                  Navigation
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/"
                      className="text-blue-100/60 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/projects"
                      className="text-blue-100/60 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/snippets"
                      className="text-blue-100/60 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      Code Snippets
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-blue-100/60 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold mb-4 text-white">
                  Connect
                </h3>
                <div className="flex justify-center md:justify-start space-x-5">
                  <a
                    href="https://github.com/JdHobbsDev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-100/60 hover:text-white transition-all duration-300 hover:scale-110 transform"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href="https://discord.gg/9vBEjJkmbS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-100/60 hover:text-white transition-all duration-300 hover:scale-110 transform"
                  >
                    <FaDiscord size={24} />
                  </a>
                  <a
                    href="mailto:jdhobbs38@gmail.com"
                    className="text-blue-100/60 hover:text-white transition-all duration-300 hover:scale-110 transform"
                  >
                    <FaEnvelope size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-[#1E293B] text-center">
            <p className="text-blue-100/40">
              Made with <span className="text-red-500">❤️</span> by Jd
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
