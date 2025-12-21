import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'The Complete Guide to Embodied Intelligence',
  favicon: 'img/favicon.ico', // static/img/logo.svg

  // Future flags
  future: {
    v4: true,
  },

  // Site URL & base URL
  url: 'https://yourdomain.com',
  baseUrl: '/docs',

  // GitHub deployment info
  organizationName: 'Dua456',
  projectName: 'Physical-AI-Humanoid-Robotics',

  // Broken links handling
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Internationalization
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Custom fields (optional)
  customFields: {
    apiUrl: process.env.DOCUSAURUS_API_URL || 'http://127.0.0.1:8000',
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/', 
          editUrl:
            'https://github.com/Dua456/Physical-AI-Humanoid-Robotics/tree/main/',
        },
        blog: false, // Disable blog
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',

    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'Physical AI & Humanoid Robotics',
      
      style: 'dark',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Textbook',
        },
        {
          href: 'https://github.com/Dua456/Physical-AI-Humanoid-Robotics',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Curriculum',
          items: [
            { label: 'Start Reading', to: '/docs/category/module-1-ros-2-nervous-system' },
            { label: 'Modules', to: '/docs/category/module-1-ros-2-nervous-system' },
          ],
        },
        {
          title: 'Resources',
          items: [
            { label: 'ROS 2 Docs', href: 'https://docs.ros.org/en/humble/' },
            { label: 'NVIDIA Isaac', href: 'https://developer.nvidia.com/isaac' },
            { label: 'Gazebo', href: 'https://gazebosim.org/' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'Discord', href: 'https://discordapp.com/invite/docusaurus' },
            { label: 'Twitter', href: 'https://twitter.com/docusaurus' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'GitHub', href: 'https://github.com/Dua456/Physical-AI-Humanoid-Robotics' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Physical AI & Humanoid Robotics. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
