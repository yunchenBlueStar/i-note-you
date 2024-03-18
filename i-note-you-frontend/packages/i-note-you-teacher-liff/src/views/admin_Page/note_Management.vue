<template>
  <div class="note_Management">
    <n-row gutter="12"
      ><n-col :span="23"> <div class="textbook_header">筆記管理</div></n-col>
    </n-row>
    <n-row gutter="12"
      ><n-col :span="23">
        <div class="noteBorder">
          <n-row gutter="12"
            ><n-col :span="7">
              <div class="NoteStudentList">
                <div style="padding: 4%">
                  <n-input placeholder=" ">
                    <template #prefix
                      ><img src="../../assets/img/note/search.png" width="20"
                    /></template>
                  </n-input>
                </div>
                <n-scrollbar style="max-height: 700px">
                  <div
                    class="NotestudentListOne"
                    v-for="(site, index) in sites"
                    @click="test()"
                  >
                    <img
                      src="../../assets/img/conference/people_count.png"
                      width="25"
                      style="margin-right: 5%; top: 7px"
                    /><span class="NotestudentListName">{{ site.text }}</span>
                  </div>
                </n-scrollbar>
              </div></n-col
            ><n-col :span="17">
              <n-row gutter="12"
                ><n-col :span="24">
                  <div class="note_similar">
                    <img
                      src="../../assets/img/note/alert-circle.png"
                      width="25"
                    />
                    <span class="note_similar_name">筆記相似度</span>
                    <span class="note_similar_rate">90%</span>
                  </div></n-col
                ></n-row
              >
              <div class="notebook">
                <n-scrollbar style="max-height: 650px"
                  ><div v-for="n in 30">123<br /></div
                ></n-scrollbar>
              </div> </n-col
          ></n-row>
        </div> </n-col
    ></n-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sites: [
        { text: "Google", index: 0 },
        { text: "Runoob", index: 1 },
        { text: "Taobao", index: 2 },
        { text: "Taobao", index: 3 },
        { text: "Taobao", index: 4 },
        { text: "Taobao", index: 5 },
        { text: "Taobao", index: 6 },
        { text: "Taobao", index: 7 },
        { text: "Taobao", index: 8 },
        { text: "Taobao", index: 9 },
        { text: "Taobao", index: 10 },
      ],
    };
  },
  methods: {
    test() {
      for (let index = 0; index < this.sites.length; index++) {
        const element = this.sites[index].index;
        console.log(element);
      }
    },
  },
};
</script>
