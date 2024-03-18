<script setup lang="ts">
import { useCourseStoreState } from "../../../../stores/course";
interface Props {
  unitDetailValue: string | null;
}
interface Emits {
  (e: "update:unitDetailValue", unitDetailValue: string | null): void;
}
const courseStore = useCourseStoreState();
const props = defineProps<Props>();
const emits = defineEmits<Emits>();
const unitListColumns = [
  {
    title: "週",
    key: "week",
  },
  {
    title: "上課日",
    key: "courseTime",
  },
  {
    title: "課程單元",
    key: "unit",
  },
  {
    title: "教學內容",
    key: "content",
  },
];
const data = [
  { week: 1, courseTime: "2022/5/15", unit: "時間管理", content: "一般講授" },
  { week: 2, courseTime: "2022/5/15", unit: "時間管理", content: "一般講授" },
  { week: 3, courseTime: "2022/5/15", unit: "時間管理", content: "一般講授" },
  { week: 4, courseTime: "2022/5/15", unit: "時間管理", content: "一般講授" },
  { week: 1, courseTime: "2022/5/15", unit: "時間管理", content: "一般講授" },
  { week: 2, courseTime: "2022/5/15", unit: "時間管理", content: "一般講授" },
  { week: 3, courseTime: "2022/5/15", unit: "時間管理", content: "一般講授" },
  { week: 4, courseTime: "2022/5/15", unit: "時間管理", content: "一般講授" },
  { week: 1, courseTime: "2022/5/15", unit: "時間管理", content: "一般講授" },
  { week: 2, courseTime: "2022/5/15", unit: "時間管理", content: "一般講授" },
  { week: 3, courseTime: "2022/5/15", unit: "時間管理", content: "一般講授" },
  { week: 4, courseTime: "2022/5/15", unit: "時間管理", content: "一般講授" },
];
const handleGoToUnitDetail = (unitId: string) => {
  courseStore.setCourseUnitVal(1);
  emits("update:unitDetailValue", unitId);
};
</script>
<template>
  <div class="pb-[0.5vh]">
    <div class="font-['Robot-Bold'] text-2xl text-[#535353] mb-[1vh]">
      所有單元
    </div>

    <div class="unit-list-table w-full">
      <div
        class="title-box flex w-full mb-[2vh] justify-between items-center bg-[#616161] border-[5px] border-[#170600] font-['Robot-Bold'] rounded-[5px] text-lg text-white"
      >
        <div
          v-for="(columnData, index) in unitListColumns"
          :key="index"
          class="px-[1.5vw] py-[2vh]"
        >
          {{ columnData.title }}
        </div>
      </div>
    </div>
    <div
      class="content-box flex w-full cursor-pointer mb-[2.5vh] py-[1.5vh] justify-between items-center bg-white hover:bg-[#170600] rounded-[5px] text-lg hover:text-white text-[#170600] shadow-[0px_0px_10px_rgba(0,0,0,0.25)] ease-in-out duration-300"
      v-for="(columnData, index) in data"
      :key="index"
      @click="handleGoToUnitDetail('2')"
    >
      <div class="px-[1.5vw]">
        {{ columnData.week }}
      </div>
      <div class="px-[1.5vw]">
        {{ columnData.courseTime }}
      </div>
      <div class="px-[1.5vw]">
        {{ columnData.unit }}
      </div>
      <div class="px-[1.5vw]">
        {{ columnData.content }}
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
