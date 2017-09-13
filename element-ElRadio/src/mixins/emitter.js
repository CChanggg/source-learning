// 混合可以为一切组件提供有用的方法
// 组件+mixins = 组件
// 组件 + 子组件 = 新组件
export default {
  methods: {
      dispatch (componentName, eventName, params) {
          var parent = this.$parent || this.$root //App
          var name = parent.$options.componentName
      while (parent && (!name || name !== componentName)) {
              parent = parent.$parent
              if(parent) {
                  name = parent.$options.componentName
              }
          }
          if(parent) {
            // concat 连接数组
              parent.$emit.apply(parent, [eventName].concat((params)))
          }
      }
  }
}
