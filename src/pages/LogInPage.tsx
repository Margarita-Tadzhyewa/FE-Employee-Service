import { useNavigate, Link } from 'react-router-dom'
import '../app/styles/LogInPage/default.scss'
import { useState, useEffect } from 'react'
import type { FormEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query'

import { setUser } from '../../store/slices/userSlice'
import type { RootState, AppDispatch } from '../../store/store'
import { useLoginMutation } from '../../store/api/authApi'
import { useFormErrors } from '../modules/auth/hooks/useFormErrors'

export const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [remember, setRemember] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()
    const user = useSelector((state: RootState) => state.user.user)
    const [logInUser, { isLoading }] = useLoginMutation()

    const { error, showError, resetErrors, clearError, checkServerError } =
        useFormErrors()

    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [user, navigate])

    const logInForm = async (e: FormEvent<HTMLFormElement>) => {
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

        try {
            const response = await logInUser({ email, password }).unwrap()
            if (response.success && response.user) {
                dispatch(setUser({ user: response.user, remember }))
            }
            navigate('/')
        } catch (err) {
            const error = err as FetchBaseQueryError
            const message = (error.data as { message?: string })?.message
            checkServerError(message)
        }
    }

    return (
        <div className="container container-login">
            <div className="form-container">
                <p className="title">Welcome back</p>

                <form id="loginForm" onSubmit={logInForm}>
                    <div className="form-group">
                        <label htmlFor="email-signIn">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="text-input"
                            autoComplete="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                                clearError('email')
                            }}
                        />
                        {error.email && (
                            <p className="error-label">{error.email}</p>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password-signin">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="text-input"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                                clearError('password')
                            }}
                        />
                        {error.password && (
                            <p className="error-label">{error.password}</p>
                        )}
                    </div>

                    <div className="form-checkbox">
                        <input
                            type="checkbox"
                            id="checkbox-signin"
                            name="remember"
                            checked={remember}
                            onChange={(e) => setRemember(e.target.checked)}
                        />
                        <label htmlFor="checkbox-signin">Remember me</label>
                    </div>

                    <div className="mt-10">
                        <button type="submit" id="logInButton" disabled={isLoading}>
                            {isLoading ? 'Logging in...' : 'Log In'}
                        </button>
                    </div>
                </form>

                <div className="separator">
                    <p className="separator-line"></p>
                    <p className="separator-text">Or</p>
                    <p className="separator-line"></p>
                </div>

                <p className="text-center">
                    Create an account?
                    <Link to="/register"> Sign Up </Link>
                </p>
            </div>
        </div>
    )
}
