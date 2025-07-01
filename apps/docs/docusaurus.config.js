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
  baseUrl: "/data_oculus_site/docs/",
  onBrokenLinks: "throw",
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
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Getting Started",
          },
          {
            type: "doc",
            docId: "configuring-datastore/index",
            position: "left",
            label: "Configure Datastore",
          },
          {
            type: "doc",
            docId: "onboarding-catalog/index",
            position: "left",
            label: "Data Catalog",
          },
          {
            type: "doc",
            docId: "features/index",
            position: "left",
            label: "Features",
          },
          {
            type: "doc",
            docId: "product/index",
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
                to: "/docs/intro",
              },
              {
                label: "Configure Datastore",
                to: "/docs/configuring-datastore",
              },
              {
                label: "Data Catalog",
                to: "/docs/onboarding-catalog",
              },
            ],
          },
          {
            title: "Product",
            items: [
              {
                label: "Features",
                to: "/docs/features",
              },

              {
                label: "Product Overview",
                to: "/docs/product",
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

