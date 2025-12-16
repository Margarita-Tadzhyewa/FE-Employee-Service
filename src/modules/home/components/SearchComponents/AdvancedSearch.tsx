import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import type { Employee } from '../../../../shared/types'

interface AdvancedSearchProps {
    employees: Employee[]
    setFilteredEmployees: (emps: Employee[]) => void
}

export const AdvancedSearch = ({
    employees,
    setFilteredEmployees,
}: AdvancedSearchProps) => {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        username: '',
        email: '',
        phone: '',
        skypeId: '',
        building: 'any',
        room: '',
        department: 'any',
    })

    const onSearch = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target
        setForm((item) => ({ ...item, [name]: value }))
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const filtered = employees.filter((emp) => {
            const fullName = `${emp.first_name} ${emp.last_name}`.toLowerCase()

            return (
                (!form.username ||
                    fullName.includes(form.username.toLowerCase())) &&
                (!form.email ||
                    emp.email
                        ?.toLowerCase()
                        .includes(form.email.toLowerCase())) &&
                (!form.phone || emp.phone?.includes(form.phone)) &&
                (!form.skypeId ||
                    emp.skype
                        ?.toLowerCase()
                        .includes(form.skypeId.toLowerCase())) &&
                (form.building === 'any' || emp.building === form.building) &&
                (!form.room || emp.room?.includes(form.room)) &&
                (form.department === 'any' ||
                    emp.department === form.department)
            )
        })

        if (filtered.length === 0) {
            navigate('/not-found')
            return
        }

        setFilteredEmployees(filtered)
    }
    return (
        <div className="search-forms-advanced">
            <form className="advanced-search" onSubmit={onSubmit}>
                <div className="form-name">
                    <p>Name</p>
                    <input
                        type="text"
                        name="username"
                        placeholder="John Smith"
                        onChange={onSearch}
                    />
                </div>

                <div className="form-email">
                    <p>Email</p>
                    <input
                        type="text"
                        name="email"
                        placeholder="john.smith@leverx.cpm"
                        onChange={onSearch}
                    />
                </div>

                <div className="row">
                    <div className="form-phone">
                        <p>Phone</p>
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone number"
                            onChange={onSearch}
                        />
                    </div>

                    <div className="form-skype-id">
                        <p>Skype</p>
                        <input
                            type="text"
                            name="skypeId"
                            placeholder="SkypeID"
                            onChange={onSearch}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="form-building">
                        <p>Building</p>
                        <select name="building" onChange={onSearch}>
                            <option value="any">Any</option>
                            <option value="Belarus">
                                Pilsudskiego 69 (Poland)
                            </option>
                            <option value="Georgia">
                                Pilsudskiego 70 (Poland)
                            </option>
                            <option value="Germany">Germany</option>
                        </select>
                    </div>

                    <div className="form-room">
                        <p>Room</p>
                        <input
                            type="text"
                            name="room"
                            placeholder="303.1"
                            onChange={onSearch}
                        />
                    </div>
                </div>

                <div className="form-department">
                    <p>Department</p>
                    <select name="department" onChange={onSearch}>
                        <option value="any">Any</option>
                        <option value="Web & Mobile">Web & Mobile</option>
                        <option value="Design">Design</option>
                        <option value="Germany">Germany</option>
                    </select>
                </div>

                <button type="submit" className="search-button-advanced">
                    search
                </button>
            </form>
        </div>
    )
}
