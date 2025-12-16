import type { Employee } from "./types"

export const managers = [
    { id: 'd6d206e5-2ca4-443d-8404-dc84e2d15', name: 'Eren Yeger' },
    { id: 'd6d206e5-2ca4-443d-8404-dc05dffd284e2d15', name: 'Tanjiro Kamado' },
    { id: 'd6d2ff06e5-2ca4-443d-8404-dc05284e2d15', name: 'Sukuna Ramen' },

]
export const months: string[] = [
    'Jan',
    'Feb',
    'March',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Octd',
    'Nov',
    'Dec',
]

export function formatDate(item: number): string {
    const month = months[item - 1]

    const fullDate = `${month}`
    return fullDate
}

export function extractMonth(month: string):number {
    const monthIndex = months.findIndex(item => 
        item.toLowerCase() === month.toLowerCase()
    )
    return monthIndex !== -1 ? monthIndex + 1 : 0
}

export function createFullName(data: Employee | SingleName): string {
    return `${data.first_name} ${data.last_name}`
}

export interface SingleName {
    first_name: string
    last_name: string
}