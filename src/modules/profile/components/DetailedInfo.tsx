import type { Employee } from '../../../shared/types'
import { generalInfo, contacts, travelInfo } from '../generalInfo'

import { RowInfo } from './RowInfo'

interface DetailedInfoProps {
    emp: Employee
}

export const DetailedInfo = ({ emp }: DetailedInfoProps) => {
    const general = generalInfo.map((item) => {
        let value = emp[item.field as keyof Employee] || ''
        let link: string = ''
        if (item.type === 'date') {
            value = `${emp.date_birth?.day || ''} ${emp.date_birth?.month || ''} ${emp.date_birth?.year || ''}`
        }
        if (item.type === 'manager') {
            value = `${emp.manager?.first_name || ''} ${emp.manager?.last_name || ''}`
            link = emp.manager?.id ? `/users/${emp.manager.id}` : ''
        }

        return {
            label: item.label,
            icon: item.icon,
            value,
            link,
            type: item.type,
            colorP: item.colorP,
        }
    })

    const contact = contacts.map((item) => {
        const value = emp[item.field as keyof Employee] || ''

        return {
            label: item.label,
            icon: item.icon,
            value,
            colorP: item.colorP,
        }
    })

    const travel = travelInfo.map((item) => {
        const value = emp[item.field as keyof Employee] || ''
        return {
            label: item.label,
            icon: item.icon,
            value,
        }
    })
    return (
        <div className="detailed-info">
            <p className="p-header">general info</p>
            <div className="type-info">
                {general.map((item, index) => (
                    <RowInfo
                        key={index}
                        label={item.label}
                        icon={item.icon}
                        value={item.value}
                        colorP={item.colorP}
                    />
                ))}
            </div>

            <p className="p-header">contacts</p>
            <div className="type-info">
                {contact.map((item, index) => (
                    <RowInfo
                        key={index}
                        label={item.label}
                        icon={item.icon}
                        value={item.value}
                        colorP={item.colorP}
                    />
                ))}
            </div>

            <p className="p-header">travel info</p>
            <div className="type-info">
                {travel.map((item, index) => (
                    <RowInfo
                        key={index}
                        label={item.label}
                        icon={item.icon}
                        value={item.value}
                    />
                ))}
            </div>
        </div>
    )
}
