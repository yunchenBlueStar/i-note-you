<script setup lang="ts">
import { NAvatar, NIcon } from "naive-ui";
import { Microphone, Information } from "@vicons/carbon";
interface Props {
  status: boolean;
}
const props = defineProps<Props>();
</script>
<template>
  <div
    :class="`shadow-[0px_0px_10px_rgba(0,0,0,0.25)] mb-[1.5vh] flex justify-between items-center px-[0.5vw] py-[1vh] rounded-[10px] ease-in-out duration-300 ${
      props.status ? '' : 'border-4 border-[#DF0000]'
    } `"
  >
    <div class="flex items-center">
      <NAvatar
        class="w-[1.5vw] h-[1.5vw]"
        round
        src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      />
      <div class="ml-[0.5vw] text-lg">王大明</div>
    </div>
    <div class="flex items-center">
      <NIcon
        v-if="!props.status"
        class="text-[1.5vw] cursor-pointer"
        :color="'#DF0000'"
        :component="Information"
      />
      <NIcon
        class="text-[1.5vw] cursor-pointer ml-[0.5vw]"
        :color="'#170600'"
        :component="Microphone"
      />
    </div>
  </div>
</template>

<style scoped></style>
