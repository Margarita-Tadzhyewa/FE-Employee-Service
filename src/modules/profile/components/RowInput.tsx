interface RowInputProps {
    label: string
    icon: string
    name: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
    type?: 'text' | 'select'
    options?: string[]
}

export const RowInput = ({
    label,
    icon,
    name,
    value,
    onChange,
    type = 'text',
    options = [],
}: RowInputProps) => {
    return (
        <div className="row-info">
            <div className="label">
                <img src={icon} alt={label} />
                <p>{label}</p>
            </div>

            <div className="value">
                {type === 'select' ? (
                    <select name={name} value={value || ''} onChange={onChange}>
                        <option value="">Select {label.toLowerCase()}</option>
                        {options.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                ) : (
                    <input
                        type="text"
                        name={name}
                        value={value || ''}
                        onChange={onChange}
                        placeholder={`Enter ${label.toLowerCase()}`}
                    />
                )}
            </div>
        </div>
    )
}
