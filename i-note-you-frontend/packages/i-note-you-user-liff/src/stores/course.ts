import { store } from "@/stores";
import { defineStore } from "pinia";

interface courseState {
  courseUnitVal: number | null;
}

export const useCourseStore = defineStore({
  id: "course",
  state: (): courseState => ({
    courseUnitVal: null,
  }),
  getters: {
    getCourseUnitValState(): number | null {
      return this.courseUnitVal;
    },
  },
  actions: {
    setCourseUnitVal(courseUnitVal: number | null): void {
      this.courseUnitVal = courseUnitVal;
    },
  },
});

export const useCourseStoreState = () => {
  return useCourseStore(store);
};
