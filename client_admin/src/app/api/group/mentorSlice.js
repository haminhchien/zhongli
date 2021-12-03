import { MENTOR, STUDENT } from '../tagConstants'
import { apiSlice } from '../index'

const extendedApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    searchMentors: builder.query({
      query: (queryStr) => ({
        url: '/mentor',
        method: 'GET',
        params: { query: queryStr || '' },
      }),
      providesTags: (result = [], error, arg) =>
        result.map((mentor) => ({ type: MENTOR, id: mentor.groupId })),
    }),
    getMentorInfo: builder.query({
      query: (groupId) => ({
        url: '/mentor/info',
        method: 'GET',
        params: { groupId },
      }),
      providesTags: (result = {}, error, arg) => [
        { type: MENTOR, id: result.groupId },
      ],
    }),
    getMentorGroupStudents: builder.query({
      query: (groupId) => ({
        url: '/group/user',
        method: 'GET',
        params: { groupId, role: 'STUDENT' },
      }),
      providesTags: (result = [], error, arg) =>
        result.map((student) => ({ type: STUDENT, id: student.userId })),
    }),
  }),
})

export const {
  useLazySearchMentorsQuery,
  useGetMentorGroupStudentsQuery,
  useGetMentorInfoQuery,
} = extendedApi
