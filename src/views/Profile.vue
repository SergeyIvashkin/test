<template>
  <div class="main">
    <h1>profile</h1>
    <input type="text" v-model="searchLine" />
    <div class="cards">
      <Card
        v-for="(card, idx) in filterCards"
        :title="card.title"
        :text="card.text"
        :author="card.author"
        :img="card.img"
        :key="idx"
        :id="card.id"
      />
    </div>
  </div>
</template>

 

<script>
import Card from "../components/Card.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    Card,
  },
  data() {
    return {
      searchLine: "",
    };
  },
  methods: {},
  computed: {
    ...mapGetters(["CARD"]),
    filterCards() {
      let regExp = new RegExp(this.searchLine, "i");
      return this.CARD.filter((el) => regExp.test(el.title));
    },
  },
  created() {
    this.CARD.sort((a, b) => a.title.localeCompare(b.title));
  },
};
</script>

<style lang="scss" scoped>
.cards {
  display: flex;
  justify-content: center;
}
.link {
  text-decoration: none;
}
</style>