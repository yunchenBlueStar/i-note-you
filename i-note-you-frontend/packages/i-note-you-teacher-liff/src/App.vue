<script  >
import { RouterLink, RouterView } from "vue-router";
export default {
  provide() {
    return {
      reload: this.reload,
    };
  },
  data() {
    return { userName: "劉士豪", isRouterAlive: true };
  },
  methods: {
    deviceEnableOrDisable(value) {
      if (value == 1) {
        this.$refs.Data.style.background = "#6F6F6F";
        this.$refs.Data.style.color = "#fff";
        this.$refs.classList.style.background = "transparent";
        this.$refs.classList.style.color = "#909090";
        this.$refs.system.style.background = "transparent";
        this.$refs.system.style.color = "#909090";
      } else if (value == 2) {
        this.$refs.Data.style.background = "transparent";
        this.$refs.Data.style.color = "#909090";
        this.$refs.classList.style.background = "transparent";
        this.$refs.classList.style.color = "#909090";
        this.$refs.system.style.background = "#6F6F6F";
        this.$refs.system.style.color = "#fff";
      } else if (value == 0) {
        this.$refs.classList.style.background = "#6F6F6F";
        this.$refs.classList.style.color = "#fff";
        this.$refs.Data.style.background = "transparent";
        this.$refs.Data.style.color = "#909090";
        this.$refs.system.style.background = "transparent";
        this.$refs.system.style.color = "#909090";
      }
    },
    reload() {
      console.log("reload occure");
      this.isRouterAlive = false;
      this.$nextTick(() => {
        this.isRouterAlive = true;
      });
    },
  },
};
</script>

<template>
  <div class="navbar">
    <n-row gutter="12">
      <n-col :span="24">
        <div class="logo">
          <img src="./assets/logo.svg" class="logo_img" />
        </div>
      </n-col>

      <n-col :span="24">
        <RouterLink to="/">
          <button
            class="navList"
            ref="classList"
            @click="deviceEnableOrDisable(0)"
          >
            <n-row gutter="12">
              <n-col :span="4"
                ><n-icon size="36">
                  <img
                    src="./assets/img/presentation 1.png"
                    style="width: 16px"
                  />
                </n-icon>
              </n-col>
              <n-col :span="20"><p>課程列表</p> </n-col>
            </n-row>
          </button></RouterLink
        ></n-col
      >
      <n-col :span="24">
        <RouterLink to="/teaching_Data">
          <button class="navList2" ref="Data" @click="deviceEnableOrDisable(1)">
            <n-row gutter="12">
              <n-col :span="4"
                ><n-icon size="34">
                  <img src="./assets/img/analysis 1.png" style="width: 16px" />
                </n-icon>
              </n-col>
              <n-col :span="20"><p>教學數據</p> </n-col>
            </n-row>
          </button></RouterLink
        ></n-col
      >
      <n-col :span="24">
        <RouterLink to="/system">
          <button
            class="navList2"
            ref="system"
            @click="deviceEnableOrDisable(2)"
          >
            <n-row gutter="12">
              <n-col :span="4"
                ><n-icon size="34">
                  <img src="./assets/img/gear 1.png" style="width: 16px" />
                </n-icon>
              </n-col>
              <n-col :span="20"><p>設定</p> </n-col>
            </n-row>
          </button></RouterLink
        ></n-col
      >
    </n-row>

    <div class="personal">
      <n-row gutter="12">
        <n-col :span="10">
          <img
            src="./assets/logo.svg"
            class="personal_img"
            style="margin: auto"
          />
        </n-col>
        <n-col :span="14">
          <p class="userName">{{ userName }}</p>
        </n-col>
      </n-row>
    </div>
  </div>
  <n-row gutter="12">
    <n-col :span="24">
      <div class="teach">
        <n-dialog-provider>
          <n-message-provider>
            <router-view v-if="isRouterAlive" />
          </n-message-provider>
        </n-dialog-provider>
      </div>
    </n-col>
  </n-row>
</template>

<style>
@import "@/assets/scss/index.scss";
@import "@/assets/scss/course_Management.scss";
@import "@/assets/scss/admin_Page.scss";
@import "@/assets/scss/textbook_Management.scss";
@import "@/assets/scss/conference_Management.scss";
@import "@/assets/scss/teaching_Data.scss";
@import "@/assets/scss/note_Management.scss";
</style>
