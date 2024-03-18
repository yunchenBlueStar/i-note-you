<script setup lang="ts">
import CourseDetailSidebar from "../../components/CourseDetailSidebar.vue";
import { NTimeline, NTimelineItem, NRadioGroup, NRadio } from "naive-ui";
import { ref } from "vue";
import NoteBox from "./note-box/index.vue";
import TeachingMaterialBox from "./teaching-material-box/index.vue";
import VideoBox from "./video-box/index.vue";
import MeetingBox from "./meeting-box/index.vue";

interface Props {
  unitId: string | null;
}
const props = defineProps<Props>();
const sidebarDatas = ref(["開始上課", "課程錄影", "我得筆記", "加入會議"]);
const sidebarValue = ref(0);
const noteDatas = ref(["個人筆記", "班級共同筆記", "歷屆筆記", "關鍵字排行"]);
const noteValue = ref(0);
const handleSelectSidebar = (sidebarIndex: number) => {
  sidebarValue.value = sidebarIndex;
};
</script>
<template>
  <div class="h-full flex justify-between">
    <CourseDetailSidebar :title="'人力管理'">
      <div class="unit-detail-sidebar">
        <NTimeline>
          <NTimelineItem
            v-for="(sidebarData, index) in sidebarDatas"
            :key="index"
          >
            <div
              @click="handleSelectSidebar(index)"
              v-if="index % 2 === 1"
              :class="`${
                sidebarValue === index
                  ? 'bg-[#170600] text-white rounded-[5px] px-[0.5vw] py-[0.1vh]'
                  : ''
              } cursor-pointer font-['Robot-Regular'] text-sm w-fit ease-in-out duration-500 `"
            >
              {{ sidebarData }}
            </div>

            <div
              v-else
              @click="handleSelectSidebar(index)"
              :class="` cursor-pointer font-['Robot-Regular'] text-sm`"
            >
              <div
                :class="`${
                  sidebarValue === index
                    ? 'bg-[#170600] text-white rounded-[5px] px-[0.5vw] py-[0.1vh]'
                    : ''
                } w-fit ease-in-out duration-500`"
              >
                {{ sidebarData }}
              </div>
              <div
                :class="`${
                  sidebarValue === index ? ' opacity-1 h-fit' : 'opacity-0 h-0'
                } ease-in-out duration-300 py-[0.5vh]`"
              >
                <NRadioGroup
                  v-model:value="noteValue"
                  name="radiogroup"
                  v-if="index === 2"
                >
                  <NRadio
                    v-for="(noteData, index) in noteDatas"
                    :key="index"
                    :value="index"
                  >
                    <div class="!text-[#170600]">{{ noteData }}</div>
                  </NRadio>
                </NRadioGroup>
                <div v-else>123123</div>
              </div>
            </div>
          </NTimelineItem>
        </NTimeline>
      </div>
    </CourseDetailSidebar>
    <div class="w-[82vw] h-full">
      <TeachingMaterialBox v-if="sidebarValue === 0" />
      <VideoBox v-if="sidebarValue === 1" />
      <NoteBox v-if="sidebarValue === 2" :note-type="noteValue" />
      <MeetingBox v-if="sidebarValue === 3" />
    </div>
  </div>
</template>

<style lang="scss">
.unit-detail-sidebar {
  .n-collapse-item-arrow {
    display: none !important;
  }
  .n-timeline-item-timeline__circle {
    background-color: #170600;
    border-color: #170600 !important;
  }
  .n-timeline-item-timeline__line {
    background-color: #170600 !important;
  }
  .n-collapse-item__header {
    font-size: 0.875rem;
  }
  .n-radio .n-radio--checked {
    --n-dot-color-active: #170600 !important;
  }
}
</style>
