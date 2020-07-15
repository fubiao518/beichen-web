<template>
  <div class="middle" :style="backgroundDiv">
    <img src="@/assets/img/login.jpg" width="100%" height="100%"/>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      backgroundDiv: {
        backgroundImage: "url(" + require("@/assets/img/login.jpg") + ")"
      }
    };
  },
  components: {}
};
</script>

<style>
.middle {
  height: 100%;
  width: 100%;
  background: no-repeat, center;
  background-size: cover;
  position: fixed;
}
</style>
