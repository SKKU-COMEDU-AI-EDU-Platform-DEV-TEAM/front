import { atom, selector } from "recoil";
import { Point, User } from "../types";
import { v1 } from "uuid";
import { mockupPoint, mockupUser } from "./mockupData";

export const userState = atom<User>({
  key: `userState/${v1()}`,
  default: mockupUser
});

// export const userState = atom<User|null>({
//   key: `userState/${v1()}`,
//   default: null
// });

export const typeSelector = selector({
  key: `typeSelector${v1()}`,
  get: ({ get }) => {
    const user = get(userState);
    if (user.type == 1) {
      return {
        type: "learnerType1",
        description:
          "learner Type Description learner Type Description learner Type Description"
      };
    } else {
      return {
        type: "learnerType",
        description:
          "learner Type Description learner Type Description learner Type Description"
      };
    }
  }
});

export const pointState = atom<Point>({
  key: `pointState${v1()}`,
  default: mockupPoint
});
