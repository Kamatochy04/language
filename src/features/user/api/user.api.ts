import { api } from "@/app/store/api";

interface RegisterRequest {
  email: string;
  password: string;
  name: string;
}

interface RegisterResponse {
  id: number;
  username: string;
  token: string;
}

export const registerApi = api.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<RegisterResponse, RegisterRequest>({
      query: (body) => ({
        url: "/register",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useRegisterMutation } = registerApi;
