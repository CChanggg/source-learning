<template>
  <div class="el-radio-group">
    <slot></slot>
  </div>
</template>

<script>
// 混合类，不属于任何类，可以和任何类结合并且属于这个类
import Emitter from '../mixins/emitter'
export default {
  mixin: [Emitter],
  name:'ElRadioGroup',
  componentName: 'ElRadioGroup',
  props: {
    value: {}
  },
  // 向form组件  dispatch
  watch:{
    value(value) {
      console.log('传到了')
      // this.dispatch('ElFormItem','el.form.change',[value])
    }
  }
}
</script>

<style>

</style>
