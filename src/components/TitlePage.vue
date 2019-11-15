<script>
import MainContainer from "./start_page/StartPage.vue";
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