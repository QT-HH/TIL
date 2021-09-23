# 영화 사이트

> JS로 완성 후 TS로 리팩토링해보깅



## <초기 개발환경 셋업 과정>

```shell
npx create-react-app demo-movies
npm install redux
npm install @reduxjs/toolkit
npm install redux-saga
npm install react-router-dom
npm install react-redux
npm install redux-devtools-extension
```



import 상대경로를 절대경로로 변경

- root폴더 아래에 jsconfig.json 생성후 baseUrl설정 추가후 vsCode 재시작

```json
// jsconfig.json
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"]
}

// https://oyeahhh.tistory.com/176
```



## stylus 적용

- stylus, stylus-loader 4.3.3버전 설치 ( stylus-loader 5버전부터는 webpack 5)

```shell
npm install stylus-loader@4.3.3 stylus --save-dev
```



- `eject` 를 통해 config파일 꺼내기

```shell
npm run eject
```



- `root/config/webpack.config` 에서 stylus 셋팅

```javascript
// ...
const stylusRegex = /\.styl$/;   // .styl 파일

// ...

module.exports = function (webpackEnv) {
  // .........
  return {
    // .......
    module: {
      // ...
      rules: [
        // ...
        {
          oneOf: [
            // ...
            {
              test: stylusRegex,
              use: getStyleLoaders(
                {
                  importLoaders: 1,
                  sourceMap: isEnvProduction
                    ? shouldUseSourceMap
                    : isEnvDevelopment,
                },
                'stylus-loader'
              ),
            },
          ]
        }
      ]
    }
  }
```





- 원하는 폴더에 `styl` 파일 생성 후 적용 확인

```stylus
// Header.styl
.red
  background-color: red
header
  color: blue
```



```javascript
// Header.js
import 'components/Layout/Header.styl'

const Header = () => {
  return (
    <header className={'red'}>
      <h2>Header~~~~~~~~~~~</h2>
    </header>
  )
}

export default Header
```





