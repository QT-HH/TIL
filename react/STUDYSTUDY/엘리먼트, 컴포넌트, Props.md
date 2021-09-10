# 엘리먼트 렌더링



## DOM에 엘리먼트 렌더링 하기

```react
<div id="root"></div>
```

이 안에 들어가는 모든 엘리먼트를 React DOM에서 관리하기 때문에 이것을 루트DOM노드라고 부른다.

React 엘리먼트를 루트DOM노드에 렌더링하려면 둘 다 `ReactDOM.render()`로 전달하면 된다.

```react
const element = <h1>Hello, world</h1>
ReactDOM.render(element, document.getElementById('root'))
```





## ReactDOM을 이용하여 렌더링된 엘리먼트 업데이트하기

```react
function tick() {
  const element = (
  	<div>
    	<h1>Hello, world!</h1>
      <h2>It is { new Date().toLocaleTimeString() }.</h2>
    </div>
  )
  ReactDOM.render(element, document.getElementById('root'))
}

setInterval(tick, 1000)
```

위 코드에서는 1초마다 `ReactDOM.render()`를 호출하여 화면을 업데이트한다,

이렇게 전체 UI를 다시 그로도록 설계를 해도 `ReactDOM`은 내용이 변경된 부분만 업데이트한다.

하지만 실제로 대부분의 리액트 앱은 `ReactDOM.render()`를 한 번만 호출한다.



# Components와 Props

