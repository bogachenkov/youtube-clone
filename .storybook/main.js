const path = require('path');
module.exports = {
  "stories": [
    "../modules/**/*.stories.mdx",
    "../modules/**/*.stories.@(js|jsx|ts|tsx)",
    "../pages/**/*.stories.mdx",
    "../pages/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  "staticDirs": [
    '../public'
  ],
  "framework": {
    "name": "@storybook/nextjs",
    "options": {}
  },
  "docs": {
    "docsPage": true
  },
  features: {
    interactionsDebugger: true
  },
}