<script setup lang="ts">
import { ref } from "vue";
import UnitList from "./UnitList.vue";
import UnitDetail from "./UnitDetail.vue";
import { useCourseStoreState } from "@/stores/course";

const unitDetailValue = ref<string | null>(null);
const courseStore = useCourseStoreState();
</script>
<template>
  <div class="w-full h-full">
    <UnitList
      v-if="courseStore.courseUnitVal === null"
      v-model:unitDetailValue="unitDetailValue"
    />
    <UnitDetail v-else :unitId="unitDetailValue" />
  </div>
</template>

<style scoped></style>
