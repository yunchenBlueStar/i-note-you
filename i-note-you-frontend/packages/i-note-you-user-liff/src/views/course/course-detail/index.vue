<script setup lang="ts">
import CourseDetailNavbar from "../components/CourseDetailNavbar.vue";
import { NIcon } from "naive-ui";
import { ref } from "vue";
import { BellOutlined, InsertRowAboveOutlined } from "@vicons/antd";
import { Layers } from "@vicons/carbon";
import { useCourseStoreState } from "@/stores/course";
import CourseDetailSidebar from "../components/CourseDetailSidebar.vue";
import CourseDetailContentBox from "./CourseDetailContentBox.vue";
const courseStore = useCourseStoreState();
const navbarValue = ref<number>(0);

const courseDetailNavbar = ref([
  {
    label: "課程通知",
    icon: BellOutlined,
  },
  {
    label: "課程大綱",
    icon: InsertRowAboveOutlined,
  },
  {
    label: "所有單元",
    icon: Layers,
  },
]);
const handleSelectNavbar = (navbarIndex: number) => {
  navbarValue.value = navbarIndex;
  courseStore.setCourseUnitVal(null);
};
</script>
<template>
  <div class="text-black px-[1vw] py-[1.5vh]">
    <CourseDetailNavbar>
      <template #navbar-right-box>
        <div class="flex items-center">
          <div
            :class="`navbar-btn-box ml-[1.75vw] border-[3px] rounded-[5px] px-[0.5vw] py-[0.5vh] border-[#170600] cursor-pointer flex justify-center items-center !ease-in-out !duration-300 ${
              navbarValue === index ? 'bg-white' : 'bg-[#170600]'
            }`"
            @click="handleSelectNavbar(index)"
            v-for="(navbarData, index) in courseDetailNavbar"
            :key="index"
          >
            <NIcon
              class="text-[1.5vw] !ease-in-out !duration-500"
              :color="navbarValue === index ? '#170600' : '#F9F9F9'"
              :component="navbarData.icon"
            />
            <div
              :class="`text-lg ml-[0.25vw] ${
                navbarValue === index ? 'text-[#170600]' : ' text-[#F9F9F9]'
              }`"
            >
              {{ navbarData.label }}
            </div>
          </div>
        </div>
      </template>
    </CourseDetailNavbar>
    <div class="mt-[2vh] flex justify-between h-full">
      <CourseDetailContentBox :navbar-index="navbarValue" />
      <!-- <CourseDetailSidebar :title="courseDetailNavbar[navbarValue].label" />
      <CourseDetailContentBox :navbar-index="navbarValue" :sidebar-index="0" /> -->
    </div>
  </div>
</template>

<style scoped></style>
