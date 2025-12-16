import type { Employee } from '../../../../shared/types'
import { generalInfo, contacts, travelInfo } from '../../generalInfo'
import { months } from '../../../../shared/utils'
import {
    managers,
    departments,
    buildings,
    rooms,
    citizenships,
    years
} from '../../../../shared/constants/formSelectConstants'
import { RowInput } from '../RowInput'

export interface DetailedForm {
    birthDay: string
    birthMonth: string
    birthYear: string
    managerId: string
    [key: string]: string
}

interface EditDetailedProps {
    emp: Employee
    form: DetailedForm
    setForm: React.Dispatch<React.SetStateAction<DetailedForm>>
}

export const EditDetailed = ({ emp, form, setForm }: EditDetailedProps) => {
    const onChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target
        setForm((fields) => ({ ...fields, [name]: value }))
    }

    const general = generalInfo
        .filter((item) => item.type !== 'date' && item.type !== 'manager')
        .map((item) => {
            const value = form[item.field]
            return {
                label: item.label,
                icon: item.icon,
                value,
                colorP: item.colorP,
                field: item.field,
            }
        })

    const contact = contacts.map((item) => {
        const value = form[item.field]
        return {
            label: item.label,
            icon: item.icon,
            value,
            field: item.field,
        }
    })

    const travel = travelInfo.map((item) => {
        const value = form[item.field]
        return {
            label: item.label,
            icon: item.icon,
            value,
            field: item.field,
        }
    })

    return (
        <div className="detailed-info">
            <p className="p-header">general info</p>
            <div className="type-info">
                {general.map((item, index) => {
                    let options: string[] = []
                    if (item.field === 'department') options = departments
                    if (item.field === 'building') options = buildings
                    if (item.field === 'room') options = rooms

                    return (
                        <RowInput
                            key={index}
                            label={item.label}
                            icon={item.icon}
                            name={item.field}
                            value={item.value}
                            onChange={onChange}
                            type={
                                ['department', 'building', 'room'].includes(
                                    item.field
                                )
                                    ? 'select'
                                    : 'text'
                            }
                            options={options}
                        />
                    )
                })}
            </div>

            <div className="row-info">
                <div className="label">
                    <img src="/assets/icons/calendar.svg" alt="date-birth" />
                    <p>Date of birth</p>
                </div>
                <div className="birthdate">
                    <div className="input-container">
                        <input
                            type="number"
                            name="birthDay"
                            value={form.birthDay || ''}
                            onChange={onChange}
                            placeholder="Day"
                            min="1"
                            max="31"
                        />
                    </div>

                    <div className="input-container">
                        <select
                            name="birthMonth"
                            value={form.birthMonth || ''}
                            onChange={onChange}
                        >
                            <option value="">Month</option>
                            {months.map((month, index) => (
                                <option key={index} value={index + 1}>
                                    {month}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="input-container">
                        <select
                            name="birthYear"
                            value={form.birthYear || ''}
                            onChange={onChange}
                        >
                            <option value="">Year</option>
                            {years.map((year) => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <div className="row-info">
                <div className="label">
                    <img src="/assets/icons/manager.svg" alt="date-birth" />
                    <p>Manager</p>
                </div>
                <div className="input-container">
                    <select
                        name="managerId"
                        value={form.managerId || ''}
                        onChange={onChange}
                    >
                        <option value="">Choose manager</option>
                        {managers.map((manager) => (
                            <option key={manager.id} value={manager.id}>
                                {manager.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <p className="p-header">contacts</p>
            <div className="type-info">
                {contact.map((item, index) => (
                    <RowInput
                        key={index}
                        label={item.label}
                        icon={item.icon}
                        name={item.field}
                        value={item.value}
                        onChange={onChange}
                    />
                ))}
            </div>

            <p className="p-header">travel info</p>
            <div className="type-info">
                {travel.map((item, index) => (
                    <RowInput
                        key={index}
                        label={item.label}
                        icon={item.icon}
                        name={item.field}
                        value={item.value}
                        onChange={onChange}
                        type={item.field === 'citizenship' ? 'select' : 'text'}
                        options={
                            item.field === 'citizenship' ? citizenships : []
                        }
                    />
                ))}
            </div>
        </div>
    )
}
