import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import type { UserAuth } from './types'

interface UserState {
    user: UserAuth | null
    isLoading: boolean
}

const initialState: UserState = {
    user: null,
    isLoading: true,
}

export const userSlice = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {
        setUser: (
            state,
            action: PayloadAction<{ user: UserAuth; remember: boolean }>
        ) => {
            state.user = action.payload.user
            state.isLoading = false

            const storage = action.payload.remember
                ? localStorage
                : sessionStorage

            storage.setItem('authUser', JSON.stringify(action.payload.user))
        },

        loadUserFromStorage: (state) => {
            const localUser = localStorage.getItem('authUser')
            const sessionUser = sessionStorage.getItem('authUser')

            if (localUser) {
                state.user = JSON.parse(localUser)
            } else if (sessionUser) {
                state.user = JSON.parse(sessionUser)
            }
            state.isLoading = false
        },

        loading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },

        logOut: (state) => {
            state.user = null
            state.isLoading = false
            localStorage.removeItem('authUser')
            sessionStorage.removeItem('authUser')
        },
    },
})

export const { setUser, loadUserFromStorage, logOut, loading } = userSlice.actions
