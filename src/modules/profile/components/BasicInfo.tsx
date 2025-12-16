import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import type { Employee } from '../../../shared/types'
import type { RootState } from '../../../../store/store'

interface BasicInfoProps {
    emp: Employee
    onEdit: () => void
}

export const BasicInfo = ({ emp, onEdit }: BasicInfoProps) => {
    const user = useSelector((state: RootState) => state.user.user)
    const copyUrl = () => {
        navigator.clipboard
            .writeText(window.location.href)
    }

    return (
        <div className="basic-info">
            <Link to="/">
                <button className="arrow-back">
                    <img src="../../assets/icons/arrow.svg" alt="arrow-icon" />
                </button>
            </Link>

            <div className="avatar-img">
                <img
                    src={
                        emp.user_avatar || '../assets/images/default-avatar.jpg'
                    }
                    alt="profile-photo"
                    className="profile-photo"
                />
                {emp.isRemoteWork && (
                    <p className="is-remote-work">
                        <img
                            src="../../assets/icons/remote-icon.svg"
                            alt="remote-icon"
                        />
                    </p>
                )}
            </div>
            <div className="full-name">
                <p className="first_name">
                    {emp.first_name || ''} {emp.last_name || ''}
                </p>
            </div>

            <div className="full-native-name">
                <p className="last_native_name">
                    {emp.last_name || ''} {emp.middle_native_name || ''}{' '}
                    {emp.first_name || ''}
                </p>
            </div>
            <button className="copy-link" onClick={copyUrl}>
                <img src="../../assets/icons/copy.svg" alt="copy-icon" />
                <a href="#">
                    <p>Copy Link</p>
                </a>
            </button>
            {(user?.role === 'ADMIN' || user?._id === emp.manager?.id) && (
                <>
                    <button className="edit" onClick={onEdit}>
                        <img src="../../assets/icons/pen.svg" alt="pen-icon" />
                        <p>edit</p>
                    </button>
                </>
            )}
        </div>
    )
}
