import '../app/styles/RegisterPage/defaultStyle.scss'
import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import type { FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query'

import { setUser } from '../../store/slices/userSlice'
import type { AppDispatch } from '../../store/store'
import { useRegisterMutation } from '../../store/api/authApi'
import { useFormErrors } from '../modules/auth/hooks/useFormErrors'


export const RegisterForm = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [remember, setRemember] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()
    const [registerUser] = useRegisterMutation()

    const { error, showError, resetErrors, clearError, checkServerError } =
        useFormErrors()

    const registerFrom = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        resetErrors()
        if (!email) {
            showError('email', 'Email is required')
            return
        }

        if (!password) {
            showError('password', 'password is required')
            return
        }

        if (!firstName) {
            showError('first_name', 'firstName is required')
            return
        }

        if (!lastName) {
            showError('last_name', 'lastName is required')
            return
        }

        try {
            const response = await registerUser({
                first_name: firstName,
                last_name: lastName,
                email,
                password,
                remember,
            }).unwrap()
            if (response.success && response.user) {
                dispatch(setUser({ user: response.user, remember }))
                navigate('/')
            }
        } catch (err) {
            const error = err as FetchBaseQueryError
            const message = (error.data as { message?: string })?.message
            checkServerError(message)
        }
    }

    return (
        <div className="container container-register">
            <div className="form-container">
                <p className="title">Create an account</p>

                <form onSubmit={registerFrom}>
                    <div className="form-group">
                        <label htmlFor="name-signUp">Name</label>
                        <input
                            type="text"
                            name="first_name"
                            id="name-signUp"
                            placeholder="Enter your name"
                            className="text-input"
                            value={firstName}
                            onChange={(e) => {
                                setFirstName(e.target.value)
                                clearError('first_name')
                            }}
                            required
                        />
                        {error.first_name && (
                            <p className="error-label">{error.first_name}</p>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="surname-signUp">Surname</label>
                        <input
                            type="text"
                            name="last_name"
                            id="surname-signUp"
                            placeholder="Enter your surname"
                            className="text-input"
                            value={lastName}
                            onChange={(e) => {
                                setLastName(e.target.value)
                                clearError('last_name')
                            }}
                            required
                        />
                        {error.last_name && (
                            <p className="error-label">{error.last_name}</p>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email-signUp">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email-signUp"
                            placeholder="Enter your email"
                            className="text-input"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                                clearError('email')
                            }}
                            autoComplete="email"
                            required
                        />
                        {error.email && (
                            <p className="error-label">{error.email}</p>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password-signUp">Password</label>
                        <input
                            type="password"
                            id="password-signUp"
                            name="password"
                            placeholder="Create your password"
                            className="text-input"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                                clearError('password')
                            }}
                            autoComplete="current-password"
                            required
                        />
                    </div>

                    <div className="form-checkbox">
                        <input
                            type="checkbox"
                            id="checkbox-signup"
                            name="remember"
                            checked={remember}
                            onChange={(e) => setRemember(e.target.checked)}
                        />
                        <label htmlFor="checkbox-signup">Remember me</label>
                        {error.password && (
                            <p className="error-label">{error.password}</p>
                        )}
                    </div>

                    <div className="mt-10">
                        <button type="submit" id="signUpButton">
                            Sign Up
                        </button>
                    </div>
                </form>

                <div className="separator">
                    <p className="separator-line"></p>
                    <p className="separator-text">Or</p>
                    <p className="separator-line"></p>
                </div>

                <p className="text-center">
                    Already have an account?
                    <Link to="/login"> Log In </Link>
                </p>
            </div>
        </div>
    )
}
