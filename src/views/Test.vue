<template>
  <div class="test">
    <div>
      平均值: {{average}}
    </div>
    <button @click="update">加载更多</button>
    <div class="list" v-for="item in dataList" :key="item.id">
      <div>{{item.id}}</div>
      <div>{{item.data}}</div>
      <div>{{item.time}}</div>
    </div>
  </div>
</template>

<script>
import mockGenerator from '../mock'
export default {
  name: 'test',
  data () {
    return {
      dataList: [],
      average: ''
    }
  },
  computed: {
    myValue () {
      return this.$store.state.dataList
    }
  },
  watch: {
    myValue (value) {
      this.getData()
    }
  },
  methods: {
    getData () {
      this.average = this.$store.getters.getAverage
      this.dataList = this.$store.getters.getData
    },
    update () {
      let startIndex = this.dataList.length
      let number = startIndex + 10
      mockGenerator(startIndex, number)
        .then(value => { this.$store.state.dataList.push(...value) })
        .catch(error => { console.log(error) })
    }
  },
  created () {
    this.$store.dispatch('getDataCall')
  }
}
</script>

<style scoped lang="less">

.test{

  .list{
      display:table-row;

      div {
        display:table-cell;
        padding: 0 0.5em;
      }
  }
  button{
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: blue;
    padding: 10px;
    font-size: 15px;
    color: white;
    width: 100%;
  }
}

</style>
