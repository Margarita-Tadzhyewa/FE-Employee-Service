interface InputBasicFieldProps {
    label: string
    name: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputBasicField = ({
    label,
    name,
    value,
    onChange,
}: InputBasicFieldProps) => {
    return (
        <div>
            <label>{label}</label>
            <input type="text" name={name} value={value || ''} onChange={onChange} />
        </div>
    )
}
