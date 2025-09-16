import { BarChart, Clock, Target, User } from "lucide-react";
import { AgeStep } from "../ui/steps/AgeStep";
import { LanguageStep } from "../ui/steps/LanguageStep";
import { TimeStep } from "../ui/steps/TimeStep";
import { TopicStep } from "../ui/steps/TopicsStep";

export const steps = [
  {
    title: "Ваш возраст",
    icon: <User size={24} />,
    content: <AgeStep />,
  },
  {
    title: "Текущий уровень английского",
    icon: <BarChart size={24} />,
    content: <LanguageStep />,
  },
  {
    title: "Время в день на изучение",
    icon: <Clock size={24} />,
    content: <TimeStep />,
  },
  {
    title: "Цели изучения",
    icon: <Target size={24} />,
    content: <TopicStep />,
  },
];
