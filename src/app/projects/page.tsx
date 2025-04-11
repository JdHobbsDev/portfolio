import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      id: 'minds-matter-uk',
      title: 'Minds Matter UK',
      description: 'Mental health assistance Discord bot providing resources, support, and crisis intervention tools.',
      image: '/projects/minds-matter.png',
      emoji: '🧠',
      color: 'from-purple-600 to-indigo-600',
      tags: ['Mental Health', 'Support', 'Resources'],
    },
    {
      id: 'asteroid-studios-ticket',
      title: 'Asteroid Studios Ticket Bot',
      description: 'Advanced ticket management system for Asteroid Studios, handling customer support, bug reports, and feature requests.',
      image: '/projects/asteroid-ticket.png',
      emoji: '🎮',
      color: 'from-green-600 to-teal-600',
      tags: ['Game Studio', 'Support', 'Tickets'],
    },
    {
      id: 'ukrp-ticket-bot',
      title: 'UKRP Ticket Bot',
      description: 'Custom ticket management system for UKRP FiveM server, handling user support requests and inquiries.',
      image: '/projects/ticket-bot.png',
      emoji: '🎫',
      color: 'from-blue-600 to-cyan-600',
      tags: ['Tickets', 'Support', 'FiveM'],
    },
    {
      id: 'utility-bots',
      title: 'Utility Bots',
      description: 'Multi-purpose utility bots for Minds Matter UK and UKRP communities with custom server management tools.',
      image: '/projects/utility-bot.png',
      emoji: '🔧',
      color: 'from-indigo-600 to-blue-600',
      tags: ['Utility', 'Management', 'Custom Tools'],
    },
    {
      id: 'moderation-bot',
      title: 'Moderation Bot',
      description: 'A comprehensive moderation bot with auto-moderation, warning system, and detailed logging.',
      image: '/projects/moderation-bot.png',
      emoji: '🛡️',
      color: 'from-red-600 to-orange-600',
      tags: ['Moderation', 'Auto-mod', 'Logging'],
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">My Projects</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10">
          A showcase of Discord bots I&apos;ve developed for various purposes and communities.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700 hover:border-gray-500 transition-all duration-300"
            >
              <div className={`h-3 bg-gradient-to-r ${project.color}`}></div>
              <div className="p-5">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">{project.emoji}</span>
                  <h3 className="text-lg md:text-xl font-semibold">{project.title}</h3>
                </div>
                <p className="text-gray-300 text-sm md:text-base mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}