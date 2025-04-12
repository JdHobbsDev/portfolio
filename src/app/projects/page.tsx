"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  FaImages,
  FaTimes,
  FaGlobe,
  FaExpand,
  FaExternalLinkAlt,
  FaArrowRight,
  FaBrain,
  FaGamepad,
  FaTools,
  FaShieldAlt
} from "react-icons/fa";
import { useRouter } from 'next/navigation';

export default function Projects() {
  const [activeGallery, setActiveGallery] = useState<string | null>(null);
  const [galleryImages, setGalleryImages] = useState<Record<string, string[]>>({
    "minds-matter-uk": [],
    "asteroid-studios-ticket": [],
  });
  const [loading, setLoading] = useState(true);
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/project-images")
      .then((res) => res.json())
      .then((data) => {
        const {
          "minds-matter-uk": mindsMatter,
          "asteroid-studios-ticket": asteroidStudios,
        } = data;
        setGalleryImages({
          "minds-matter-uk": mindsMatter || [],
          "asteroid-studios-ticket": asteroidStudios || [],
        });
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching project images:", error);
        setLoading(false);
        const simulatedGalleries = {
          "minds-matter-uk": Array.from(
            { length: 12 },
            (_, i) => `/projects/minds-matter/screenshot-${i + 1}.png`,
          ),
          "asteroid-studios-ticket": Array.from(
            { length: 15 },
            (_, i) => `/projects/asteroid-ticket/screenshot-${i + 1}.png`,
          ),
        };
        setGalleryImages(simulatedGalleries);
      });
  }, []);

  const router = useRouter();
  const openGallery = (projectId: string) => {
    router.push(`/gallery/${projectId}`);
  };

  const closeGallery = () => {
    setActiveGallery(null);
    setExpandedImage(null);
    document.body.style.overflow = "";
  };

  const expandImage = (imageSrc: string) => {
    setExpandedImage(imageSrc);
  };

  const closeExpandedImage = () => {
    setExpandedImage(null);
  };

  const projects = [
    {
      id: "minds-matter-uk",
      title: "Minds Matter UK",
      description:
        "A comprehensive Discord bot for mental health support and community management.",
      icon: <FaBrain className="text-white text-2xl" />,
      color: "from-purple-600 to-indigo-600",
      tags: ["Discord.js", "Node.js", "Mental Health", "Community"],
      website: "https://mindsmatter.uk",
      hasScreenshots: true, 
    },
    {
      id: "asteroid-studios-ticket",
      title: "Asteroid Studios Ticket Bot",
      description:
        "Advanced ticket management system for Asteroid Studios Discord server.",
      icon: <FaGamepad className="text-white text-2xl" />,
      color: "from-emerald-600 to-teal-600",
      tags: ["Discord.js", "Node.js", "Ticket System", "Game Studio"],
      website: "https://asteroidstudios.co.uk",
      hasScreenshots: true, 
    },
    {
      id: "utility-bots",
      title: "Utility Bots",
      description:
        "Collection of utility bots for various Discord server management tasks.",
      icon: <FaTools className="text-white text-2xl" />,
      color: "from-blue-600 to-indigo-600",
      tags: ["Discord.js", "Node.js", "Utility", "Automation"],
      website: null,
      hasScreenshots: false, 
    },
    {
      id: "moderation-bot",
      title: "Moderation Bot",
      description:
        "Powerful moderation bot with advanced auto-moderation features.",
      icon: <FaShieldAlt className="text-white text-2xl" />,
      color: "from-red-600 to-orange-600",
      tags: ["Discord.js", "Node.js", "Moderation", "Security"],
      website: null,
      hasScreenshots: false, 
    },
  ];

  return (
    <main className="min-h-screen bg-[#0B1120] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1A2942]/50 via-[#0B1120] to-[#0B1120] text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl animate-pulse"></div>
          <div
            className="absolute top-[50%] right-[15%] w-80 h-80 bg-purple-600/10 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-[15%] left-[20%] w-72 h-72 bg-cyan-600/10 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 tracking-tight">
            My Projects
          </h1>
          <p className="text-xl md:text-2xl text-blue-100/80 max-w-3xl leading-relaxed">
            A showcase of Discord bots I've developed for various communities and
            purposes.
          </p>
        </div>


        <div className="grid grid-cols-1 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#111827]/50 backdrop-blur-sm border border-[#1E293B] rounded-xl overflow-hidden group hover:border-blue-500/50 transition-all duration-300 shadow-lg p-6"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div
                    className={`w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-br ${project.color} shadow-lg transform group-hover:scale-110 transition-transform duration-500`}
                  >
                    {project.icon}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-300 transition-all duration-500">
                    {project.title}
                  </h3>
                  <p className="text-blue-100/70 mb-6 text-lg">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-sm px-3 py-1 rounded-full bg-blue-900/30 text-blue-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-6">
                    {project.website && (
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-base text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <FaGlobe className="text-sm" />
                        <span>Website</span>
                      </a>
                    )}
                    {project.hasScreenshots && (
                      <button
                        onClick={() => openGallery(project.id)}
                        className="inline-flex items-center gap-2 text-base text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <FaImages className="text-sm" />
                        <span>Screenshots</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {activeGallery && (
          <div className="fixed inset-0 bg-black/95 z-[100] flex flex-col">
            <div className="bg-[#111827] border-b border-[#1E293B] p-4 md:p-6 flex justify-between items-center sticky top-0 z-10">
              <h2 className="text-xl font-bold text-white flex items-center">
                <div className="min-w-[40px] min-h-[40px] flex items-center justify-center mr-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br ${projects.find((p) => p.id === activeGallery)?.color
                      } shadow-lg`}
                  >
                    {projects.find((p) => p.id === activeGallery)?.icon}
                  </div>
                </div>
                {projects.find((p) => p.id === activeGallery)?.title} Screenshots
              </h2>
              <button
                onClick={closeGallery}
                className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors flex items-center justify-center w-10 h-10"
                aria-label="Close gallery"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>

            {loading ? (
              <div className="flex-1 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : (
              <div className="flex-1 overflow-y-auto p-4 md:p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {galleryImages[activeGallery]?.map((image, index) => (
                    <div
                      key={index}
                      className="relative group rounded-lg overflow-hidden border border-[#1E293B] hover:border-blue-500/50 transition-all duration-300"
                    >
                      <div className="bg-[#0D1117] flex justify-center">
                        <img
                          src={image}
                          alt={`${projects.find((p) => p.id === activeGallery)?.title
                            } screenshot ${index + 1}`}
                          className="max-w-full w-auto h-auto"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.onerror = null;
                            target.src =
                              "https://via.placeholder.com/400x300?text=Image+Not+Found";
                          }}
                        />
                      </div>
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <button
                          onClick={() => expandImage(image)}
                          className="bg-blue-600/80 hover:bg-blue-600 p-3 rounded-full transition-colors"
                          aria-label="Expand image"
                        >
                          <FaExpand className="text-white text-lg" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {expandedImage && (
          <div
            className="fixed inset-0 bg-black/95 z-[101] flex items-center justify-center p-4"
            onClick={closeExpandedImage}
          >
            <div className="relative max-w-full max-h-full">
              <img
                src={expandedImage}
                alt="Expanded view"
                className="max-w-full max-h-[90vh] w-auto h-auto object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src =
                    "https://via.placeholder.com/800x600?text=Image+Not+Found";
                }}
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  closeExpandedImage();
                }}
                className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors flex items-center justify-center w-10 h-10"
                aria-label="Close expanded view"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
