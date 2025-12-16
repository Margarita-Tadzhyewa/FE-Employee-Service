interface InfoItem {
    label: string
    icon: string
    field: string
    type?: 'date' | 'manager'
    colorP?: string
}

export const generalInfo: InfoItem[] = [
    {
        label: 'Department',
        icon: '/assets/icons/department.svg',
        field: 'department',
    },
    {
        label: 'Building',
        icon: '/assets/icons/building.svg',
        field: 'building',
    },
    { label: 'Room', icon: '/assets/icons/room.svg', field: 'room' },
    {
        label: 'Desk number',
        icon: '/assets/icons/deskNumber.svg',
        field: 'desk_number',
    },
    {
        label: 'Date of birth',
        icon: '/assets/icons/calendar.svg',
        field: 'date_birth',
        type: 'date',
    },
    {
        label: 'Manager',
        icon: '/assets/icons/manager.svg',
        field: 'manager',
        type: 'manager',
        colorP: 'blue',
    },
]

export const contacts: InfoItem[] = [
    {
        label: 'Mobile Phone',
        icon: '/assets/icons/phone.svg',
        field: 'phone',
        colorP: 'blue',
    },
    {
        label: 'Email',
        icon: '/assets/icons/email.svg',
        field: 'email',
        colorP: 'blue',
    },
    {
        label: 'Skype',
        icon: '/assets/icons/teams.svg',
        field: 'skype',
        colorP: 'blue',
    },
    { label: 'C-Number', icon: '/assets/icons/c-number.svg', field: 'cnumber' },
]

export const travelInfo: InfoItem[] = [
    {
        label: 'Citizens',
        icon: '/assets/icons/phone.svg',
        field: 'citizenship',
    },
    //     { label: 'Visa 1', icon: '/assets/icons/email.svg', field: 'visa[0].type' },
]
