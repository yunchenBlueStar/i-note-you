<script setup lang="ts">
import { NAvatar, NInput } from "naive-ui";
import { ref } from "vue";
import EmptyBox from "@/components/empty-box/index.vue";
import { getRandomInt, generaRandomArray } from "@/utils/globalMethods";
import CourseBox from "../components/CourseBox.vue";
const courseDatas = ref(generaRandomArray(30, getRandomInt(2)));
const courseInviteCode = ref("");
</script>
<template>
  <div class="px-[2vw] py-[3vh]">
    <div class="flex justify-between mb-[2vh]">
      <div>
        <div
          :class="`init-course-btn !bg-[#170600] w-fit px-[2vw] py-[1.5vh] !rounded-[15px] text-xl font-['Robot-Bold'] text-white mb-[2.5vh]`"
        >
          新增課程
        </div>
        <div class="init-course-input-box flex items-center">
          <NInput
            v-model:value="courseInviteCode"
            type="text"
            clearable
            size="large"
            class="rounded-[15px]"
            placeholder="輸入邀請碼"
          />
          <div
            class="ml-[1vw] text-[#CC3300] font-['Robot-Regular'] text-xl w-fit whitespace-nowrap cursor-pointer"
          >
            加入課程
          </div>
        </div>
      </div>

      <div>
        <NAvatar
          class="w-[3.5vw] h-[3.5vw]"
          round
          src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
        />
      </div>
    </div>
    <div class="course-list">
      <div class="font-['Robot-Bold'] flex items-end">
        <div class="text-[1.875rem] leading-[2.3rem] text-black">所有課程</div>
        <div class="text-2xl text-[#535353] ml-[1vw]">
          共 {{ courseDatas.length }} 堂
        </div>
      </div>

      <div
        class="py-[3vh] flex flex-wrap gap-[3vw]"
        v-if="courseDatas.length > 0"
      >
        <CourseBox v-for="(courseData, index) in courseDatas" :key="index" />
      </div>
      <EmptyBox v-else />
    </div>
  </div>
</template>

<style lang="scss">
.init-course-input-box {
  .n-input {
    .n-input-wrapper {
      padding: 1vh 2vw;
      width: 30vw;
      border-radius: 15px !important;
      background-color: #d9d9d9;
      .n-input__input {
        font-size: 1.25rem;
        font-family: Robot-Regular;
      }
      .n-input__placeholder {
        color: #858585;
        font-size: 1.25rem;
        font-family: Robot-Regular;
      }
    }
  }
}
.course-box-mask {
  opacity: 0;
}
.course-box:hover .course-box-mask {
  opacity: 1;
}
</style>
