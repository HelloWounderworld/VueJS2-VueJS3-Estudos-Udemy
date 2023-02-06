// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

module.exports = ({
  runtimeCompiler: process.env.NODE_ENV !== 'production'
})
