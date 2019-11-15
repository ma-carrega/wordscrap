import Vuex from "vuex";

const store = new Vuex.Store({
  state: {
    count: 0,

    users: [
      {
        name: "John Doe",
        age: 22,
        email: "johndoe@gmail.com",
        password: "1234"
      }
    ],
    translations: [
      { id: 1, question: "The boy", translation: "Der Junge" },
      { id: 2, question: "The girl", translation: "Das Mädchen" },
      { id: 3, question: "The child", translation: "Das Kind" },
      { id: 4, question: "The man", translation: "Die Mann" },
      { id: 5, question: "The women", translation: "Die Frau" }
    ],
    pictures: [
      { id: 1, text: "The man", translation: "Der Mann", picture: "man.png" },
      {
        id: 2,
        text: "The women",
        translation: "Der Frau",
        picture: "woman.png"
      },
      { id: 3, text: "The baby", translation: "Das Baby", picture: "baby.png" }
    ],
    badges: [
      { id: 1, name: "Pronouns", picture: "" },
      { id: 2, name: "Adverbs", picture: "" },
      { id: 3, name: "Animals", picture: "" },
      { id: 4, name: "Food", picture: "" }
    ]
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  getters: {
    getTranslations: state => {
      return state.translations;
    },
    getPictures: state => {
      return state.pictures;
    }
  }
});
