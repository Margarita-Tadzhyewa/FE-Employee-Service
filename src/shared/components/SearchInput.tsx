import React from 'react'

interface SearchInputProps {
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    className?: string
}

export const SearchInput = ({
    value,
    onChange,
    placeholder = 'search',
    className = '',
}: SearchInputProps) => {
    return (
        <label className={className}>
            <span className="search-icon">
                <img src="src/assets/icons/search.svg" alt="search" />
            </span>
            <input
                type="text"
                placeholder={placeholder}
                name="word"
                className="search"
                value={value}
                onChange={onChange}
            />
        </label>
    )
}