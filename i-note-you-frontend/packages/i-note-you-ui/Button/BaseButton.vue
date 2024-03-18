<script setup lang="ts">
  interface Props {
    value: string;
    bgColor: string;
    borderStyle: string;
    radius: number;
    color: string;
  }
  const props = withDefaults(defineProps<Props>(), {
    value: "default button value",
    bgColor: "white",
    borderStyle: "3px solid white",
    radius: 5,
    color: "black",
  });
</script>
<template>
  <button
    :style="{
      backgroundColor: props.bgColor,
      border: props.borderStyle,
      padding: '.5rem 1rem',
      borderRadius: `${props.radius}px`,
      color: props.color,
    }"
  >
    <slot name="btn-name">{{ props.value }}</slot>
  </button>
  <!-- <MButton
    class="fixed top-0 left-10"
    value="test12312321312"
    borderStyle="10px solid red"
    :radius="50"
    bgColor="orange"
    color="white"
  /> -->
</template>

<style scoped>
  button:hover {
    cursor: pointer;
  }
</style>
