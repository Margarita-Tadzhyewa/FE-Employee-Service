import type { Employee } from '../../../shared/types'

import { EmployeeCardGrid } from './EmployeeCardGrid'

interface EmployeesGridProps {
    employees: Employee[]
}

export const EmployeesGrid = ({ employees }: EmployeesGridProps) => {
    return (
        <div className="employees-cards-grid">
            {employees.map((emp) => (
                <div key={emp._id} className="grid-card">
                    <EmployeeCardGrid emp={emp} />
                </div>
            ))}
        </div>
    )
}
