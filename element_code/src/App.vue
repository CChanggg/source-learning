<template>
  <div id="app">
    <el-button @click="doDefaultTap" size="large" :loading="true" icon="edit">默认按钮</el-button>
    <el-button type="primary" :disabled="true" icon="edit">主要按钮</el-button>
      <!-- : 后边的是js区域 -->
    <el-button type="text">文字按钮</el-button>
    <div>
      <el-button-group>
        <el-button icon="arrow-left" type="primary">上一页</el-button>
        <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right" ></i></el-button>
      </el-button-group>
    </div>
    <div>
      <el-button-group>
        <el-button type="primary" icon="edit"></el-button>
        <el-button type="primary" icon="share"></el-button>
        <el-button type="primary" icon="delete"></el-button>
      </el-button-group>
    </div>
    <div>
      <el-button type="text" @click="dialogVisible=true">
        点击打开Dialog
      </el-button>
      <el-dialog  :visible.sync="dialogVisible" title="提示">
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
    <div>
      <span class="demonstration">默认 Hover 指示器触发</span>
      <el-carousel :interval="1000" :initialIndex="2" height="150px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{item}}</h3>
        </el-carousel-item>
      </el-carousel>
  </div>
    <router-view></router-view>
  </div>
</template>

<script>
import ElDialog from './components/ElDialog'
import ElButton from './components/ElButton'
import ElButtonGroup from './components/ElButtonGroup'
import ElCarousel from './components/ElCarousel'
import ElCarouselItem from './components/ElCarouselItem'

export default {
  name: 'app',
  data() {
    return {
      dialogVisible: false
    }
  },
  components: {
  "el-button": ElButton,
  "el-button-group": ElButtonGroup,
  "el-dialog": ElDialog,
  "el-carousel": ElCarousel,
  "el-carousel-item": ElCarouselItem
  },
  methods: {
    doDefaultTap(evt) {
      console.log('dddd')
      console.log(evt)
    }
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
.el-carousel__item h3{
  color: #475669;
  font-size: 14px;
  opacity: .75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

</style>
