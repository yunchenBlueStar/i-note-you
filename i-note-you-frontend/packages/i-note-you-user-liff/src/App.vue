<script setup lang="ts">
import { RouterView } from "vue-router";
import TheNavbar from "./layout/TheNavbar.vue";
// import { MButton, MButton2 } from "i-note-you-ui";
</script>

<template>
  <!-- <MButton />
  <MButton2></MButton2> -->
  <TheNavbar>
    <!-- <RouterView
      class="router-view absolute bg-[#F9F9F9] z-10 left-[6vw] top-1/2 -translate-y-1/2 h-[96.5vh] overflow-y-scroll w-[93.3vw] rounded-[20px]"
    /> -->
    <RouterView
      class="router-view absolute bg-[#F9F9F9] z-10 left-[6vw] top-1/2 -translate-y-1/2 h-[96.5vh] overflow-y-scroll w-[93.3vw] rounded-[20px]"
      v-slot="{ Component }"
    >
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </RouterView>
  </TheNavbar>
</template>

<style>
@import "@/assets/scss/index.scss";
::-webkit-scrollbar {
  width: 0.6rem;
  border-radius: 0.5rem;
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  border-radius: 0.5rem;
  background-color: #9f9f9f;
}
</style>
