interface RowInputProps {
    label: string
    icon: string
    name: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const RowInput = ({
    label,
    icon,
    name,
    value,
    onChange,
}: RowInputProps) => {
    return (
        <div className="row-info">
            <div className="label">
                <img src={icon} alt={label} />
                <p>{label}</p>
            </div>

            <div className="value">
                <input
                    type="text"
                    name={name}
                    value={value}
                    onChange={onChange}
                />
            </div>
        </div>
    )
}
