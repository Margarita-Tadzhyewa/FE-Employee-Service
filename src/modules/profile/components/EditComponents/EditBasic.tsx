import type { Employee } from '../../../../shared/types'
import { InputBasicField } from '../InputBasicField'
import remoteIcon from '../../../../assets/icons/remote-icon.svg'
import defAvatar from '../../../../assets/images/default-avatar.jpg'

export interface BasicForm {
    first_name: string
    last_name: string
    middle_native_name: string
    first_native_name: string
    last_native_name: string
}

interface EditBasicProps {
    emp: Employee
    form: BasicForm
    setForm: React.Dispatch<React.SetStateAction<BasicForm>>
}

export const EditBasic = ({ emp, form, setForm }: EditBasicProps) => {
    const changeProfileData = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setForm((fields) => ({ ...fields, [name]: value }))
    }

    return (
        <div className="basic-info">
            <div className="avatar-img">
                <img
                    src={
                        emp.user_avatar || defAvatar
                    }
                    alt="profile-photo"
                    className="profile-photo"
                />
                {emp.isRemoteWork && (
                    <p className="is-remote-work">
                        <img
                            src={remoteIcon}
                            alt="remote-icon"
                        />
                    </p>
                )}
            </div>
            <div className="edit-name-fields">
                <InputBasicField
                    label="First name"
                    name="first_name"
                    value={form.first_name}
                    onChange={changeProfileData}
                />

                <InputBasicField
                    label="Last name"
                    name="last_name"
                    value={form.last_name}
                    onChange={changeProfileData}
                />

                <InputBasicField
                    label="Middle native name"
                    name="middle_native_name"
                    value={form.middle_native_name}
                    onChange={changeProfileData}
                />

                <InputBasicField
                    label="First native name"
                    name="first_native_name"
                    value={form.first_native_name}
                    onChange={changeProfileData}
                />

                <InputBasicField
                    label="Last native name"
                    name="last_native_name"
                    value={form.last_native_name}
                    onChange={changeProfileData}
                />
            </div>
        </div>
    )
}
