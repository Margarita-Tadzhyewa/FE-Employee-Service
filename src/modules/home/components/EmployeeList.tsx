import type { Employee } from '../../../shared/types'

import { CommonToolBar } from './CommonListToolBar'
import {EmployeeCardList} from './EmployeeCardList'

interface EmployeesListProps {
    employees: Employee[]
}

export const EmployeesList = ({ employees }: EmployeesListProps) => {
    return (
        <div className="employees-cards-list">
            <CommonToolBar/>
            <div id="list-container">
                {employees.map((emp) => (
                    <div key={emp._id} className="list-row">
                        <EmployeeCardList emp={emp}/>
                    </div>
                ))}
            </div>
        </div>
    )
}
