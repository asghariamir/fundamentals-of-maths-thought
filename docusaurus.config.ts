// docusaurus.config.ts
import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
  title: 'Fundamentals of Maths Thought',
  tagline: 'See mathematics, speak its language, and settle its truths',
  favicon: 'img/favicon.ico',

  future: {v4: true},

  url: 'https://asghariamir.github.io',
  baseUrl: '/fundamentals-of-maths-thought/',

  // 👇 update to your real GitHub org/user + repo
  organizationName: 'asghariamir',
  projectName: 'fundamentals-of-maths-thought',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {defaultLocale: 'en', locales: ['en']},

  presets: [
    [
      'classic',
      {
        docs: {
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],

          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/asghariamir/fundamentals-of-maths-thought/edit/main/',
        },
        blog: {
          showReadingTime: false,
          feedOptions: {type: ['rss', 'atom'], xslt: true},
          editUrl:
            'https://github.com/asghariamir/fundamentals-of-maths-thought/edit/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {customCss: './src/css/custom.css'},
      } satisfies Preset.Options,
    ],
  ],

  /* ──────────────────────────  KaTeX CSS  ────────────────────────── */
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
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',   // must match
          label: 'Book',
          position: 'left',
        },
        { href: 'https://github.com/asghariamir/fundamentals-of-maths-thought', label: 'GitHub', position: 'right' },
      ],
    },
    
    footer: {
      style: 'dark',
      links: [
        {title: 'Docs', items: [{label: 'Tutorial', to: '/docs/intro'}]},
        {title: 'Community', items: [
          {label: 'Stack Overflow', href: 'https://stackoverflow.com/questions/tagged/docusaurus'},
          {label: 'Discord', href: 'https://discordapp.com/invite/docusaurus'},
          {label: 'X', href: 'https://x.com/docusaurus'},
        ]},
        {title: 'More', items: [
          {label: 'Blog', to: '/blog'},
          {label: 'GitHub', href: 'https://github.com/asghariamir/fundamentals-of-maths-thought'},
        ]},
      ],
      copyright: `Copyright © ${new Date().getFullYear()} asghariamir.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
