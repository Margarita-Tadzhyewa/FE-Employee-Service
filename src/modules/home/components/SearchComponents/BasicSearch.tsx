import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import type { Employee } from '../../../../shared/types'
import { SearchInput } from '../../../../shared/components/SearchInput'

interface BasicSearchProps {
    employees: Employee[]
    setFilteredEmployees: (emps: Employee[]) => void
}

export const BasicSearch = ({
    employees,
    setFilteredEmployees,
}: BasicSearchProps) => {
    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setSearch(value)

        const inputData = value.toLowerCase()
        const filtered = employees.filter((emp) => {
            const fullName = `${emp.first_name} ${emp.last_name}`.toLowerCase()
            return (
                fullName.includes(inputData) ||
                emp._id.toLowerCase().includes(inputData)
            )
        })
        setFilteredEmployees(filtered)
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const filtered = employees.filter((emp) => {
            const fullName = `${emp.first_name} ${emp.last_name}`.toLowerCase()
            return (
                fullName.includes(search.toLowerCase()) ||
                emp._id.toLowerCase().includes(search.toLowerCase())
            )
        })
        if (filtered.length === 0) {
            navigate('/not-found')
            return
        }
        setFilteredEmployees(filtered)
    }

    return (
        <div className="search-forms-basic">
            <form className="basic-search" onSubmit={onSubmit}>
                <SearchInput
                    value={search}
                    onChange={onSearch}
                    placeholder="John Smith"
                />
                <button type="submit" className="search-button-basic">
                    search
                </button>
            </form>
        </div>
    )
}
