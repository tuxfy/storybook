import type { Meta, StoryObj } from '@storybook/react'
import { SearchableSelect, OptionType } from './SearchableSelect'
import { within, screen, expect, userEvent, fn } from '@storybook/test'

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

const options: OptionType[] = [
	{ value: 'option1', label: 'Option 1' },
	{ value: 'option2', label: 'Option 2' },
	{ value: 'option3', label: 'Option 3' },
]

const label = 'Labeltext'
const selectedLabel = options[0].label

export const Select: Story = {
	args: {
		label,
		options,
		fnOnChange: fn(),
	},
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement)

		const selectElement = await canvas.getByText('Select...')
		await userEvent.click(selectElement)

		const optionToSelect = await screen.findByText(selectedLabel)
		expect(optionToSelect).toBeInTheDocument()

		await userEvent.click(optionToSelect)

		await expect(args.fnOnChange).toHaveBeenCalled()

		expect(screen.getByText(selectedLabel)).toBeInTheDocument()
	},
}
