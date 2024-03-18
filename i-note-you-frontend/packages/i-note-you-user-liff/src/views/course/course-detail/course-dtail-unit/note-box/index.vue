<script setup lang="ts">
import PersonalNote from "./PersonalNote.vue";
import ClassNote from "./ClassNote.vue";
import HistoryNote from "./HistoryNote.vue";
import KeywordRank from "./KeywordRank.vue";
interface Props {
  noteType: number;
}
const props = defineProps<Props>();
</script>
<template>
  <div class="h-full">
    <PersonalNote v-if="props.noteType === 0" />
    <ClassNote v-if="props.noteType === 1" />
    <HistoryNote v-if="props.noteType === 2" />
    <KeywordRank v-if="props.noteType === 3" />
  </div>
</template>

<style scoped></style>
