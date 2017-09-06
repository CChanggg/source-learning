<template>
  <button @click="handleClick" :disabled="disabled"
    class="el-button"
    :class="[type?'el-button--'+type:'',
    size?'el-button--'+size:'',
    {
      'is-disabled': disabled,
      'is-loading': loading,
      'is-plain': plain
    }]">
    <i v-if="loading" class="el-icon-loading"></i>
    <i :class="'el-icon-'+icon" v-if="icon&&!loading" @click="handleInnerClick"></i>
    <!-- 默认按钮?文字描述-->
    <span v-if="$slots.default"><slot></slot></span>
    <!-- slot使得 引入组件时插入任何的HTML -->
  </button>
</template>
<script>
export default {
  props: {
    type: {
      types: String,
      default: 'default'
    },
    size: String,
    icon: {
      type: String,
      default: 'default'
    },
    disabled: Boolean,
    loading: Boolean,
    plain: Boolean,
    autofocus:Boolean
  },
  methods: {
    handleClick (evt) {
      this.$emit('click',evt)
    },
    handleInnerClick(evt) {
      this.$emit('click',evt)
    }
  }
}
</script>
<style>

</style>
