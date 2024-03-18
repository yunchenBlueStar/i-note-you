<script lang="ts">
import note_Management from "./note_Management.vue";
import { defineComponent, ref } from "vue";
import { useMessage, useDialog } from "naive-ui";
import { FormInst } from "naive-ui";
export default defineComponent({
  data() {
    const formRef = ref<FormInst | null>(null);
    return {
      textbook_count: 1,
      Management: 0,
      InClassDate: "2022/05/06",
      Unit: "Magic",
      showCreatTextBook: ref(false),
      formRef,
      size: ref("medium"),
      textbookForm: ref({
        InClassDate: "",
        Unit: "",
      }),
      bodyStyle: {
        width: "600px",
      },
    };
  },
  methods: {
    selectMangement(value: number) {
      if (value == 0) {
        this.Management = 0;
        return this.Management;
      }
      if (value == 1) {
        this.Management = 1;
        return this.Management;
      }
      if (value == 2) {
        this.Management = 2;
        return this.Management;
      }
    },
  },
  components: {
    note_Management,
  },
});
</script>
<template>
  <div class="textbook_Management" v-if="Management == 0">
    <n-row gutter="12"
      ><n-col :span="11"> <div class="textbook_header">教材管理</div></n-col>
      <n-col :span="12"
        ><n-button
          type="info"
          color="#170600"
          class="creatCourse_btn"
          @click="showCreatTextBook = true"
        >
          創建教材
        </n-button></n-col
      > </n-row
    ><n-row gutter="12"
      ><n-col :span="24">
        <div class="textbook_titleList">
          <div class="textbook_titlelist_text">上課日</div>
          <div class="textbook_titlelist_text">課程單元</div>
          <div class="textbook_titlelist_text">教材內容</div>
          <div class="textbook_titlelist_text">錄影管理</div>
          <div class="textbook_titlelist_text">筆記管理</div>
        </div></n-col
      ></n-row
    ><n-row gutter="12" v-if="textbook_count >= 1"
      ><n-col :span="24">
        <div class="textbook_List">
          <div class="textbook_list_text">{{ InClassDate }}</div>
          <div class="textbook_list_text">{{ Unit }}</div>
          <div class="textbook_list_text">
            <n-button type="info" color="#5B2202" class="textbookBtn">
              進入教材
            </n-button>
          </div>
          <div class="textbook_list_text">
            <n-button type="info" color="#5B2202" class="textbookBtn">
              錄影列表
            </n-button>
          </div>
          <div class="textbook_list_text">
            <n-button
              type="info"
              color="#5B2202"
              class="textbookBtn"
              @click="selectMangement(1)"
            >
              筆記列表
            </n-button>
          </div>
        </div></n-col
      ></n-row
    >
    <div v-else class="empty">
      <img src="../../assets/img/textbook/NoTextbook.png" />
    </div>
  </div>
  <n-modal
    v-model:show="showCreatTextBook"
    class="custom-card"
    preset="card"
    :style="bodyStyle"
    size="huge"
    :bordered="false"
  >
    <template #header class="creatCourse_header">創建教材 </template>
    <template #header-extra> </template>

    <n-form ref="formRef" inline :model="textbookForm">
      <n-row gutter="12"
        ><n-col :span="24">
          <label style="top: 18px; font-size: 20px"
            ><img
              src="../../assets/img/textbook/clock.png"
              width="20"
              style="top: 2px"
            />上課日</label
          >
          <n-form-item path="InClassDat">
            <n-date-picker
              v-model:value="textbookForm.InClassDat"
              type="date"
              placeholder=" "
            /> </n-form-item
          ><label style="top: 18px; font-size: 20px"
            ><img
              src="../../assets/img/textbook/Vector.png"
              width="20"
              style="top: 2px"
            />單元名稱</label
          >
          <n-form-item path="Unit">
            <n-input placeholder=" " v-model:value="textbookForm.Unit">
            </n-input>
          </n-form-item>
          <label style="top: 18px; font-size: 20px"
            ><img
              src="../../assets/img/textbook/Group 124.png"
              width="20"
              style="top: 2px"
            />上傳教材</label
          >
          <n-form-item path="Unit">
            <n-upload
              action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
              :headers="{
                'naive-info': 'hello!',
              }"
              :data="{
                'naive-data': 'cool! naive!',
              }"
            >
              <n-button color="#979090">選擇文件</n-button>
            </n-upload> </n-form-item
          ><n-form-item class="center"
            ><n-button
              color="#170600"
              @click="showCreatTextBook = false"
              class="CreatTextbookBtn"
              >確認</n-button
            ></n-form-item
          ></n-col
        ></n-row
      >
    </n-form>
  </n-modal>
  <div v-if="Management == 1"><note_Management /></div>
</template>
