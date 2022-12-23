export interface User {
  userName: string;
  userId: number;
  userEmail: string;
  type: number;
}
export interface Point {
  level: number;
  expValue: number;
}

export interface LoginValue {
  id: string;
  password: string;
}
export interface LayoutDefaultProps {
  children?: React.ReactElement;
}

export interface WeekData {
  subject: string;
  contents: {
    video: string[];
    quiz: string;
    metaverse: string;
  };
  isdone: { video: number[]; quiz: number };
}

export interface ScoreList {
  score: number[];
}

export interface QuestionList {
  questions: string[];
}

export interface Id {
  id: number;
}

export interface Content extends Id {
  week: number;
  type: string;
  link: string;
}

export interface LineProps {
  data: number[];
  color: string;
}

export interface ChartProps {
  width: number;
  height: number;
  margin: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
}
