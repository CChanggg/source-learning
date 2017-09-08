<template>
	<div class="el-carousel" @mouseenter.stop="handleMouseEnter"
		@mouseleave.stop="handleMouseLeave">
		<div class="el-carousel__container" :style="{height:height}">
        <!-- 驼峰式命名 eg: fonSize:9px-->
			<transition name="carousel-arrow-left">
				<button
        v-if="arrow !== 'never'"
				v-show="arrow==='always'||hover"
				class="el-carousel__arrow el-carousel__arrow--left">
					<i class="el-icon-arrow-left"></i>
				</button>
			</transition>
			<transition name="carousel-arrow-right">
				<button
        v-if="arrow !== 'never'"
				v-show="arrow==='always'||hover"
				class="el-carousel__arrow el-carousel__arrow--right">
					<i class="el-icon-arrow-right"></i>
				</button>
			</transition>
      <slot></slot>
		</div>
    <ul class="el-carousel__indicators">
			<li class="el-carousel__indicator" v-for="(item, index) in items">
				<button class="el-carousel__button"></button>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
    name: 'ElCarousel',
    props: {
        height: String,
        arrow: {
          typr: String,
          default: 'hover'
        },
        initialIndex:{
          type:Number,
          default: 0
        },
        interval: {
          type:Number,
          default: 3000
        },
        autoplay: {
          type: Boolean,
          default: true
        }
    },
    data() {
      return {
        hover: false,
        items: [],
        activeIndex: -1,
        timer:null,
        containerWidth: 0,
      }
    },
    methods: {
      handleMouseEnter (evt) {
        this.hover = true
        this.pauseTimer()
      },
      handleMouseLeave (evt) {
        this.hover = false
        this.startTimer()
      },
      updateItems() {
        this.items = this.$children.filter(
          child =>child.$options.name ==='ElCarouselItem'
        )
      },
      startTimer() {
        if (this.interval <= 0 || !this.autoplay)
        return;
        this.timer = setInterval(this.playSlides,this.interval)
      },
      playSlides(){
        if(this.activeIndex < this.items.length-1){
          this.activeIndex++
        }else{
          this.activeIndex = 0
        }
      },
      pauseTimer() {
        clearInterval(this.timer)
      }
    },
    mounted () {
      // 里面有多少个item?
      this.containerWidth = this.$el.offsetWidth
      this.updateItems()
      // 初始化activIndex
      this.$nextTick(() =>{
        if (this.initialIndex < this.items.length && this.initialIndex >= 0){
        this.activeIndex = this.initialIndex
        }
      })
      // console.log(this.$el.offsetWidth)
      // 启动定时器

    }
}
</script>
<style>

</style>
