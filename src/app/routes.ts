import { createBrowserRouter } from 'react-router-dom'

import { HomePage } from '../pages/HomePage'
import { LoginForm } from '../pages/LogInPage'
import { RegisterForm } from '../pages/RegisterPage'
import { SettingsPage } from '../pages/SettingsPage'
import { ProfilePage } from '../pages/ProfilePage'
import { NotFoundPage } from '../pages/NotFoundPage'

import { PrivateRoute } from './PrivateRoute'
import { App } from './App'

export const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            { path: 'login', Component: LoginForm },
            { path: 'register', Component: RegisterForm },
            {
                Component: PrivateRoute,
                children: [
                    { index: true, Component: HomePage },
                    { path: 'settings', Component: SettingsPage },
                    { path: 'users/:id', Component: ProfilePage },
                    { path: 'not-found', Component: NotFoundPage },
                ],
            },
        ],
    },
])
