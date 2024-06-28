import type { Meta, StoryObj } from '@storybook/react'
import { within, expect, userEvent, fn } from '@storybook/test'

import { Header } from './Header'

const meta: Meta<typeof Header> = {
	title: 'Header',
	component: Header,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs'],
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
		layout: 'fullscreen',
	},
	args: {
		onLogin: fn(),
		onLogout: fn(),
		onCreateAccount: fn(),
	},
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const LoggedIn: Story = {
	args: {
		title: 'Storybook',
		user: {
			name: 'Jane Doe',
		},
	},
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement)

		const welcome = await canvas.getByTestId('welcome')
		await expect(welcome).toHaveTextContent(args.user?.name || '')

		const logoutButton = await canvas.getByTestId('logout')
		await userEvent.click(logoutButton)
		await expect(args.onLogout).toHaveBeenCalled()
	},
}

export const LoggedOut: Story = {
	args: {
		title: 'Storybook',
	},
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement)

		const loginButton = await canvas.getByTestId('logout')
		await userEvent.click(loginButton)
		await expect(args.onLogin).toHaveBeenCalled()

		const signupButton = await canvas.getByTestId('signup')
		await userEvent.click(signupButton)
		await expect(args.onCreateAccount).toHaveBeenCalled()
	},
}
