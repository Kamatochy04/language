import { api } from "@/app/store/api";

interface RegisterRequest {
  password: string;
  username: string;
}

interface RegisterResponse {
  accessToken: string;
}

const registerApi = api.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<RegisterResponse, RegisterRequest>({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useRegisterMutation } = registerApi;
