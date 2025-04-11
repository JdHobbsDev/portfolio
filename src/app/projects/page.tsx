'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaImages, FaTimes, FaGlobe, FaExpand, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  const [activeGallery, setActiveGallery] = useState<string | null>(null);
  const [galleryImages, setGalleryImages] = useState<Record<string, string[]>>({
    'minds-matter-uk': [],
    'asteroid-studios-ticket': [],
  });
  const [loading, setLoading] = useState(true);
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  useEffect(() => {

    fetch('/api/project-images')
      .then(res => res.json())
      .then(data => {

        const { 'minds-matter-uk': mindsMatter, 'asteroid-studios-ticket': asteroidStudios } = data;
        setGalleryImages({
          'minds-matter-uk': mindsMatter || [],
          'asteroid-studios-ticket': asteroidStudios || [],
        });
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching project images:', error);
        setLoading(false);


        const simulatedGalleries = {
          'minds-matter-uk': Array.from({ length: 12 }, (_, i) => `/projects/minds-matter/screenshot-${i + 1}.png`),
          'asteroid-studios-ticket': Array.from({ length: 15 }, (_, i) => `/projects/asteroid-ticket/screenshot-${i + 1}.png`),
        };

        setGalleryImages(simulatedGalleries);
      });
  }, []);

  const openGallery = (projectId: string) => {
    setActiveGallery(projectId);
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setActiveGallery(null);
    setExpandedImage(null);
    document.body.style.overflow = '';
  };

  const expandImage = (imageSrc: string) => {
    setExpandedImage(imageSrc);
  };

  const closeExpandedImage = () => {
    setExpandedImage(null);
  };

  const projects = [
    {
      id: 'minds-matter-uk',
      title: 'Minds Matter UK',
      description: 'Mental health assistance Discord bot providing resources, support, and crisis intervention tools.',
      image: '/projects/minds-matter.png',
      emoji: '🧠',
      color: 'from-purple-600 to-indigo-600',
      tags: ['Mental Health', 'Support', 'Resources'],
      hasGallery: true,
      website: 'https://mindsmatter.xyz',
    },
    {
      id: 'asteroid-studios-ticket',
      title: 'Asteroid Studios Ticket Bot',
      description: 'Advanced ticket management system for Asteroid Studios, handling customer support, bug reports, and feature requests.',
      image: '/projects/asteroid-ticket.png',
      emoji: '🎮',
      color: 'from-green-600 to-teal-600',
      tags: ['Game Studio', 'Support', 'Tickets'],
      hasGallery: true,
    },
    {
      id: 'utility-bots',
      title: 'Utility Bots',
      description: 'Multi-purpose utility bots for Minds Matter UK and UKRP communities with custom server management tools.',
      image: '/projects/utility-bot.png',
      emoji: '🔧',
      color: 'from-indigo-600 to-blue-600',
      tags: ['Utility', 'Management', 'Custom Tools'],
      hasGallery: false,
    },
    {
      id: 'moderation-bot',
      title: 'Moderation Bot',
      description: 'A comprehensive moderation bot with auto-moderation, warning system, and detailed logging.',
      image: '/projects/moderation-bot.png',
      emoji: '🛡️',
      color: 'from-red-600 to-orange-600',
      tags: ['Moderation', 'Auto-mod', 'Logging'],
      hasGallery: false,
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 tracking-tight">My Projects</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl leading-relaxed">
          A showcase of Discord bots I&apos;ve developed for various purposes and communities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col md:flex-row bg-gray-800/40 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 shadow-md hover:shadow-blue-900/20"
            >
              <div className={`w-full md:w-1/4 bg-gradient-to-br ${project.color} p-6 flex items-center justify-center`}>
                <span className="text-5xl">{project.emoji}</span>
              </div>

              <div className="w-full md:w-3/4 p-5 flex flex-col">
                <div className="mb-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-gray-300 text-sm mt-2 mb-3 leading-relaxed">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2.5 py-1 bg-gray-700/50 text-gray-200 text-xs rounded-full`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-3">
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-600/90 hover:bg-purple-700 rounded-md transition-all duration-200 text-sm font-medium"
                    >
                      <FaGlobe className="text-xs" /> Website
                    </a>
                  )}
                  {project.hasGallery && (
                    <button
                      onClick={() => openGallery(project.id)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600/90 hover:bg-blue-700 rounded-md transition-all duration-200 text-sm font-medium"
                      disabled={loading || (galleryImages[project.id]?.length === 0)}
                    >
                      <FaImages className="text-xs" /> {loading ? 'Loading...' : 'Screenshots'}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      {activeGallery && galleryImages[activeGallery]?.length > 0 && (
        <div className="fixed inset-0 bg-black/95 z-50 flex flex-col p-4 overflow-y-auto backdrop-blur-md">
          <div className="sticky top-0 flex justify-between items-center mb-6 bg-black/80 p-4 rounded-lg z-10 backdrop-blur-md border border-gray-800/50">
            <h2 className="text-xl font-bold text-white flex items-center">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br ${projects.find(p => p.id === activeGallery)?.color} mr-3`}>
                <span className="text-xl">{projects.find(p => p.id === activeGallery)?.emoji}</span>
              </div>
              {projects.find(p => p.id === activeGallery)?.title} Screenshots
            </h2>
            <button
              onClick={closeGallery}
              className="text-white bg-red-600 hover:bg-red-700 rounded-lg p-2 transition-all duration-200"
              aria-label="Close gallery"
            >
              <FaTimes />
            </button>
          </div>


          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 pb-8 space-y-4">
            {galleryImages[activeGallery].map((image, index) => (
              <div
                key={index}
                className="relative bg-gray-800/30 rounded-lg overflow-hidden shadow-md border border-gray-700/50 hover:border-blue-500/50 transition-all duration-200 break-inside-avoid mb-4 group cursor-pointer"
                onClick={() => expandImage(image)}
              >
                <img
                  src={image}
                  alt={`Screenshot ${index + 1}`}
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end justify-between p-3">
                  <span className="text-white text-xs font-medium">Screenshot {index + 1}</span>
                  <FaExpand className="text-white text-sm" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}


      {expandedImage && (
        <div
          className="fixed inset-0 bg-black/98 z-[60] flex items-center justify-center p-4 cursor-pointer"
          onClick={closeExpandedImage}
        >
          <div className="relative max-w-[95vw] max-h-[95vh]">
            <img
              src={expandedImage}
              alt="Expanded screenshot"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-xl"
            />
            <button
              className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full shadow-lg transition-all duration-200"
              onClick={(e) => {
                e.stopPropagation();
                closeExpandedImage();
              }}
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}
    </main>
  );
}