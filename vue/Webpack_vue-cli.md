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



`publicPath`

=> 개발환경과 달리 deploy한 환경에서는 publicPath가 달라질 수 있기에 Production과 Development환경에 따른 publickPath를 수시로 변경해줘야한다.





그러므로 환경에따라 publicPath를 변경해줘야한다

```javascript
/* process.env.NODE_ENV를 활용한다. */

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? `/production-sub-path/`
    : `/`
}
```







- https://kabkee.github.io/vue-cli/vue-cli-publicPath/
- http://daplus.net/javascript-webpack%EC%9D%98-publicpath%EB%8A%94-%EB%AC%B4%EC%97%87%EC%9D%84%ED%95%A9%EB%8B%88%EA%B9%8C/

