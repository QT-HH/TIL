# SCSS in Vue-cli

vue 2버전이므로

`npm i node-sass sass-loader@10 --save-dev`



`vue.config.js`에 css속성 추가

```javascript
/* _variables.scss와 _mixins.scss를 전역으로 추가해주었다. */

module.exports = {
  configureWebpack: {
      output: {
          publicPath: '/'
      }
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/styles/_variables.scss";
          @import "@/styles/_mixins.scss";
        `
      }
    }
  }
}
```



