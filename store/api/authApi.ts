import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type { LogInResponse, LogInDTO, SignUpResponse, SignUpDTO } from './types'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://be-employee-service.onrender.com' }),
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

export const { useLoginMutation, useLogoutMutation, useRegisterMutation } = authApi
