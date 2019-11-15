<template>
  <div class="main_container">
    <div class="content"></div>
    <div class="menu"></div>
    <div class="taskInformation"></div>
    <div class="titleHeader"></div>
    <div class="infoBar"></div>
    <div class="languageBar"></div>
  </div>
</template>

<script>
import StartPage from "./start_page/StartPage.vue";
export default {
  name: "MainContainer",
  props: {
    msg: String
  },
  components: {
    StartPage
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main_container {
  display: grid;
  grid-template-columns: repeat (2, 1fr) 6fr 2fr;
  grid-template-rows: repeat (2, 1fr) 5fr 1fr;
  grid-column-gap: 5px;
  grid-row-gap: 5px;
}

.content {
  grid-area: 3/3/5/4;
}
.menu {
  grid-area: 2/1/5/3;
}
.taskInformation {
  grid-area: 3/4/5/5;
}
.titleHeader {
  grid-area: 1/1/2/4;
}
.infoBar {
  grid-area: 2/3/3/4;
}
.languageBar {
  grid-area: 1/4/3/5;
}
</style>