"use client";
import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-css";
import "prismjs/components/prism-json";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

export default function Snippets() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);


  const codeSnippets = [
    {
      id: 'inspire-command',
      title: 'Inspire Command',
      description: 'A Discord slash command that fetches and displays inspirational quotes from an external API with DM option.',
      language: 'javascript',
      code: `const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('inspire')
        .setDescription('Provides an inspirational quote')
        .addBooleanOption(option =>
            option.setName('dm')
                .setDescription('Do you want to receive this in your DMs?')),

    async execute(interaction) {
        const sendToDM = interaction.options.getBoolean('dm');

        try {
            const response = await axios.get('https://zenquotes.io/api/random');
            const quote = response.data[0].q;
            const author = response.data[0].a;

            const embed = new EmbedBuilder()
                .setColor(0x0099ff)
                .setTitle('Inspirational Quote')
                .setDescription(\`_"\${quote}"_\\n\\n— \${author}\`)
                .setFooter({ text: 'Stay inspired!' })
                .setTimestamp();

            if (sendToDM) {
                await interaction.user.send({ embeds: [embed] });
                await interaction.reply({ content: 'I\\'ve sent you an inspirational quote in DMs!', ephemeral: true });
            } else {
                await interaction.reply({ embeds: [embed] });
            }
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'Sorry, something went wrong fetching the quote.', ephemeral: true });
        }
    },
};`
    },
    {
      id: 'reaction-roles',
      title: 'Reaction Roles System',
      description: 'A Discord slash command for Minds Matter UK that creates interactive button-based role assignment messages.',
      language: 'javascript',
      code: `const { SlashCommandBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('reactionroles')
        .setDescription('Create a reaction role message for users to get roles')
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles),

    async execute(interaction, client) {
        const reactionRolesEmbed = new EmbedBuilder()
            .setColor('Blurple')
            .setTitle('Role Selection')
            .setDescription('Click the button below to receive or remove the QOTD Pings role.\\n\\n**QOTD Pings**: Get notified when a new Question of the Day is posted!')
            .setTimestamp()
            .setFooter({ text: 'Minds Matter Role System' });

        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('toggle_role_qotd')
                    .setLabel('QOTD Pings')
                    .setStyle(ButtonStyle.Primary)
                    .setEmoji('🔔')
            );

        try {
            await interaction.channel.send({ embeds: [reactionRolesEmbed], components: [row] });
            await interaction.reply({
                content: 'Reaction roles message has been set up in this channel.',
                ephemeral: true
            });
        } catch (error) {
            console.error('Error sending reaction roles message:', error);
            await interaction.reply({
                content: 'There was an error setting up the reaction roles. Please try again later.',
                ephemeral: true
            });
        }
    }
};`
    },
    {
      id: 'ticket-restrict',
      title: 'Ticket Restrict Command',
      description: 'A Discord slash command for Asteroid Game Studios that restricts ticket access to directors only, escalating support issues when needed.',
      language: 'javascript',
      code: `const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
const config = require('../config.json');

const TicketPrefixes = [
    'general-',
    'alt-verify-',
    'developer-',
    'appeal-',
    'partnership-'
];

module.exports = {
    data: new SlashCommandBuilder()
        .setName('restrict')
        .setDescription('Restrict access to this ticket from normal support.'),
    async execute(interaction) {
        const ticketChannel = interaction.channel;

        const isValidTicketChannel = TicketPrefixes.some(prefix => ticketChannel.name.startsWith(prefix));
        if (!isValidTicketChannel) {
            return interaction.reply({ content: 'This command can only be used in ticket channels.', ephemeral: true });
        }

        const isAuthorised = interaction.member.roles.cache.some(role =>
            role.id === config.DirectorRoleId
        );

        if (!isAuthorised) {
            return interaction.reply({ content: 'You do not have permission to use this command.', ephemeral: true });
        }

        try {
            // Remove all support roles from viewing the ticket
            await ticketChannel.permissionOverwrites.edit(config.SupportRoleId, {
                ViewChannel: false
            });

            const restrictEmbed = new EmbedBuilder()
                .setColor('#FF5555')
                .setTitle('Ticket Restricted')
                .setDescription('This ticket has been restricted to directors only.')
                .setFooter({ text: 'Asteroid Studios Support' })
                .setTimestamp();

            await interaction.reply({ embeds: [restrictEmbed] });
        } catch (error) {
            console.error('Error restricting ticket:', error);
            await interaction.reply({ content: 'There was an error restricting this ticket.', ephemeral: true });
        }
    }
};`
    }
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
            Code Snippets
          </h1>
          <p className="text-xl md:text-2xl text-blue-100/80 max-w-3xl leading-relaxed">
            A collection of useful Discord.js code snippets from my projects.
          </p>
        </div>

        <div className="space-y-12">
          {codeSnippets.map((snippet) => (
            <div 
              key={snippet.id}
              className="bg-[#111827]/40 backdrop-blur-sm rounded-xl overflow-hidden border border-[#1E293B] hover:border-blue-500/50 transition-all duration-500 shadow-lg"
            >
              <div className="p-6 border-b border-[#1E293B]">
                <h2 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400">
                  {snippet.title}
                </h2>
                <p className="text-blue-100/70 mb-0">
                  {snippet.description}
                </p>
              </div>
              <div className="overflow-x-auto">
                <pre className="line-numbers p-0 m-0 rounded-none">
                  <code className={`language-${snippet.language}`}>
                    {snippet.code}
                  </code>
                </pre>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
