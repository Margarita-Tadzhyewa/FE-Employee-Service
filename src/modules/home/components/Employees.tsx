import { useState, useEffect } from 'react'

import type { Employee } from '../../../shared/types'
import { useMediaQuery } from '../useMediaQuery'
import { NotFoundBlock } from '../../../shared/components/NotFoundBlock'

import { EmployeeToolBar } from './EmployeeToolBar'
import { EmployeesList } from './EmployeeList'
import { EmployeesGrid } from './EmployeeGrid'

interface EmployeesProps {
    employees: Employee[]
}

export const Employees = ({ employees }: EmployeesProps) => {
    const isMobile = useMediaQuery('(max-width: 477px)')
    const [viewType, setViewType] = useState<'grid' | 'list'>('grid')

    useEffect(() => {
        if (isMobile) {
            setViewType('list')
        }
    }, [isMobile])

    return (
        <div className="employees">
            <EmployeeToolBar
                amount={employees.length}
                typeView={viewType}
                setTypeView={setViewType}
            />

            {employees.length === 0 ? (
                <NotFoundBlock />
            ) : viewType === 'grid' ? (
                <EmployeesGrid employees={employees} />
            ) : (
                <EmployeesList employees={employees} />
            )}
        </div>
    )
}
