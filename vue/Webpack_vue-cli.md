# vue-cli 환경에서 webpack 옵션 설정



`npm run serve` : 로컬 서버를 웹팩 데브 서버로 실행

`npm run build` : 웹팩으로 최종 결과물 변환



vue cli 3버전 이상부터

node_modules / @vue / cli-service 에 `webpack.config.js` 숨겨놓음



__프로젝트에 설정된 웹팩 옵션들을 보고싶다면__

`vue inspect > options.js`



__`vue.config.js` 파일 생성__ (src 바깥 root 폴더에 저장)

```javascript
module.exports = {
  configureWebpack: {
      output: {
          publicPath: '/'
      }
  }
}
```







- https://kabkee.github.io/vue-cli/vue-cli-publicPath/