import { useState } from 'react'

import { EmployeeRoleCard } from '../modules/settings/EmployeeRoleCard'
import '../app/styles/SettingsPage/defaultStyle.scss'
import { useGetAllEmployeesQuery } from '../../store/api/employeesApi'
import { NotFoundBlock } from '../shared/components/NotFoundBlock'
import { SearchInput } from '../shared/components/SearchInput'

export const SettingsPage = () => {
    const [search, setSearch] = useState('')
    const { data: allEmployees = [] } = useGetAllEmployeesQuery()

    const filteredEmp = allEmployees.filter((emp) => {
        const fullName = `${emp.first_name} ${emp.last_name}`.toLowerCase()
        return (
            fullName.includes(search.toLowerCase()) ||
            emp._id.toLowerCase().includes(search.toLowerCase())
        )
    })

    return (
        <div className="container">
            <div className="permission-block">
                <p>roles & permissions</p>
                <div className="title-tab">
                    <div>
                        <SearchInput
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className=""
                            placeholder="John Smith"
                        />
                    </div>
                    <p>Address book role</p>
                    <p>Admin</p>
                </div>

                <div className="employees-roles">
                    {filteredEmp.length === 0 ? (
                        <NotFoundBlock />
                    ) : (
                        filteredEmp.map((emp, index) => (
                            <EmployeeRoleCard
                                key={emp._id}
                                employee={emp}
                                index={index}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}
