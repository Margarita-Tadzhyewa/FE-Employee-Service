import { configureStore } from '@reduxjs/toolkit'

import { userSlice } from './slices/userSlice'
import { employeesApi } from './api/employeesApi'
import { authApi } from './api/authApi'

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [employeesApi.reducerPath]: employeesApi.reducer, //all requests for empls, cash, refetch
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            authApi.middleware,
            employeesApi.middleware
        ),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
