import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { useUpdateEmployeeProfileMutation } from '../../../../../store/api/employeesApi'
import type { Employee } from '../../../../shared/types'
import { generalInfo, contacts, travelInfo } from '../../generalInfo'
import { mapFormData } from '../../mapper'
import { managers } from '../../../../shared/utils'
import type {UpdateProfileDTO} from '../../../../../store/api/types'

import { EditDetailed } from './EditDetailed'
import { EditBasic } from './EditBasic'
import type { BasicForm } from './EditBasic'
import type { DetailedForm } from './EditDetailed'

interface DetailedInfoProps {
    emp: Employee
    onSave: () => void
}

export const EditProfilePage = ({ emp, onSave }: DetailedInfoProps) => {
    const { id } = useParams<{ id: string }>()

    const [updateProfile] = useUpdateEmployeeProfileMutation()

    const [detailedForm, setDetailedForm] = useState<DetailedForm>(() => {
        const form: DetailedForm = {
            birthDay: '',
            birthMonth: '',
            birthYear: '',
            managerId: '',
        }
        ;[...generalInfo, ...contacts, ...travelInfo].forEach((item) => {
            if (item.type === 'date' || item.type === 'manager') {
                return
            }
            form[item.field] = String(emp[item.field as keyof Employee] || '')
        })

        if (emp.date_birth) {
            form.birthDay = String(emp.date_birth.day || '')
            form.birthMonth = String(emp.date_birth.month || '')
            form.birthYear = String(emp.date_birth.year || '')
        } else {
            form.birthDay = ''
            form.birthMonth = ''
            form.birthYear = ''
        }
        form.managerId = emp.manager?.id || ''
        return form
    })

    const [basicForm, setBasicForm] = useState<BasicForm>({
        first_name: emp?.first_name || '',
        last_name: emp?.last_name || '',
        middle_native_name: emp?.middle_native_name || '',
        first_native_name: emp?.first_native_name || '',
        last_native_name: emp?.last_native_name || '',
    })
    const saveNewData = async () => {
        if (!id) return

        const newData: BasicForm & DetailedForm = { ...basicForm, ...detailedForm }
        const mappedNewData = mapFormData(newData, managers)

        try {
            await updateProfile({ id, data: mappedNewData as UpdateProfileDTO}).unwrap()
            alert('change successfully')
            onSave?.()
        } catch (err) {
            console.log('error while changind data', err)
            alert('error changing dara')
        }
    }

    return (
        <div className="profile-edit-page">
            <EditBasic emp={emp} form={basicForm} setForm={setBasicForm} />
            <EditDetailed
                emp={emp}
                form={detailedForm}
                setForm={setDetailedForm}
            />
            <button className="save" onClick={saveNewData}>
                Save
            </button>
        </div>
    )
}
