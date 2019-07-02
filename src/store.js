import Vue from 'vue'
import Vuex from 'vuex'
import mockGenerator from './mock'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataList: []
  },
  mutations: {
    setDataList (state, value) {
      state.dataList = value
      console.log(value)
    }
  },
  getters: {
    getAverage: state => {
      let list = state.dataList
      let sum = 0
      let len = list.length
      for (let i = 0; i <= len - 1; i++) {
        sum += (list[i].data) * 1
      }
      sum = (sum / len).toFixed(2)
      return sum
    },
    getData: state => state.dataList
  },
  actions: {
    getDataCall (context) {
      // TODO
      mockGenerator()
        .then((value) => { context.commit('setDataList', value) })
        .catch((error) => { console.log(error) })
    }
  }
})
