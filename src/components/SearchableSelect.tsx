import React, { useState } from 'react'
import Select, { SingleValue } from 'react-select'
import './searchableselect.css'

type OptionType = {
	value: string
	label: string
}

const options: OptionType[] = [
	{ value: 'option1', label: 'Option 1' },
	{ value: 'option2', label: 'Option 2' },
	{ value: 'option3', label: 'Option 3' },
]

interface SearchableSelectProps {
	label: string
	onChange?: () => void
}

// TODO: data und onChange über props
export const SearchableSelect = ({ label, ...props }: SearchableSelectProps) => {
	const [selectedOption, setSelectedOption] = useState<SingleValue<OptionType>>(null)

	const handleChange = (option: SingleValue<OptionType>) => {
		setSelectedOption(option)
	}

	return (
		<div className="searchable-select-container">
			<label className="searchable-select-label">{label}</label>
			<Select
				value={selectedOption}
				onChange={handleChange}
				options={options}
				isSearchable
				className="searchable-select"
				{...props}
			/>
		</div>
	)
}
