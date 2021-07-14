# Mixins

> Vue component에 재사용 가능한 기능을 배포하는 유연한 방법.



- example

  ```javascript
  // mixin 객체 생성
  var myMixin = {
    created: function () {
      this.hello()
    },
    methods: {
      hello: function () {
        console.log('hello from mixin!')
      }
    }
  }
  
  // mixin을 사용할 컴포넌트 정의
  var Component = Vue.extend({
    mixins: [myMixin]
  })
  
  var component = new Component() // => "hello from mixin!"
  ```



- 옵션 병합

  mixin과 컴포넌트 자체에 중첩 옵션이 포함되어 있으면 적절한 전략을 사용하여 병합된다.  => 같은 병합 전략은 Vue.extend()에서 사용된다.

  - `data` 옵션이 중첩된 경우 컴포넌트의 data를 우선으로 하여 병합된다.
  - 같은 이름의 `훅 함수`는 모두 호출되고 mixin훅은 컴포넌트 자체의 훅 이전에 호출된다.
  - `methods`, `components`, `directives`는 같은 객체에 병합되고, 충돌시 컴포넌트의 옵션이 우선된다.



- 전역 Mixin

  > mixin은 전역으로 적용할 수 있고, 전역으로 적용시 모든 vue 인스턴스에 영향을 미친다.



https://kr.vuejs.org/v2/guide/mixins.html