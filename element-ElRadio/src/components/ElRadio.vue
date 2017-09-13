<template>
  <label class="el-radio">
    <span class="el-radio__input"
    :class="{
      'is-disabled':isDisabled,
      'is-checked': model === label,
      'is-focus': focus
    }">
      <span class="el-radio__inner"></span>
      <!-- input radio 是不可靠的 在移动端太小了
      switch 在PC端不仅小又丑
      表现和功能分离-->
      <input type="radio"
			:value="label"
			:name="name"
			v-model="model"
			:disabled="isDisabled"
      @focus="focus=true"
      @blur="focus=false"
			class="el-radio__original">
    </span>
    <span class="el-radio__label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>
import Emitter from '../mixins/emitter'
	export default {
    name: 'ElRadio',
    mixins: [Emitter],
    // 公共方法 不想要function mixin 方法集体类 util
		props: {
			label: {},
			// 将自于父组件v-model传递
			value: {},
			name: String,
			disabled: Boolean
    },
    data() {
      return {
        focus: false
      }
    },
		computed: {
      // 表单元素 -> group ?-> formitem -> form -> 父组件包含表单对应的值的
      // v-model 双向绑定
      isGroup () {
        let parent = this.$parent
        while (parent) {
        if (parent.$options.componentName !== 'ElRadioGroup'){
          parent = parent.$parent
          } else {
            this._radioGroup = parent
            return true
          }
        }
      return false
      },
			isDisabled () {
				return this.disabled
			},
    model: {
      // get 获取json 的值时，执行的方法
      // 即要返回值，同时还可以做些别的事
      get () {
        // console.log('请求了model')
        return this.isGroup ? this._radioGroup.value:this.value
      },
      set (val) {
        // console.log('值发生了改变')
        // vue提供一个input事件 改变父组件中v-model value的值
        // 通知radio的值改变
        if(this.isGroup){
          // radio相关的层在ElRadioGroup上一层
          // dispatch一个事件 通知一下 让他冒泡
          // dispatch 是因为 本组件解决不了 让ElRadioGroup去做 触发input值的改变 传过去的值
          this.dispatch('ElRadioGroup','input',[val])//向父组件分发事件
          }else {
            // 上一层就是radio 所在
          this.$emit('input', val)//触发input事件
          }
        }
			}
		}
	}
</script>


<style>

</style>
