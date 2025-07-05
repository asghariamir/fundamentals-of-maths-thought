import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
  title: 'Fundamentals of Maths Thought',
  tagline: 'See mathematics, speak its language, and settle its truths',
  favicon: 'img/favicon.ico',

  future: {v4: true},

  url: 'https://asghariamir.github.io',
  baseUrl: '/fundamentals-of-maths-thought/',

  organizationName: 'asghariamir',
  projectName: 'fundamentals-of-maths-thought',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {defaultLocale: 'en', locales: ['en']},

  presets: [
    [
      'classic',
      {
        /** docs only — blog disabled **/
        docs: {
          sidebarPath: './sidebars.ts',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          editUrl:
            'https://github.com/asghariamir/fundamentals-of-maths-thought/edit/main/',
        },
        blog: false,
        theme: {customCss: './src/css/custom.css'},
      },
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css',
      type: 'text/css',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'FOMT',
      logo: {alt: 'FOMT logo', src: 'img/logo.svg'},
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          label: 'Book',
          position: 'left',
        },
        {
          href: 'https://github.com/asghariamir/fundamentals-of-maths-thought',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [{label: 'Math demo', to: '/docs/demo-math'}],
        },
        {
          title: 'Community',
          items: [
            {label: 'Stack Overflow', href: 'https://stackoverflow.com/questions/tagged/docusaurus'},
            {label: 'Discord', href: 'https://discordapp.com/invite/docusaurus'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} asghariamir.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;

