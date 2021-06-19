import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userData: null,

    cards: [
      {
        id: 1,
        title: "Woman",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio atque  ",
        author: "Carrie Brewer",
        img: "https://studyinbaltics.ee/wp-content/uploads/2020/03/3799Ffxy.jpg",
      },
      {
        id: 3,
        title: "Car",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio atque  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio atque t. Odio atque  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio atque",
        author: "July Dec",
        img: "https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg",
      },
      {
        id: 2,
        title: "City",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio atque  ipsum dolor sit amet consectetur adipisicing elit. O",
        author: "JEyup Ucmaz",
        img: "https://images6.alphacoders.com/312/thumb-1920-312773.jpg",
      },
    ],
  },
  mutations: {
    USER_OUT(state) {
      state.userData = null;
    },
    // данные пользователя
    FORM_LOGIN(state, form) {
      state.userData = form;
    },
    //изменяем данные из cards
    SAVE_INFO(state, info) {
      state.cards.map((el) => {
        if (el.id === info.id) {
          el.author = info.authorModel;
          el.title = info.titleModel;
          el.text = info.textModel;
        }
      });
    },
  },
  actions: {
    //удаление пользователя
    LOG_OUT({ commit }) {
      let user = null;
      commit("USER_OUT", user);
    },
    // данные пользователя
    LOGIN({ commit }, form) {
      commit("FORM_LOGIN", form);
    },
    //изменяем данные из cards
    CHANGE_INFO({ commit }, info) {
      console.log(info);
      commit("SAVE_INFO", info);
    },
  },
  getters: {
    // получаем данные пользователя
    USER: (state) => state.userData,
    CARD: (state) => state.cards,
  },
  modules: {},
});
