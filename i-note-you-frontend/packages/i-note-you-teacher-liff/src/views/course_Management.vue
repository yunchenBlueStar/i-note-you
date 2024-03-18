<script lang="ts">
import { defineComponent, ref } from "vue";
import { useMessage, useDialog } from "naive-ui";
import { FormInst } from "naive-ui";

export default defineComponent({
  setup() {
    const formRef = ref<FormInst | null>(null);
    const message = useMessage();
    const dialog = useDialog();
    return {
      title_count: 2,
      course_name: "實用英文",
      course_class: "資管三乙",
      course_code: "G2FSDF21",
      course_people: 60,
      inviteCode: ref("GSLKDGJ123"),
      inviteLink: ref("Https://"),

      formRef,
      size: ref("medium"),
      courseForm: ref({
        user: {
          name: "",
          age: "",
        },
        phone: "",
        teacherName: "",
        tacheremail: "",
        courseCode: "",
        courseName: "",
        coursePeople: "",
        courseTime: "",
        courseIntroduction: "",
      }),

      bodyStyle: {
        width: "700px",
      },
      bodyStyle2: {
        width: "400px",
      },
      segmented: {
        content: "soft",
        footer: "soft",
      } as const,

      showModal: ref(false),
      showInviteCode: ref(false),
    };
  },
});
</script>

<template>
  <div class="course_Manage">
    <div class="course_hearder">
      <n-row gutter="12">
        <n-col :span="11">
          <span class="title"
            >課程列表<span class="title_count"
              >共{{ title_count }}堂</span
            ></span
          ></n-col
        ><n-col :span="12">
          <n-button
            type="info"
            color="#170600"
            class="creatCourse_btn"
            @click="showModal = true"
          >
            創建課程
          </n-button></n-col
        ></n-row
      >

      <n-modal
        v-model:show="showModal"
        class="custom-card"
        preset="card"
        :style="bodyStyle"
        size="huge"
        :bordered="false"
        :segmented="segmented"
      >
        <template #header class="creatCourse_header">創建課程 </template>
        <template #header-extra> </template>
        <n-row gutter="12">
          <n-form
            ref="formRef"
            inline
            :label-width="120"
            :model="courseForm"
            :size="size"
          >
            <n-col :span="8" class="course_col"
              ><n-form-item label="課程照片" path="courseImg">
                <n-upload
                  action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
                  list-type="image-card"
                  max="1"
                >
                  +
                </n-upload></n-form-item
              >
              <div class="teacherBasic">
                <n-form-item label="老師姓名" path="teacherName">
                  <n-input
                    v-model:value="courseForm.teacherName"
                    placeholder=" "
                    disabled
                  />
                </n-form-item>
                <n-form-item label="電話" path="phone">
                  <n-input
                    v-model:value="courseForm.phone"
                    placeholder=" "
                    disabled
                  />
                </n-form-item>
                <n-form-item label="E-mail" path="tacheremail">
                  <n-input
                    v-model:value="courseForm.tacheremail"
                    placeholder=" "
                    disabled
                  />
                </n-form-item>
                <n-form-item> </n-form-item>
              </div>
            </n-col>
            <n-col :span="16" class="course_col">
              <n-form-item label="課程名稱" path="courseName">
                <n-input
                  v-model:value="courseForm.courseName"
                  placeholder=" "
                /> </n-form-item
              ><n-row gutter="12">
                <n-col :span="11" class="course_col">
                  <n-form-item label="課程人數" path="coursePeople">
                    <n-input
                      v-model:value="courseForm.coursePeople"
                      placeholder=" "
                    /> </n-form-item
                ></n-col>
                <n-col :span="12" class="course_col">
                  <n-form-item label="上課時間" path="courseTime">
                    <n-input
                      v-model:value="courseForm.courseTime"
                      placeholder=" "
                    /> </n-form-item></n-col
              ></n-row>
              <n-form-item label="課程簡介" path="courseIntroduction">
                <n-input
                  v-model:value="courseForm.courseIntroduction"
                  placeholder=" "
                  type="textarea"
                  style="height: 205px"
                />
              </n-form-item>

              <n-button
                type="info"
                color="#170600"
                class="creatCourseC_btn"
                @click="
                  showModal = false;
                  showInviteCode = true;
                "
              >
                創建
              </n-button>
            </n-col></n-form
          >
        </n-row>
        <!-- <template #footer> 尾部 </template> -->
      </n-modal>
      <n-modal
        v-model:show="showInviteCode"
        class="custom-card"
        preset="card"
        :style="bodyStyle2"
        size="huge"
        :bordered="false"
      >
        <template #header class="creatCourse_header">發送邀請連結 </template>
        <template #header-extra> </template>
        <div class="invite">
          <img src="../assets/img/hash.png" />邀請碼
          <n-input placeholder=" " readonly v-model:value="inviteCode">
            <template #suffix>
              <img src="../assets/img/copy.png" />
            </template>
          </n-input>
        </div>
        <div class="invite">
          <img src="../assets/img/paperclip.png" />邀請連結
          <n-input placeholder=" " readonly v-model:value="inviteLink">
            <template #suffix>
              <img src="../assets/img/copy.png" />
            </template>
          </n-input>
        </div>
        <!-- <template #footer> 尾部 </template> -->
      </n-modal>

      <n-row gutter="12" v-if="title_count >= 1">
        <n-col :span="24" class="course_col"
          ><router-link to="/admin_Page"
            ><div class="course">
              <div class="course_imgBoredr">
                <img src="../assets/logo.svg" />
              </div>
              <div class="course_name">{{ course_name }}</div>
              <div class="course_class">{{ course_class }}</div>
              <div class="course_code_people">
                <n-row gutter="12">
                  <n-col :span="16">{{ course_code }}</n-col
                  ><n-col :span="8"
                    ><n-icon size="20"
                      ><img
                        src="../assets/img/users.png"
                        style="width: 12px" /></n-icon
                    >{{ course_people }}人</n-col
                  ></n-row
                >
              </div>
            </div></router-link
          >

          <router-link to="/admin_Page"
            ><div class="course">
              <div class="course_imgBoredr">
                <img src="../assets/logo.svg" />
              </div>
              <div class="course_name">{{ course_name }}</div>
              <div class="course_class">{{ course_class }}</div>
              <div class="course_code_people">
                <n-row gutter="12">
                  <n-col :span="16">{{ course_code }}</n-col
                  ><n-col :span="8"
                    ><n-icon size="20"
                      ><img
                        src="../assets/img/users.png"
                        style="width: 12px" /></n-icon
                    >{{ course_people }}人</n-col
                  ></n-row
                >
              </div>
            </div></router-link
          >
        </n-col></n-row
      >
      <div v-else class="empty">
        <img src="../assets/img/EmptyBox.png" />
      </div>
    </div>
  </div>
</template>
