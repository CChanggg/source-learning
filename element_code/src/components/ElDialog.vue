<template>
  <transition name="dialog-fade">
    <div class="el-dialog_wrapper" v-show="visible">
      <div class="el-dialog">
        <div class="el-dialog_header">
          <span class="el-dialog_title">
            {{title}}
          </span>
        <button type="button" aria-label="Close" class="el-dialog__headerbtn">
          <i class="el-dialog__close el-icon-close"></i>
        </button>
        </div>
        <div class="el-dialog__body">
          <slot></slot>
        </div>
        <div class="dialog__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
   props:{
    visible:Boolean,
    title:{
      type: String,
      default: ''
    }
  },
  name:'ElDialog',
  watch: {
    visible(val) {
      this.$emit('update:visible', val)
      }
  }
}
</script>
<style>

</style>
