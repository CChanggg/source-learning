<template>
  <div id="app">
    <!-- <el-radio class="radio" name="gender" v-model="radio" label="1">
      男
    </el-radio>
     <el-radio class="radio" name="gender" v-model="radio" label="2">
      女
    </el-radio> -->
    <el-radio-group v-model="radio">
      <el-radio label="杭州"></el-radio>
      <el-radio label="深圳"></el-radio>
      <el-radio label="厦门"></el-radio>
      <el-radio label="北京"></el-radio>
      <el-radio label="上海"></el-radio>
    </el-radio-group>
  </div>
</template>

<script>
import ElRadioGroup from './components/ElRadioGroup.vue'
import ElRadio from './components/ElRadio.vue'
export default {
  name: 'app',
  data(){
    return{
      radio: '杭州',
    }
  },
  components:{
    'el-radio':ElRadio,
    'el-radio-group':ElRadioGroup
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
