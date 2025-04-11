'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaGithub, FaDiscord, FaEnvelope } from 'react-icons/fa';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <>
            <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="flex justify-between items-center h-16">
                        <Link href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                            JdHobbsDev
                        </Link>
                        <nav className="hidden md:flex space-x-8">
                            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                                Home
                            </Link>
                            <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">
                                Projects
                            </Link>
                            <Link href="/snippets" className="text-gray-300 hover:text-white transition-colors">
                                Code Snippets
                            </Link>
                            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                                Contact
                            </Link>
                        </nav>
                        <div className="md:hidden">
                            <button
                                className="text-gray-300 hover:text-white p-2"
                                onClick={toggleMobileMenu}
                                aria-label="Toggle menu"
                            >
                                ☰
                            </button>
                        </div>
                    </div>
                </div>

                { }
                {mobileMenuOpen && (
                    <div className="md:hidden bg-gray-800 border-b border-gray-700">
                        <div className="container mx-auto px-4 py-3">
                            <nav className="flex flex-col space-y-3">
                                <Link
                                    href="/"
                                    className="text-gray-300 hover:text-white transition-colors py-2"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/projects"
                                    className="text-gray-300 hover:text-white transition-colors py-2"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Projects
                                </Link>
                                <Link
                                    href="/snippets"
                                    className="text-gray-300 hover:text-white transition-colors py-2"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Code Snippets
                                </Link>
                                <Link
                                    href="/contact"
                                    className="text-gray-300 hover:text-white transition-colors py-2"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Contact
                                </Link>
                            </nav>
                        </div>
                    </div>
                )}
            </header>

            {children}

            <footer className="bg-gray-900 border-t border-gray-800 py-12">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-6 md:mb-0 text-center md:text-left">
                            <Link href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                                JdHobbsDev
                            </Link>
                            <p className="text-gray-400 mt-2">
                                A discord.js developer with a passion for creating innovative and efficient solutions.
                            </p>
                        </div>
                        <div className="flex flex-col md:flex-row md:space-x-12 space-y-8 md:space-y-0">
                            <div className="text-center md:text-left">
                                <h3 className="text-lg font-semibold mb-3">Navigation</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
                                            Projects
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/snippets" className="text-gray-400 hover:text-white transition-colors">
                                            Code Snippets
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="text-center md:text-left">
                                <h3 className="text-lg font-semibold mb-3">Connect</h3>
                                <div className="flex justify-center md:justify-start space-x-4">
                                    <a href="https://github.com/JdHobbsDev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                        <FaGithub size={24} />
                                    </a>
                                    <a href="https://discord.gg/9vBEjJkmbS" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                        <FaDiscord size={24} />
                                    </a>
                                    <a href="mailto:jdhobbs38@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                                        <FaEnvelope size={24} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
                        <p>Made with ❤️ by Jd</p>
                    </div>
                </div>
            </footer>
        </>
    );
}