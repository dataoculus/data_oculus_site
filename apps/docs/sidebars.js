/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a "Next" navigation link in the footer of each doc
 - provide a `docs` tag for any individual doc that should show up on the doc overview page
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Getting Started',
    },
    {
      type: 'category',
      label: 'Configure Datastore',
      items: [
        'configuring-datastore/index',
      ],
    },
    {
      type: 'category',
      label: 'Data Catalog',
      items: [
        'onboarding-catalog/index',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      items: [
        'features/index',
      ],
    },
    {
      type: 'category',
      label: 'Product',
      items: [
        'product/index',
      ],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-page'],
    },
  ],
   */
};

module.exports = sidebars;
