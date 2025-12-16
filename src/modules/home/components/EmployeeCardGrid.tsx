import { useNavigate } from 'react-router-dom'

import type { Employee } from '../../../shared/types'

interface EmployeeCardGridProps {
    emp: Employee
}

export const EmployeeCardGrid = ({ emp }: EmployeeCardGridProps) => {
    const navigate = useNavigate()
    const onClickCard = () => {
        navigate(`/users/${emp._id}`)
    }

    return (
        <div className="employee-single-card" onClick={onClickCard}>
            <img
                src={
                    emp.user_avatar || '../../assets/images/default-avatar.jpg'
                }
                alt="employees-avatar"
            />
            <p className="empl-name first-last-name">
                {emp.first_name} {emp.last_name}
            </p>
            <div className="line"></div>
            <div className="common-info">
                <div>
                    <img src="./assets/icons/bag.svg" alt="bag-icon" />
                    <p className="department">{emp.department}</p>
                </div>
                <div>
                    <img src="./assets/icons/door.svg" alt="room-icon" />
                    <p className="room">{emp.room}</p>
                </div>
            </div>
        </div>
    )
}
