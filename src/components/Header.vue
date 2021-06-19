<template>
  <div class="header" v-if="USER">
    <router-link to="/">
      <span @click="comeOut">Выйти</span>
    </router-link>
    <div>
      <router-link to="/Profile">
        <img :src="USER.image" alt="Avatar" class="avatar" />
        <p>{{ USER.name }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(["LOG_OUT"]),
    comeOut() {
      localStorage.removeItem("token");
      console.log("use");
      this.LOG_OUT();
    },
  },
  computed: {
    ...mapGetters(["USER"]),
  },
};
</script>

<style lang="scss" scoped>
.header {
  background: lightblue;
  height: 100px;

  display: flex;
  justify-content: space-between;
}
.avatar {
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
