import { schemeSet2, schemeTableau10 } from "d3-scale-chromatic";
import {
  Lecture,
  Point,
  QuestionList,
  ScoreList,
  Type,
  TypeDescription,
  Types,
  User,
  WeekData
} from "../types";

export const mockupUser: User = {
  userName: "userName",
  userId: 1,
  userEmail: "nimod1234@g.skku.edu",
  type: 1
};

export const mockupPoint: Point = {
  level: 10,
  expValue: 2380
};

export const mockupScore: ScoreList = {
  score: [1, 5, 3, 1, 4, 1, 8, 5, 3, 2, 1, 6, 4, 1]
};

export const mockupType: Type = { type: 2 };

export const mockupTypeDescriptionList: TypeDescription[] = [
  {
    type: "learnerType1",
    description:
      "learner Type Description learner Type Description learner Type Description"
  },
  {
    type: "learnerType2",
    description:
      "learner Type Description learner Type Description learner Type Description"
  },
  {
    type: "learnerType3",
    description:
      "learner Type Description learner Type Description learner Type Description"
  }
];

export const mockupQuestionList: QuestionList = {
  questions: [
    "학습 성향 분석 질문1",
    "학습 성향 분석 질문2",
    "학습 성향 분석 질문3",
    "학습 성향 분석 질문4",
    "학습 성향 분석 질문5",
    "학습 성향 분석 질문6"
  ]
};

export const mockupWeekDataList: WeekData[] = [
  {
    subject: "강의 제목1",
    contents: {
      video: ["/course/1/lecture/1", "/course/1/lecture/2"],
      quiz: "/course/1/quiz",
      metaverse: "https://chakra-ui.com/docs/components/link/usage#"
    },
    isdone: { video: [1, 0], quiz: 1 }
  },
  {
    subject: "강의 제목2",
    contents: {
      video: [
        "/course/2/lecture/1",
        "/course/2/lecture/2",
        "/course/2/lecture/3"
      ],
      quiz: "/course/2/quiz",
      metaverse: "https://chakra-ui.com/docs/components/link/usage#"
    },
    isdone: { video: [0, 1], quiz: 0 }
  },
  {
    subject: "강의 제목3",
    contents: {
      video: [
        "/course/3/lecture/1",
        "/course/3/lecture/2",
        "/course/3/lecture/3"
      ],
      quiz: "/course/3/quiz",
      metaverse: "https://chakra-ui.com/docs/components/link/usage#"
    },
    isdone: { video: [0, 1], quiz: 0 }
  }
];

export const mockupLectureList: Lecture[][] = [
  [
    {
      title: "1주차 강의",
      videoTitle: "강의 영상11",
      video: "video 링크11",
      pdf: "pdf 링크11"
    },
    {
      title: "1주차 강의",
      videoTitle: "강의 영상12",
      video: "video 링크12",
      pdf: "pdf 링크12"
    }
  ],
  [
    {
      title: "2주차 강의",
      videoTitle: "강의 영상21",
      video: "video 링크21",
      pdf: "pdf 링크21"
    },
    {
      title: "2주차  강의",
      videoTitle: "강의 영상22",
      video: "video 링크22",
      pdf: "pdf 링크22"
    },
    {
      title: "2주차 강의",
      videoTitle: "강의 영상23",
      video: "video 링크23",
      pdf: "pdf 링크23"
    }
  ]
];

export const BubbleChartData: Types.Data[] = [
  { id: 1, name: "EDA", size: 350, fillColor: schemeTableau10[0] },
  { id: 2, name: "API", size: 100, fillColor: schemeTableau10[0] },
  { id: 3, name: "결측치", size: 75, fillColor: schemeTableau10[1] },
  { id: 4, name: "이상치", size: 150, fillColor: schemeTableau10[1] },
  { id: 5, name: "정량 데이터", size: 150, fillColor: schemeTableau10[2] },
  { id: 6, name: "정성 데이터", size: 125, fillColor: schemeTableau10[2] },
  { id: 7, name: "회귀", size: 230, fillColor: schemeTableau10[3] },
  { id: 8, name: "군집화", size: 70, fillColor: schemeTableau10[3] },
  { id: 9, name: "분류", size: 70, fillColor: schemeSet2[1] },
  { id: 10, name: "확률", size: 70, fillColor: schemeTableau10[4] },
  { id: 11, name: "질적자료", size: 70, fillColor: schemeTableau10[4] },
  { id: 12, name: "양적자료", size: 50, fillColor: schemeTableau10[6] },
  { id: 13, name: "웹크롤링", size: 60, fillColor: schemeTableau10[5] },
  { id: 14, name: "Python", size: 70, fillColor: schemeTableau10[5] },
  { id: 15, name: "DIKW", size: 80, fillColor: schemeTableau10[7] },
  { id: 16, name: "빅데이터", size: 90, fillColor: schemeTableau10[8] },
  { id: 17, name: "numpy", size: 100, fillColor: schemeTableau10[8] },
  { id: 18, name: "matplotlib", size: 150, fillColor: schemeTableau10[9] },
  { id: 19, name: "Series", size: 150, fillColor: schemeTableau10[9] },
  { id: 20, name: "DataFrame", size: 150, fillColor: schemeSet2[0] }
];
