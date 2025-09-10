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

type ResponsData = {
  data: WordEntry[];
};

export const vocabularyApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllwords: builder.query<ResponsData, void>({
      query: () => ({
        url: "/vocabulary",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllwordsQuery } = vocabularyApi;
