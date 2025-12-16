import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type {
    LogInResponse,
    LogInDTO,
    SignUpResponse,
    SignUpDTO,
} from './types'

const API_URL = import.meta.env.VITE_API_URL

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: (builder) => ({
        login: builder.mutation<LogInResponse, LogInDTO>({
            query: (body) => ({
                url: '/login',
                method: 'POST',
                body,
            }),
        }),
        logout: builder.mutation<{ success: boolean }, void>({
            query: () => ({
                url: '/logout',
                method: 'POST',
            }),
        }),
        register: builder.mutation<
            SignUpResponse,
            SignUpDTO & { remember: boolean }
        >({
            query: (body) => ({
                url: '/register',
                method: 'POST',
                body,
            }),
        }),
    }),
})

export const { useLoginMutation, useLogoutMutation, useRegisterMutation } =
    authApi
