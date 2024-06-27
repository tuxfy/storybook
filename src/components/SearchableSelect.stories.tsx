import type { Meta, StoryObj } from '@storybook/react'
import { SearchableSelect } from './SearchableSelect'

const meta: Meta<typeof SearchableSelect> = {
	title: 'Searchable Select',
	component: SearchableSelect,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof SearchableSelect>

export default meta
type Story = StoryObj<typeof meta>

export const Select: Story = {
	args: {
		label: 'Labeltext',
	},
}
