<template>
  <div>
    <PopUp
      :text="card.text"
      :author="card.author"
      :title="card.title"
      v-if="showModal"
      @close="showModal = false"
      @saveChange="saveChange"
    />

    <div class="card-page">
      <div class="container" v-if="card">
        <div class="section">
          <img class="section__img" :src="card.img" :alt="card.title" />
          <h1>{{ card.title }}</h1>
          <p class="section__description">{{ card.text }}</p>
          <p class="section__author">{{ card.author }}</p>
          <button class="section__btn" @click="showModal = true">
            Редактировать
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PopUp from "../components/PopUp.vue";
export default {
  components: {
    PopUp,
  },
  data() {
    return {
      card: null,
      text: "",
      showModal: false,
    };
  },
  methods: {
    ...mapActions(["CHANGE_INFO"]),

    saveChange(dataList) {
      console.log(this.card.id);
      this.CHANGE_INFO({ ...dataList, id: this.card.id });
    },
  },
  created() {
    this.card = this.CARD;
  },
  computed: {
    ...mapGetters(["CARD"]),
  },
  mounted() {
    const card = this.card.find((card) => card.id == this.$route.params.id);
    if (card) {
      this.card = card;
    }
  },
};
</script>

<style lang="scss" scoped>
.section {
  max-width: 55%;
  margin: auto;

  p {
    text-align: left;
  }

  &__author {
    font-weight: 800;
  }
  &__btn {
    float: left;
  }
  &__img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
}
</style>