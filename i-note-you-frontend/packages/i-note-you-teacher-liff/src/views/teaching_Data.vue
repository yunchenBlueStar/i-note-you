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
      progress: 80,
      TeachSuProgress: 70,
    };
  },
  methods: {},
});
</script>
<template>
  <div class="teaching_Data">
    <n-row gutter="12"
      ><n-col :span="23"> <div class="textbook_header">教學數據</div></n-col>
    </n-row>
    <n-row gutter="12"
      ><n-col :span="15"
        ><div class="studentsOnClass">
          <div class="studentsOnClassTitle">學生到課率</div>
          <n-row gutter="12"
            ><n-col :span="9">
              <n-progress
                style="width: 220px"
                type="circle"
                :percentage="progress"
                :gap-offset-degree="180"
                color="#170600"
                ><span style="text-align: center" class="studentsOnClassText"
                  >{{ progress }}%</span
                ></n-progress
              ></n-col
            ><n-col :span="15" class="studentsOnClassDataBorder">
              <div class="dataTitle">
                <span class="dataTitleText">統計數據</span>
              </div>
              <n-statistic :value="80" class="studentsOnClassData">
                <template #prefix></template>
                <template #suffix>
                  / 100
                  <div class="dataCount">次</div></template
                >
              </n-statistic>
            </n-col>
          </n-row>
          <div class="studentsOnClassSecondTitle">(所有授課班級的到課率)</div>
        </div></n-col
      ><n-col :span="8"
        ><div class="studentsOnClass">
          <div class="studentsOnClassTitle">教學成功率</div>
          <div class="teachSu">
            <n-progress
              style="width: 220px"
              type="circle"
              :percentage="TeachSuProgress"
              :gap-offset-degree="180"
              color="#170600"
              ><span style="text-align: center" class="studentsOnClassText"
                >{{ TeachSuProgress }}%</span
              ></n-progress
            >

            <div></div>
          </div>
          <div class="studentsOnClassSecondTitle">
            (所有授課班級學生筆記相似度)
          </div>
        </div></n-col
      ></n-row
    >

    <n-row gutter="12"
      ><n-col :span="13"
        ><div class="studentsOnClass">
          <div class="studentsOnClassTitle">課程熱度排行</div>
          <div class="teachSu">
            <n-progress
              style="width: 300px"
              type="circle"
              :percentage="TeachSuProgress"
              :gap-offset-degree="180"
              color="#170600"
              ><span style="text-align: center" class="studentsHotText"
                >{{ TeachSuProgress }}%</span
              ></n-progress
            >
          </div>
        </div></n-col
      ><n-col :span="5"
        ><div class="studentsOnClass">
          <div class="teachSu">
            <n-progress
              style="width: 120px"
              type="circle"
              :percentage="TeachSuProgress"
              :gap-offset-degree="180"
              color="#170600"
              ><span style="text-align: center" class="studentsAvgText"
                >{{ TeachSuProgress }}%</span
              ></n-progress
            >
          </div>
          <div class="studentsAvgSecondTitle">關鍵字熱度平均</div>
        </div>
        <n-col :span="24"
          ><div class="studentsOnClass">
            <div class="teachSu">
              <n-progress
                style="width: 120px"
                type="circle"
                :percentage="TeachSuProgress"
                :gap-offset-degree="180"
                color="#170600"
                ><span style="text-align: center" class="studentsAvgText"
                  >{{ TeachSuProgress }}%</span
                ></n-progress
              >
            </div>
            <div class="studentsAvgSecondTitle">教學成功率平均</div>
          </div>
        </n-col></n-col
      ><n-col :span="5"
        ><div class="studentsOnClass">
          <div class="teachSu">
            <n-progress
              style="width: 120px"
              type="circle"
              :percentage="TeachSuProgress"
              :gap-offset-degree="180"
              color="#170600"
              ><span style="text-align: center" class="studentsAvgText"
                >{{ TeachSuProgress }}%</span
              ></n-progress
            >
          </div>
          <div class="studentsAvgSecondTitle">學生到課率平均</div>
        </div>
      </n-col></n-row
    >
  </div>
</template>

<style >
</style>
