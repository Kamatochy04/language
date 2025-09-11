import {
  DictionaryPage,
  GrammarPage,
  LessonPage,
  LoginPage,
  MainPage,
  OneGrammarPage,
  RegisterPage,
  StatisticsPage,
  TestWordPage,
  UserInfoPage,
} from "@/pages";
import { Route, Routes } from "react-router-dom";

import "./styles/index.scss";
import MainLayout from "./layout/MainLayout";
import { Provider } from "react-redux";
import { store } from "./store";

export const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/dictionary" element={<DictionaryPage />} />
          <Route path="/grammar" element={<GrammarPage />} />
          <Route path="/statistics" element={<StatisticsPage />} />
        </Route>
        <Route path="/grammar/:id" element={<OneGrammarPage />} />
        <Route path="/test-word" element={<TestWordPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/information" element={<UserInfoPage />} />
        {/* <Route path="/grammar/:id" element={<GrammarDetailsPage />} /> */}
        <Route path="/:lessonId" element={<LessonPage />} />
      </Routes>
    </Provider>
  );
};
