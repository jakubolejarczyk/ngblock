import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: [
    '../**/*.@(mdx|stories.@(js|jsx|ts|tsx))',
    './*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-docs'],
  framework: {
    name: '@storybook/angular',
    options: {
      builder: {
        viteConfigPath: 'vite.config.mts',
      },
    },
  },
};

export default config;
