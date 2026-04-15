import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Last Asylum',
  tagline: 'Your Ultimate Guide to Surviving the Asylum',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://last-asylum.bankai-tech.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'TrueBankai416', // Usually your GitHub org/user name.
  projectName: 'Last-Asylum', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/TrueBankai416/Last-Asylum/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          blogTitle: 'Last Asylum News',
          blogDescription: 'Latest updates, patch notes, and community news for Last Asylum',
          editUrl:
            'https://github.com/TrueBankai416/Last-Asylum/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        docsRouteBasePath: '/docs',
        blogRouteBasePath: '/blog',
        indexBlog: true,
        indexDocs: true,
        indexPages: false,
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/last-asylum-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Last Asylum',
      logo: {
        alt: 'Last Asylum Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'guidesSidebar',
          position: 'left',
          label: 'Guides',
        },
        {
          type: 'docSidebar',
          sidebarId: 'charactersSidebar',
          position: 'left',
          label: 'Characters',
        },
        {
          type: 'docSidebar',
          sidebarId: 'strategiesSidebar',
          position: 'left',
          label: 'Strategies',
        },
        {
          type: 'docSidebar',
          sidebarId: 'eventsSidebar',
          position: 'left',
          label: 'Events',
        },
        {to: '/blog', label: 'News', position: 'left'},
        {
          href: 'https://github.com/TrueBankai416/Last-Asylum',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Guides',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/guides/getting-started',
            },
            {
              label: 'Beginner Tips',
              to: '/docs/guides/beginner-tips',
            },
          ],
        },
        {
          title: 'Game Info',
          items: [
            {
              label: 'Characters',
              to: '/docs/characters/overview',
            },
            {
              label: 'Events',
              to: '/docs/events/current',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: '#',
            },
            {
              label: 'Reddit',
              href: '#',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'News',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/TrueBankai416/Last-Asylum',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Unofficial Last Asylum Wiki. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
