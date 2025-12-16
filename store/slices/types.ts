export type Role = 'ADMIN' | 'EMPLOYEE' | 'HR'

export interface UserAuth {
    _id: string
    first_name: string
    last_name: string
    email: string
    user_avatar: string
    role: Role
}