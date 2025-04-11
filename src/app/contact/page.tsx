'use client';

import { FaDiscord, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10">
          Ready to take your Discord server to the next level? Let&apos;s discuss your project!
        </p>

        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl md:text-2xl font-semibold mb-8">Contact Information</h2>

          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-blue-600/20 p-3 md:p-4 rounded-md mr-4">
                <FaDiscord className="text-blue-400 text-xl" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-medium mb-1">Discord</h3>
                <p className="text-gray-300 text-base md:text-lg">jackfm16</p>
                <p className="text-gray-400 mt-1 text-sm md:text-base">Fastest way to reach me for quick questions</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-600/20 p-3 md:p-4 rounded-md mr-4">
                <FaEnvelope className="text-blue-400 text-xl" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-medium mb-1">Email</h3>
                <p className="text-gray-300 text-base md:text-lg">jdhobbs38@gmail.com</p>
                <p className="text-gray-400 mt-1 text-sm md:text-base">For formal inquiries and project discussions</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-600/20 p-3 md:p-4 rounded-md mr-4">
                <FaGithub className="text-blue-400 text-xl" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-medium mb-1">GitHub</h3>
                <p className="text-gray-300 text-base md:text-lg">github.com/JdHobbsDev</p>
                <p className="text-gray-400 mt-1 text-sm md:text-base">Check out my open-source projects</p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-gray-800/50 rounded-lg border border-gray-700">
            <h3 className="text-lg md:text-xl font-medium mb-3">Working Hours</h3>
            <p className="text-gray-300 text-base md:text-lg mb-2">Monday - Friday: 9AM - 6PM BST</p>
            <p className="text-gray-400 text-sm md:text-base">I typically respond to all inquiries within 24 hours during business days.</p>
          </div>
        </div>
      </div>
    </main>
  );
}