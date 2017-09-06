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
    <router-view></router-view>
  </div>
</template>

<script>
import ElDialog from './components/ElDialog'
import ElButton from './components/ElButton'
import ElButtonGroup from './components/ElButtonGroup'
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
  "el-dialog": ElDialog
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
</style>
