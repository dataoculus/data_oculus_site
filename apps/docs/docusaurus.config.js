// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "DataOculus",
  tagline: "Your Complete Data Management Platform",
  url: "https://your-dataoculus-site.com",
  baseUrl: "/docs/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "dataoculus", // Usually your GitHub org/user name.
  projectName: "data-oculus-docs", // Usually your repo name.
  presets: [
    [
      "docusaurus-preset-openapi",
      /** @type {import('docusaurus-preset-openapi').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        api: {
          path: 'openapi.json',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('docusaurus-preset-openapi').ThemeConfig} */
    ({
      navbar: {
        title: "DataOculus",
        logo: {
          alt: "DataOculus Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            to: "/intro",
            position: "left",
            label: "Getting Started",
          },
          {
            to: "/configuring-datastore",
            position: "left",
            label: "Configure Datastore",
          },
          {
            to: "/onboarding-catalog",
            position: "left",
            label: "Data Catalog",
          },
          {
            to: "/features",
            position: "left",
            label: "Features",
          },
          {
            to: "/product",
            position: "left",
            label: "Product",
          },
          { to: "/api", label: "API", position: "left" },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/dataoculus/dataoculus",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Documentation",
            items: [
              {
                label: "Getting Started",
                to: "/intro",
              },
              {
                label: "Configure Datastore",
                to: "/configuring-datastore",
              },
              {
                label: "Data Catalog",
                to: "/onboarding-catalog",
              },
            ],
          },
          {
            title: "Product",
            items: [
              {
                label: "Features",
                to: "/features",
              },

              {
                label: "Product Overview",
                to: "/product",
              },
              {
                label: "API Reference",
                to: "/api",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/dataoculus/dataoculus",
              },
              {
                label: "Blog",
                to: "/blog",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DataOculus. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

