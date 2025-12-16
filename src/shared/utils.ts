import type { Employee } from "./types"

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