import { api } from "@/app/store/api";

interface LessonMeta {
  id: string;
  title: string;
  type: string;
}

export interface LessonContent {
  content: unknown;
}

interface AllLessonsResponse {
  lessons: LessonMeta[];
  totalCount: number;
  totalPages: number;
  currentPage: number;
}

export const registerApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getLessons: builder.query<
      AllLessonsResponse,
      { page: number; limit: number }
    >({
      query: ({ page, limit }) => `/lessons?page=${page}&limit=${limit}`,
    }),
    getLessonById: builder.query<
      { id: string; title: string; type: string; content: LessonContent },
      string
    >({
      query: (id) => `/lessons/${id}`,
    }),
  }),
});

export const { useGetLessonByIdQuery, useGetLessonsQuery } = registerApi;
