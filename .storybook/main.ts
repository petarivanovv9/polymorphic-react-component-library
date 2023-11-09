import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
    stories: [
        '../src/lib/**/*.mdx',
        '../src/lib/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-a11y',
        'storybook-dark-mode',
        'storybook-addon-designs',
    ],
    docs: {
        autodocs: true,
    },
    core: {},
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
};

export default config;
