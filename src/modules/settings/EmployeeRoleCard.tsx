import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { useChangeRoleMutation } from '../../../store/api/employeesApi'
import type { Employee, Role } from '../../shared/types'
import type { RootState } from '../../../store/store'

import { isCanChangeRole } from './isCanChangeRole'

interface EmployeeRoleProps {
    employee: Employee
    index: number
}

export const EmployeeRoleCard = ({ employee, index }: EmployeeRoleProps) => {
    const currentRole = employee.role
    const navigate = useNavigate()
    const [changeRole] = useChangeRoleMutation()
    const currentUser = useSelector((state: RootState) => state.user.user)

    const onClickCard = () => {
        navigate(`/users/${employee._id}`)
    }

    const onChangeRole = async (role: Role) => {
        const canEdit = isCanChangeRole(employee._id, currentUser?._id)
        if (!canEdit) return
        if (role === currentRole) return
    
        try {
            await changeRole({
                id: employee._id,
                currentRole: role,
            }).unwrap()
        } catch (err) {
            console.log('error changing role', err)
        }
    }

    return (
        <div className={`single-empl ${index % 2 === 0 ? 'grey' : ''}`}>
            <div className="image-name" onClick={onClickCard}>
                <img src={employee.user_avatar || '../../assets/images/default-avatar.jpg'} alt="emp-image" />
                <p>
                    {employee.first_name} {employee.last_name}
                </p>
            </div>
            <div className="change-role">
                <button
                    className={`empl-role ${
                        currentRole === 'EMPLOYEE' ? 'active-button' : ''
                    }`}
                    onClick={() => onChangeRole('EMPLOYEE')}
                >
                    Employee
                </button>
                <button
                    className={`hr-role ${
                        currentRole === 'HR' ? 'active-button' : ''
                    }`}
                    onClick={() => onChangeRole('HR')}
                >
                    HR
                </button>
            </div>
            <div className="admin-tab">
                <button
                    className={`admin-role ${
                        currentRole === 'ADMIN' ? 'active-button' : ''
                    }`}
                    onClick={() => onChangeRole('ADMIN')}
                >
                    Admin
                </button>
            </div>
        </div>
    )
}
