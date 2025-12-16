import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

import type { RootState } from '../../store/store'

export const PrivateRoute = () => {
    const { user, isLoading } = useSelector(
        (state: RootState) => state.user
    )

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p>Loading</p>
            </div>
        )
    }

    if (!user) {
        return <Navigate to="/login" replace />
    }
    return <Outlet />
}
