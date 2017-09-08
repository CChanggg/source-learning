<template>
  <div class="el-carousel__item">
      <div class="el-carousel__mask">
      </div>
      <slot></slot>
  </div>
</template>
<script>
    export default  {
        name: 'ElCarouselItem',
        created () {
            console.log(this.$parent)
            this.$parent&&this.$parent.updateItems()
        }
    }
</script>
<style>

</style>
