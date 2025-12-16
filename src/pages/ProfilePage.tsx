import { useParams } from 'react-router-dom'
import { useState } from 'react'

import { BasicInfo } from '../modules/profile/components/BasicInfo'
import { DetailedInfo } from '../modules/profile/components/DetailedInfo'
import { EditProfilePage } from '../modules/profile/components/EditComponents/EditProfilePage'
import { useGetEmployeeByIdQuery } from '../../store/api/employeesApi'
import '../app/styles/ProfilePage/defaultStyle.scss'

export const ProfilePage = () => {
    const { id } = useParams<{ id: string }>()
    const [isEditing, setIsEditing] = useState(false)

    const { data: singleEmp } = useGetEmployeeByIdQuery(id!)
    if (!singleEmp) return

    return (
        <div className="container">
            <div className="profile-info-page">
                {!isEditing ? (
                    <>
                        <BasicInfo
                            emp={singleEmp}
                            onEdit={() => setIsEditing(true)}
                        />
                        <DetailedInfo emp={singleEmp} />
                    </>
                ) : (
                    <EditProfilePage
                        emp={singleEmp}
                        onSave={() => setIsEditing(false)}
                    />
                )}
            </div>
        </div>
    )
}
