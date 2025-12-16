import { useState } from 'react'

import { SearchTab } from '../modules/home/components/SearchComponents/SearchTab'
import { Employees } from '../modules/home/components/Employees'

import '../app/styles/mainPage/initStyles.scss'

import type { Employee } from '../shared/types'
import { useGetAllEmployeesQuery } from '../../store/api/employeesApi'

export const HomePage = () => {
    const [filteredEmployees, setFilteredEmployees] = useState<
        Employee[] | null
    >(null)
    const { data: allEmployees = [] } = useGetAllEmployeesQuery()
    const filterEmpls = (filtered: Employee[]) => setFilteredEmployees(filtered)

    return (
        <>
            <div className="background-search"></div>
            <div className="container">
                <div className="main-info">
                    <SearchTab
                        employees={allEmployees}
                        setFilteredEmployees={filterEmpls}
                    />
                    <Employees
                        employees={
                            filteredEmployees !== null
                                ? filteredEmployees
                                : allEmployees
                        }
                    />
                </div>
            </div>
        </>
    )
}
