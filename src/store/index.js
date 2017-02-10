import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms: [
      {name: "Yellow Room"},
      {name: "Red Room"}
    ]
  },
  getters: {
    rooms(state){
      return state.rooms;
    }
  }
})