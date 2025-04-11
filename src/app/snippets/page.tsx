'use client';

import { FaCode } from 'react-icons/fa';
import { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-json';

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
            return interaction.reply({ content: 'You do not have permission to restrict tickets.', ephemeral: true });
        }

        await ticketChannel.permissionOverwrites.edit(config.SupportRoleId, {
            ViewChannel: false
        });

        if (ticketChannel.name.startsWith('developer-')) {
            await ticketChannel.permissionOverwrites.edit(config.DeveloperRoleId, {
                ViewChannel: false
            });

            await ticketChannel.permissionOverwrites.edit(config.DirectorRoleId, {
                ViewChannel: true
            });
        } else if (
            ticketChannel.name.startsWith('general-')
        ) {
            await ticketChannel.permissionOverwrites.edit(config.DeveloperRoleId, {
                ViewChannel: false
            });

            await ticketChannel.permissionOverwrites.edit(config.DirectorRoleId, {
                ViewChannel: true
            });
        }

        await ticketChannel.setParent(config.restrictedCategoryId, { lockPermissions: false });

        const restrictembed = new EmbedBuilder()
            .setColor('Blurple')
            .setTitle('Ticket Restricted')
            .setDescription(\`This ticket has been **escalated** to <@&\${config.DirectorRoleId}>.\`)

        await ticketChannel.send({ embeds: [restrictembed] });

        await interaction.reply({ content: 'The ticket has been restricted. Directors have been notified.', ephemeral: true });
    }
};`
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Code Snippets</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10">
          A collection of code snippets from my Discord bot projects showcasing my coding style and expertise.
        </p>

        <div className="space-y-10">
          {codeSnippets.map((snippet) => (
            <div key={snippet.id} className="bg-gray-900/80 rounded-lg overflow-hidden">
              <div className="bg-gray-800 p-3 md:p-4 flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-center mb-2 md:mb-0">
                  <FaCode className="text-blue-400 mr-2 md:mr-3" />
                  <h3 className="text-lg md:text-xl font-semibold">{snippet.title}</h3>
                </div>
                <span className="px-2 py-1 bg-blue-600/30 text-blue-400 rounded text-sm w-fit">
                  {snippet.language}
                </span>
              </div>
              <div className="p-3 md:p-4">
                <p className="text-gray-300 text-sm md:text-base mb-4">{snippet.description}</p>
                <div className="bg-gray-950 rounded-lg p-2 md:p-4 overflow-x-auto text-sm">
                  <pre className="!bg-transparent">
                    <code className={`language-${snippet.language}`}>
                      {snippet.code}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
