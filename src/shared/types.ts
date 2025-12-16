export interface Employee {
    _id: string
    isRemoteWork: boolean
    user_avatar: string
    first_name: string
    last_name: string
    first_native_name: string
    last_native_name: string
    middle_native_name: string
    department: string
    building: string
    room: string
    date_birth: {
        year: number
        month: number
        day: number
    }
    desk_number: number
    manager: {
        id: string
        first_name: string
        last_name: string
    }
    phone: string
    email: string
    skype: string
    cnumber: string
    citizenship: string
    visa: Visa[]
    role: Role
}
export interface Visa {
    issuing_country: string
    type: string
    start_date: number
    end_date: number
}

export interface UserAuth {
    _id: string
    first_name: string
    last_name: string
    email: string
    user_avatar: string
    role: Role
}

export type Role = 'ADMIN' | 'EMPLOYEE' | 'HR'
