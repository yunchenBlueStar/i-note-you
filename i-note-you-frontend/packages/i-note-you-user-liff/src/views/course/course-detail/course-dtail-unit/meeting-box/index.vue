<script setup lang="ts">
import {
  Microphone,
  PhoneBlock,
  Chat,
  ChartBarStacked,
  UserMultiple,
} from "@vicons/carbon";
import { NIcon, NBadge } from "naive-ui";
import { ref } from "vue";
import CourseMeetMemberBox from "@/views/course/components/CourseMeetMemberBox.vue";
import CourseMeetKeywordBox from "@/views/course/components/CourseMeetKeywordBox.vue";
const meetRoomValue = ref(0);
const handleSelectAction = (selectIndex: number) => {
  meetRoomValue.value = selectIndex;
};
</script>
<template>
  <div class="mb-[1.5vh]">
    <div class="flex justify-between">
      <div class="bg-[#4F4F4F] w-[58.5vw] rounded-[10px] h-[55vh] relative">
        <div class="absolute bottom-0 left-1/2 -translate-x-1/2 py-[3vh]">
          <NIcon
            class="text-[1.5vw] mx-[0.5vw]"
            :color="'#FFFFFF'"
            :component="PhoneBlock"
          />
          <NIcon
            class="text-[1.5vw] mx-[0.5vw]"
            :color="'#FFFFFF'"
            :component="Microphone"
          />
        </div>
      </div>
      <div class="border-[#170600] border-[5px] w-[22.5vw] rounded-[10px]">
        <div class="h-[48.25vh] overflow-y-scroll">
          <div
            class="member-list px-[0.5vw] py-[1vh]"
            v-if="meetRoomValue === 0"
          >
            <CourseMeetMemberBox v-for="x in 40" :key="x" :status="true" />
          </div>
          <div class="chat-room" v-if="meetRoomValue === 1">chat</div>
          <div class="chat-list px-[0.5vw] py-[1vh]" v-if="meetRoomValue === 2">
            <CourseMeetKeywordBox v-for="x in 10" :key="x" />
          </div>
        </div>
        <div
          class="h-[6vh] border-[#170600] border-t-[5px] flex justify-center items-center"
        >
          <div
            :class="`${
              meetRoomValue === 0
                ? 'bg-[#170600] rounded-full py-[0.5vh] px-[0.5vw]'
                : ''
            }  ease-in-out duration-300 mx-[1vw]`"
          >
            <NBadge :value="10" :max="15">
              <NIcon
                :class="` text-[1.5vw]  cursor-pointer`"
                :color="meetRoomValue === 0 ? '#ffffff' : '#170600'"
                :component="UserMultiple"
                @click="handleSelectAction(0)"
              />
            </NBadge>
          </div>
          <div
            :class="`${
              meetRoomValue === 1
                ? 'bg-[#170600] rounded-full  px-[0.5vw] py-[0.5vh]'
                : ''
            }   ease-in-out duration-300 mx-[1vw]`"
          >
            <NBadge :value="10" :max="15">
              <NIcon
                class="text-[1.5vw] cursor-pointer"
                :color="meetRoomValue === 1 ? '#ffffff' : '#170600'"
                :component="Chat"
                @click="handleSelectAction(1)"
              />
            </NBadge>
          </div>
          <div
            :class="`${
              meetRoomValue === 2 ? 'bg-[#170600] rounded-full py-[0.5vh]' : ''
            }  ease-in-out duration-300 mx-[1vw]`"
          >
            <NIcon
              class="text-[1.5vw] mx-[0.5vw] cursor-pointer"
              :color="meetRoomValue === 2 ? '#ffffff' : '#170600'"
              :component="ChartBarStacked"
              @click="handleSelectAction(2)"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="bg-black mt-[1.5vh] h-[37vh] rounded-[5px] overflow-y-scroll">
      123
    </div>
  </div>
</template>

<style scoped></style>
