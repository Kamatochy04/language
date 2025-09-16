import { api } from "@/app/store/api";

type VerbForms = {
  infinitive: string;
  pastSimple: string;
  pastParticiple: string;
};

type Features = {
  irregular: boolean;
};

export type WordEntry = {
  id: string;
  word: string;
  transcription: string;
  translation: string;
  partOfSpeech: string;
  examples: string[];
  verbForms: VerbForms;
  features: Features;
  level: string;
  createdAt: string;
  updatedAt: string;
};

export const vocabularyApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllwords: builder.query<WordEntry[], void>({
      query: () => ({
        url: "/dictionary/words",
        method: "GET",
      }),
    }),
    addWord: builder.mutation<
      WordEntry,
      {
        word: string;
      }
    >({
      query: (data) => ({
        url: "/dictionary/words",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useAddWordMutation, useGetAllwordsQuery } = vocabularyApi;
