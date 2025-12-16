import { useState } from 'react'

export type Errors = {
    email?: string
    password?: string
    first_name?: string
    last_name?: string
    anotherErr?: string
}

export const useFormErrors = () => {
    const [error, setError] = useState<Errors>({})

    const showError = (field: keyof Errors, message: string) => {
        setError((err) => ({ ...err, [field]: message }))
    }

    const clearError = (field: keyof Errors) => {
        setError((err) => ({ ...err, [field]: undefined }))
    }

    const resetErrors = () => {
        setError({})
    }

    const checkServerError = (message?: string) => {
        if (message === 'no such user') {
            showError('email', 'User with this email not found')
        } else if (message === 'wrong password') {
            showError('password', 'Incorrect password')
        } else if (message === 'such user already exists') {
            showError('email', 'User with this email already exists')
        } else {
            showError('anotherErr', 'Server error')
        }
    }

    return {
        error,
        showError,
        clearError,
        resetErrors,
        checkServerError,
    }
}
