<script lang="ts">
import { defineComponent, ref } from "vue";
import { useMessage, useDialog } from "naive-ui";
import { FormInst } from "naive-ui";
import user_img from "../../assets/img/conference/people_count.png";
import { changeColor } from "seemly";
import { useThemeVars } from "naive-ui";

export default defineComponent({
  data() {
    return {
      meeting_count: 0,
      value: ref(1),
      people_name: "劉士豪",
      people_img: user_img,
      select_people: 0,
      people_message: "HaHaHa",
      messageTime: "20:00",
      changeColor,
      themeVars: useThemeVars(),
      keyworkName: "你好",
      progress: 90,
      understand_rate: 80,
      focus_rate: 80,
    };
  },
  methods: {
    meetingCount() {
      if (this.meeting_count == 0) {
        this.meeting_count = 1;

        return this.meeting_count;
      } else {
        this.meeting_count = 0;
        return this.meeting_count;
      }
    },
    select_call() {
      if (this.select_people == 0) {
        this.select_people = 1;

        return this.select_people;
      } else {
        this.select_people = 0;
        return this.select_people;
      }
    },
  },
});
</script>
<template>
  <div class="textbook_Management">
    <n-row gutter="12"
      ><n-col :span="11"> <div class="textbook_header">會議管理</div></n-col>
      <n-col :span="12"
        ><n-button
          v-if="meeting_count < 1"
          type="info"
          color="#170600"
          class="creatCourse_btn"
          @click="meetingCount()"
        >
          創建會議
        </n-button></n-col
      >
    </n-row>
    <div v-if="meeting_count >= 1">
      <n-row gutter="12"
        ><n-col :span="16"
          ><div class="call">
            <div class="callIcon">
              <n-row gutter="12"
                ><n-col :span="12" class="callPhone"
                  ><img
                    src="../../assets/img/conference/phone-missed.png"
                    width="35"
                    @click="meetingCount()" /></n-col
                ><n-col :span="12" class="callMic"
                  ><img
                    src="../../assets/img/conference/mic.png"
                    width="35" /></n-col
              ></n-row>
            </div></div
        ></n-col>

        <n-col :span="7"
          ><div class="people">
            <div class="people_show">
              <n-scrollbar class="pepole_list"
                ><div class="people_list2" v-if="select_people == 0">
                  <n-row gutter="12"
                    ><n-col :span="16"
                      ><n-popover trigger="hover" placement="bottom">
                        <template #trigger>
                          <n-progress
                            type="dashboard"
                            stroke-width="10"
                            :percentage="focus_rate"
                            color="red"
                            style="width: 25px; top: -3px; margin-left: 5px"
                            class="peopleRightHot"
                            :show-indicator="false"
                          >
                          </n-progress>
                        </template>
                        <span
                          >學生專注度
                          <p>(紅色進度條會隨著學生閒置時間逐漸減少)</p></span
                        > </n-popover
                      ><img
                        :src="people_img"
                        width="35"
                        class="peopleImg"
                      /><span class="people_name">{{
                        people_name
                      }}</span></n-col
                    ><n-col :span="8" class="mic">
                      <img
                        src="../../assets/img/conference/mic-off.png"
                        width="20"
                        class="peopleRightMic"
                      /> </n-col
                  ></n-row>
                  <n-popover trigger="hover" placement="bottom">
                    <template #trigger>
                      <n-progress
                        type="line"
                        stroke-width="15"
                        :percentage="understand_rate"
                        color="#170600"
                        style="top: 5px; margin-left: 5px"
                      >
                      </n-progress>
                    </template>
                    <span
                      >學生理解度
                      <p>(進度條會隨著學生筆記相似度增加)</p></span
                    >
                  </n-popover>
                </div>
                <div class="people_list3" v-if="select_people == 1">
                  <n-row gutter="12"
                    ><n-col :span="17"
                      ><img :src="people_img" width="35" class="peopleImg" />
                      <span class="user_messageName">
                        {{ people_name }}
                      </span>
                      <span class="people_messageName">
                        {{ people_message }}
                      </span></n-col
                    ><n-col :span="7" class="mic">{{
                      messageTime
                    }}</n-col></n-row
                  >
                </div></n-scrollbar
              >
            </div>

            <div class="people_mean">
              <n-row gutter="12" v-if="select_people == 0"
                ><n-col :span="12" class="people_count"
                  ><n-badge :value="value" :max="60">
                    <img
                      src="../../assets/img/conference/people_count.png"
                      width="35"
                      class="peopleCountImg"
                    /> </n-badge></n-col
                ><n-col :span="12" class="message_mean"
                  ><img
                    @click="select_call()"
                    class="peopleCountImg"
                    src="../../assets/img/conference/message.png"
                    width="35" /></n-col
              ></n-row>
              <n-row gutter="12" v-if="select_people == 1"
                ><n-col :span="12" class="people_count"
                  ><n-badge :value="value" :max="60">
                    <img
                      @click="select_call()"
                      class="peopleCountImg"
                      src="../../assets/img/conference/people_count2.png"
                      width="35"
                    /> </n-badge></n-col
                ><n-col :span="12" class="message_mean"
                  ><img
                    class="peopleCountImg"
                    src="../../assets/img/conference/message2.png"
                    width="35" /></n-col
              ></n-row>
            </div></div></n-col
      ></n-row>
      <n-row gutter="12"
        ><n-col :span="23"
          ><div class="keyword">
            <n-row gutter="12"
              ><n-col :span="10" class="keywordBorder">
                <n-scrollbar class="keyword_list">
                  <div class="keywordRank">
                    <div class="keywordName">{{ keyworkName }}</div>
                    <n-progress
                      type="line"
                      color="#170600"
                      :percentage="progress"
                      indicator-text-color="#170600"
                      class="keywordProgress"
                    />
                  </div> </n-scrollbar
              ></n-col>
              <n-col :span="14">
                <div class="box">
                  <div class="rect">
                    <text>50%</text>
                  </div>
                  <span style="margin-left: 10%; font-size: 20px"
                    >全班理解度</span
                  >
                </div></n-col
              ></n-row
            >
          </div></n-col
        ></n-row
      >
    </div>

    <div v-else class="empty">
      <img src="../../assets/img/conference/NoConference.png" />
    </div>
  </div>
</template>