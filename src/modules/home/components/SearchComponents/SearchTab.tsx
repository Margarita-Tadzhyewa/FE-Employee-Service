import { useState } from 'react'

import type { Employee } from '../../../../shared/types'

import { BasicSearch } from './BasicSearch'
import { AdvancedSearch } from './AdvancedSearch'

interface SearchTabProps {
    employees: Employee[]
    setFilteredEmployees: (emps: Employee[]) => void
}

export const SearchTab = ({
    employees,
    setFilteredEmployees,
}: SearchTabProps) => {
    const [activeSearch, setActiveSearch] = useState<'basic' | 'advanced'>(
        'basic'
    )

    return (
        <div className="search-items">
            <p
                className={`basic-search-input ${
                    activeSearch === 'basic' ? 'form-active' : ''
                }`}
                onClick={() => setActiveSearch('basic')}
            >
                basic search
            </p>

            <p
                className={`advanced-search-input ${
                    activeSearch === 'advanced' ? 'form-active' : ''
                }`}
                onClick={() => setActiveSearch('advanced')}
            >
                advanced search
            </p>

            {activeSearch === 'basic' ? (
                <BasicSearch
                    employees={employees}
                    setFilteredEmployees={setFilteredEmployees}
                />
            ) : (
                <AdvancedSearch
                    employees={employees}
                    setFilteredEmployees={setFilteredEmployees}
                />
            )}
        </div>
    )
}
