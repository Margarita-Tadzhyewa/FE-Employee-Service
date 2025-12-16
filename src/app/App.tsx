import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { Header } from '../shared/RootLayout/Header'
import { loadUserFromStorage } from '../../store/slices/userSlice'
import type { AppDispatch } from '../../store/store'

export const App = () => {
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(loadUserFromStorage())
    }, [dispatch])

    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}
