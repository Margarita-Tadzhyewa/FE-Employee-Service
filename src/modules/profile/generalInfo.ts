interface InfoItem {
    label: string
    icon: string
    field: string
    type?: 'date' | 'manager'
    colorP?: string
}

import departmentIcon from '../../assets/icons/department.svg'
import buildingIcon from '../../assets/icons/building.svg'
import roomIcon from '../../assets/icons/room.svg'
import deskNumberIcon from '../../assets/icons/deskNumber.svg'
import calendarIcon from '../../assets/icons/calendar.svg'
import managerIcon from '../../assets/icons/manager.svg'
import phoneIcon from '../../assets/icons/phone.svg'
import emailIcon from '../../assets/icons/email.svg'
import teamsIcon from '../../assets/icons/teams.svg'
import cnumberIcon from '../../assets/icons/c-number.svg'

export const generalInfo: InfoItem[] = [
    {
        label: 'Department',
        icon: departmentIcon,
        field: 'department',
    },
    {
        label: 'Building',
        icon: buildingIcon,
        field: 'building',
    },
    { label: 'Room', icon: roomIcon, field: 'room' },
    {
        label: 'Desk number',
        icon: deskNumberIcon,
        field: 'desk_number',
    },
    {
        label: 'Date of birth',
        icon: calendarIcon,
        field: 'date_birth',
        type: 'date',
    },
    {
        label: 'Manager',
        icon: managerIcon,
        field: 'manager',
        type: 'manager',
        colorP: 'blue',
    },
]

export const contacts: InfoItem[] = [
    {
        label: 'Mobile Phone',
        icon: phoneIcon,
        field: 'phone',
        colorP: 'blue',
    },
    {
        label: 'Email',
        icon: emailIcon,
        field: 'email',
        colorP: 'blue',
    },
    {
        label: 'Skype',
        icon: teamsIcon,
        field: 'skype',
        colorP: 'blue',
    },
    { label: 'C-Number', icon: cnumberIcon, field: 'cnumber' },
]

export const travelInfo: InfoItem[] = [
    {
        label: 'Citizens',
        icon: phoneIcon,
        field: 'citizenship',
    },
]
