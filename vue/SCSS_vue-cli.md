# SCSS in Vue-cli

css 전처리기(css Preprocessor)

CSS는 불편하므로 CSS와 유사한 문법으로 작성하여 웹에서 동작 가능한 CSS로 컴파일해서 사용



~~vue 2버전이므로~~ => webpack4 버전이므로

`npm i node-sass sass-loader@10 --save-dev`

`npm i -D sass-loader@^10 sass`

??



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







https://heropy.blog/2018/01/31/sass/