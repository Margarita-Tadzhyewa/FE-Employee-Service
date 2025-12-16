import { useNavigate } from 'react-router-dom'

import type { Employee } from '../../../shared/types'
import remoteIcon from '../../../assets/icons/remote-icon.svg'
import bagIcon from '../../../assets/icons/bag.svg'
import defAvatar from '../../../assets/images/default-avatar.jpg'

interface EmployeeCardListProps {
    emp: Employee
}

export const EmployeeCardList = ({ emp }: EmployeeCardListProps) => {
    const navigate = useNavigate()
    const onClickCard = () => {
        navigate(`/users/${emp._id}`)
    }

    return (
        <div className="employe-single-list-card" onClick={onClickCard}>
            <div className="avatar-name">
                <img src={emp.user_avatar || defAvatar} alt="employees-avatar" />
                {emp.isRemoteWork && (
                    <span className="remote-icon">
                        <img src={remoteIcon} alt="remote-icon" className="remote-icon-svg"/>
                    </span>
                )}
                <p>
                    {emp.first_name} {emp.last_name}
                </p>
            </div>

            <img src={bagIcon} alt="bag-icon" />
            <p>{emp.department}</p>
            <p>{emp.room}</p>
        </div>
    )
}
