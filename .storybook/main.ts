import type { StorybookConfig } from '@storybook/react-webpack5'

const config: StorybookConfig = {
	stories: ['../src/**/*.stories.tsx'],
	addons: [
		'@storybook/addon-webpack5-compiler-swc',
		'@storybook/addon-onboarding',
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@chromatic-com/storybook',
		'@storybook/addon-interactions',
	],
	framework: {
		name: '@storybook/react-webpack5',
		options: {},
	},
}
export default config

//https://prateeksurana.me/blog/react-component-library-using-storybook-7/
//https://dev.to/andypotts/creating-a-reusable-component-library-with-react-storybook-and-webpack-2ple
