import type { DetailedForm } from './components/EditComponents/EditDetailed'

interface Manager {
    id: string
    name: string
}

export function mapFormData(
    formData: DetailedForm,
    managers: Manager[]
) {
    const { birthDay, birthMonth, birthYear, managerId, ...rest } = formData

    const selectedManager = managers.find((m) => m.id === managerId)
    const [firstName = '', lastName = ''] =
        selectedManager?.name.split(' ') ?? []

    return {
        ...rest,
        date_birth: {
            year: Number(birthYear),
            month: Number(birthMonth),
            day: Number(birthDay),
        },
        manager: {
            id: managerId || null,
            first_name: firstName,
            last_name: lastName,
        },
    }
}
