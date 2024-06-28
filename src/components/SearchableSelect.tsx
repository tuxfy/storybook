import { useState } from 'react'
import Select, { SingleValue } from 'react-select'
import './searchableselect.css'

export type OptionType = {
	value: string
	label: string
}

export type FnChangeType = (selectedOption: OptionType | null) => void

interface SearchableSelectProps {
	label: string
	options: OptionType[]
	fnOnChange: FnChangeType
}

export const SearchableSelect = ({
	label,
	options,
	fnOnChange,
	...props
}: SearchableSelectProps) => {
	const [selectedOption, setSelectedOption] = useState<SingleValue<OptionType>>(null)

	const handleChange = (option: SingleValue<OptionType>) => {
		setSelectedOption(option)
		fnOnChange(option ? option : null)
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
