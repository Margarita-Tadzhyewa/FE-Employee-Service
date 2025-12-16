import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type { Employee } from './types'
import type {
    ChangeRoleResponse,
    ChangeRoleDTO,
    UpdateProfileResponse,
    UpdateProfileDTO,
} from './types'

const API_URL = import.meta.env.VITE_API_URL

export const employeesApi = createApi({
    reducerPath: 'employeesApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    tagTypes: ['Employees'],
    endpoints: (builder) => ({
        getAllEmployees: builder.query<Employee[], void>({
            query: () => '/employees',
            providesTags: ['Employees'],
        }),
        getEmployeeById: builder.query<Employee, string>({
            query: (id) => `/employees/${id}`,
            providesTags: (_result, _err, id) => [{ type: 'Employees', id }],
        }),
        changeRole: builder.mutation<ChangeRoleResponse, ChangeRoleDTO>({
            query: (data) => ({
                url: `/change-role/${data.id}`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Employees'],
        }),
        updateEmployeeProfile: builder.mutation<
            UpdateProfileResponse,
            { id: string; data: UpdateProfileDTO }
        >({
            query: ({ id, data }) => ({
                url: `/change-data/${id}`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: (_res, _err, { id }) => [
                { type: 'Employees', id },
                'Employees',
            ],
        }),
    }),
})

export const {
    useGetAllEmployeesQuery,
    useGetEmployeeByIdQuery,
    useChangeRoleMutation,
    useUpdateEmployeeProfileMutation,
} = employeesApi
