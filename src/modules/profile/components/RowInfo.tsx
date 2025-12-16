import { Link } from 'react-router-dom'
interface RowInfoProps {
    label: string
    icon: string
    value: string
    type?: string
    link?: string
    colorP?: string
}

export const RowInfo = ({ label, icon, value, link, colorP }: RowInfoProps) => {
    return (
        <div className="row-info">
            <div className="label">
                <img src={icon} alt={label} />
                <p>{label}</p>
            </div>

            <div className={`value ${colorP === 'blue' ? 'blue-value' : ''}`}>
                {link ? <Link to={link}>{value}</Link> : value}
            </div>
        </div>
    )
}
