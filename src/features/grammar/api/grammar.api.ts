import { api } from "@/app/store/api";
import { GrammarData } from "../slice/grammarSlice";

export const grammarApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllGrammar: builder.query<GrammarData[], void>({
      query: () => ({
        url: "/grammar/completed",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllGrammarQuery } = grammarApi;
