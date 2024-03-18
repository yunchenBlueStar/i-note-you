<template>
  <div>
    <n-row gutter="12">
      <div class="secend_mean">
        <div class="class_title">{{ courseName }}</div>
        <div class="secend_list">
          <n-row gutter="12"
            ><n-col :span="24"
              ><button
                class="check_outline"
                @click="deviceEnableOrDisable(0)"
                v-if="value == 0"
              >
                <n-row gutter="12"
                  ><n-col :span="6"
                    ><n-icon size="34"
                      ><img src="../assets/img/book.png" /></n-icon></n-col
                  ><n-col :span="18"
                    ><p class="secend_list_text">課程大綱</p></n-col
                  ></n-row
                ></button
              ><button
                class="outline"
                @click="deviceEnableOrDisable(0)"
                v-if="value != 0"
              >
                <n-row gutter="12"
                  ><n-col :span="6"
                    ><n-icon size="34"
                      ><img src="../assets/img/book2.png" /></n-icon></n-col
                  ><n-col :span="18"
                    ><p class="secend_list_text">課程大綱</p></n-col
                  ></n-row
                >
              </button></n-col
            ></n-row
          >
          <n-row gutter="12"
            ><n-col :span="24"
              ><button
                class="check_outline"
                @click="deviceEnableOrDisable(1)"
                v-if="value == 1"
              >
                <n-row gutter="12"
                  ><n-col :span="6"
                    ><n-icon size="34"
                      ><img src="../assets/img/textbook1.png" /></n-icon></n-col
                  ><n-col :span="18"
                    ><p class="secend_list_text">教材管理</p></n-col
                  ></n-row
                ></button
              ><button
                class="outline"
                @click="deviceEnableOrDisable(1)"
                v-if="value != 1"
              >
                <n-row gutter="12"
                  ><n-col :span="6"
                    ><n-icon size="34"
                      ><img src="../assets/img/textbook2.png" /></n-icon></n-col
                  ><n-col :span="18"
                    ><p class="secend_list_text">教材管理</p></n-col
                  ></n-row
                >
              </button></n-col
            ></n-row
          >
          <n-row gutter="12"
            ><n-col :span="24"
              ><button
                class="check_outline"
                @click="deviceEnableOrDisable(2)"
                v-if="value == 2"
              >
                <n-row gutter="12"
                  ><n-col :span="6"
                    ><n-icon size="34"
                      ><img src="../assets/img/messages1.png" /></n-icon></n-col
                  ><n-col :span="18"
                    ><p class="secend_list_text">通知管理</p></n-col
                  ></n-row
                >
              </button>
              <button
                class="outline"
                @click="deviceEnableOrDisable(2)"
                v-if="value != 2"
              >
                <n-row gutter="12"
                  ><n-col :span="6"
                    ><n-icon size="34"
                      ><img src="../assets/img/messages2.png" /></n-icon></n-col
                  ><n-col :span="18"
                    ><p class="secend_list_text">通知管理</p></n-col
                  ></n-row
                >
              </button></n-col
            ></n-row
          >
          <n-row gutter="12"
            ><n-col :span="24"
              ><button
                class="check_outline"
                @click="deviceEnableOrDisable(3)"
                v-if="value == 3"
              >
                <n-row gutter="12"
                  ><n-col :span="6"
                    ><n-icon size="34"
                      ><img
                        src="../assets/img/videoconference1.png" /></n-icon></n-col
                  ><n-col :span="18"
                    ><p class="secend_list_text">會議管理</p></n-col
                  ></n-row
                ></button
              ><button
                class="outline"
                @click="deviceEnableOrDisable(3)"
                v-if="value != 3"
              >
                <n-row gutter="12"
                  ><n-col :span="6"
                    ><n-icon size="34"
                      ><img
                        src="../assets/img/videoconference2.png" /></n-icon></n-col
                  ><n-col :span="18"
                    ><p class="secend_list_text">會議管理</p></n-col
                  ></n-row
                >
              </button></n-col
            ></n-row
          >
          <n-row gutter="12"
            ><n-col :span="24"
              ><button
                class="check_outline"
                @click="deviceEnableOrDisable(4)"
                v-if="value == 4"
              >
                <n-row gutter="12"
                  ><n-col :span="6"
                    ><n-icon size="34"
                      ><img src="../assets/img/student1.png" /></n-icon></n-col
                  ><n-col :span="18"
                    ><p class="secend_list_text">學生管理</p></n-col
                  ></n-row
                ></button
              ><button
                class="outline"
                @click="deviceEnableOrDisable(4)"
                v-if="value != 4"
              >
                <n-row gutter="12"
                  ><n-col :span="6"
                    ><n-icon size="34"
                      ><img src="../assets/img/student2.png" /></n-icon></n-col
                  ><n-col :span="18"
                    ><p class="secend_list_text">學生管理</p></n-col
                  ></n-row
                >
              </button></n-col
            ></n-row
          >
        </div>
      </div>

      <n-col :span="24"
        ><div class="Management">
          <div v-if="value == 0"></div>
          <div v-if="value == 1"><textbook_Management /></div>
          <div v-if="value == 2"></div>
          <div v-if="value == 3"><conference_Management /></div>
          <div v-if="value == 4"></div></div></n-col
    ></n-row>
  </div>
</template>

<script  >
import textbook_Management from "./admin_Page/textbook_Management.vue";
import conference_Management from "./admin_Page/conference_Management.vue";
export default {
  data() {
    return { courseName: "實用英文", value: 0 };
  },
  methods: {
    deviceEnableOrDisable(value) {
      this.value = value;
      return this.value;
    },
  },
  components: {
    textbook_Management,
    conference_Management,
  },
};
</script>